<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="block" v-for="year in years" v-bind:key="year">
          <label class="checkbox">
            <input type="checkbox" @click="toggle(year, $event)" />
            {{ year }}
          </label>
          <div class="card" :style="{ 'background-color': getColor(year) }">
            <br />
          </div>
        </div>
      </div>
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
  name: "App",
  data() {
    return {
      years: [],

      salesData: null,
      selectedData: [],
      properties: {
        Count: 0,
      },

      colors: [
        "#1f77b4",
        "#ff7f0e",
        "#2ca02c",
        "#d62728",
        "#9467bd",
        "#8c564b",
      ],
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
      this.plotSelectedData();
    },
  },
  methods: {
    toggle(year, event) {
      if (event.target.checked) {
        for (var yearlyData of this.salesData) {
          if (yearlyData.Brand === year) {
            for (var month of yearlyData.MakeUp.data) {
              this.selectedData.push({
                Date: new Date(year + " " + month.Brand),
                Year: year,
                Brand: month.Brand + " (" + year + ")",
                Count: month.Count,
              });
            }
          }
        }
      } else {
        this.selectedData = this.selectedData.filter((d) => d.Year !== year);
      }

      this.selectedData.sort((a, b) => {
        return a.Date - b.Date;
      });

      this.plotSelectedData();
    },
    getColor(year) {
      return this.colors[year - 2017];
    },
    setup() {
      this.salesData.map((d) => this.years.push(d.Brand));

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
      this.x_axis = d3.axisBottom(this.x).tickFormat((domain, number) => {
        return " ";
      });
      this.x_svg = this.svg.append("g");

      this.y = d3.scaleLinear();
      this.y_axis = d3.axisLeft(this.y);
      this.y_svg = this.svg.append("g");
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
    plotSelectedData() {
      this.makeBarsZeroAndDestroy();
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
        .attr("fill", (d) => this.getColor(d.Year))
        .on("mouseover", (event, data) => {
          d3.select(event.target)
            .transition()
            .duration("50")
            .attr("opacity", "0.9");

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
