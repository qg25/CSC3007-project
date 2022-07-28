<template>
  <div class="container">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-three-fifths">
        <svg></svg>
      </div>
      <div id="tooltip" class="column">
        <div v-if="properties.Count != 0" class="card-content">
          {{ properties.Brand }}
          <br />
          Count: {{ properties.Count }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "BasicPlot",
  data() {
    return {
      salesData: null,
      selectedData: null,
      path: null,
      properties: {
        Count: 0,
      },

      colors: ["#002051", "#1e3e6e", "#565c6e", "#7f7b75"],
      colorIndex: 0,
      margin: { top: 30, right: 30, bottom: 70, left: 60 },
      width: 1000,
      height: 640,

      animation_duration: 500,

      title: [],
      defaultTitle: "Overall",

      svg: null,
      x: null,
      x_axis: null,
      x_svg: null,

      y: null,
      y_axis: null,
      y_svg: null,
    };
  },
  watch: {
    salesData: function (val) {
      this.setup();
      this.selectedData = this.salesData;
    },
    selectedData: function (val) {
      this.plotSelectedData();
    },
  },
  methods: {
    setup() {
      this.svg = d3
        .select("svg")
        .attr("viewBox", "0 0 " + this.width + " " + this.height)
        .append("g")
        .attr(
          "transform",
          "translate(" + this.margin.left + "," + this.margin.top + ")"
        );

      this.width -= this.margin.left + this.margin.right;
      this.height -= this.margin.top + this.margin.bottom;

      this.x = d3.scaleBand();
      this.x_axis = d3.axisBottom(this.x);
      this.x_svg = this.svg.append("g");

      this.y = d3.scaleLinear();
      this.y_axis = d3.axisLeft(this.y);
      this.y_svg = this.svg.append("g");
    },
    removeButtons() {
      this.svg
        .selectAll(".button")
        .transition("shrink")
        .duration(this.animation_duration)
        .attr("opacity", 0)
        .transition("remove")
        .remove();
    },
    makeBarsZeroAndDestroy() {
      this.svg
        .selectAll(".bar")
        .transition("shrink")
        .duration(this.animation_duration)
        .attr("y", (d) => {
          return this.y(0);
        })
        .attr("height", (d) => {
          return this.height - this.y(0);
        })
        .transition("remove")
        .remove();
    },
    navigateToPath() {
      this.makeBarsZeroAndDestroy();
      if (this.path === "root") {
        this.removeButtons();
        this.selectedData = this.salesData;
        this.path = null;
      } else {
        let d = this.salesData;
        let p;
        let parentPath;
        for (var i = 0; i < this.path.length; i++) {
          p = this.path[i];
          for (var j = 0; j < d.length; j++) {
            if (d[j].Brand === p) {
              parentPath = d[j].MakeUp["path"];
              d = d[j].MakeUp.data;
              break;
            }
          }
        }
        this.selectedData = d;
        this.path = parentPath;
      }
    },
    plotSelectedData() {
      this.x
        .range([0, this.width])
        .domain(
          this.selectedData.map((d) => {
            return d.Brand;
          })
        )
        .padding(0.05);

      this.x_svg
        .attr("transform", "translate(0," + this.height + ")")
        .transition()
        .duration(this.animation_duration)
        .call(this.x_axis);

      // Add Y axis
      this.y
        .domain([
          0,
          d3.max(this.selectedData, function (d) {
            return d.Count * 1.1;
          }),
        ])
        .range([this.height, 0]);

      this.y_svg
        .transition()
        .duration(this.animation_duration)
        .call(this.y_axis);

      // Bars
      this.svg
        .selectAll("bars")
        .data(this.selectedData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => {
          return this.x(d.Brand);
        })
        .attr("y", (d) => {
          return this.y(0);
        })
        .attr("width", this.x.bandwidth())
        .attr("height", (d) => {
          return this.height - this.y(0);
        })
        .attr("fill", this.colors[this.colorIndex])
        .on("mouseover", (event, data) => {
          d3.select(event.target)
            .transition()
            .duration("50")
            .attr("opacity", "0.9");

          if ("MakeUp" in data) {
            d3.select(event.target).attr("cursor", "pointer");
          }

          this.properties.Count = data.Count;
          this.properties.Brand = data.Brand;
        })
        .on("mouseout", (event) => {
          d3.select(event.target)
            .transition()
            .duration("50")
            .attr("opacity", "1");
          this.properties = {
            Count: "",
          };
        })
        .on("click", (event, data) => {
          if ("MakeUp" in data) {
            this.path = data.MakeUp.path;
            this.title.push(data.Brand);
            this.properties = {
              Count: "",
            };
            this.makeBarsZeroAndDestroy();
            this.colorIndex++; // generate color for new layer

            d3.select(event.target)
              .on("mouseover", (event) => {
                d3.select(event.target)
                  .transition()
                  .duration("50")
                  .attr("opacity", "0.9")
                  .style("cursor", "pointer");
              })
              .on("mouseout", null)
              .on("click", (event, data) => {
                d3.select(event.target).attr("class", "bar");
                this.colorIndex--;
                this.title.pop();
                this.navigateToPath();
              })
              .attr("opacity", 1)
              .transition("shrink") // to override above event
              .duration(this.animation_duration)
              .attr("height", this.height * 0.2)
              .attr("y", this.height * 1.05)
              .transition("stretch")
              .attr("width", this.width)
              .attr("x", 0)
              .attr("class", "button");

            setTimeout(() => {
              this.selectedData = data.MakeUp.data;
            }, this.animation_duration * 1.5);
          }
        })
        .transition("grow")
        .duration(this.animation_duration)
        .attr("y", (d) => {
          return this.y(d.Count);
        })
        .attr("height", (d) => {
          return this.height - this.y(d.Count);
        });
    },
  },
  mounted() {
    // Load external data
    Promise.all([
      d3.json(
        "https://raw.githubusercontent.com/qg25/CSC3007-project/master/dataset.json"
      ),
    ]).then((data) => {
      this.salesData = data[0];
    });
  },
};
</script>

<style>
#tooltip {
  text-transform: capitalize;
}

body {
  height: 100vh;
  background-color: lightgray;
}
</style>
