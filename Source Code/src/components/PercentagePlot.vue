<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="block" v-for="year in years" v-bind:key="year">
          <label class="checkbox">
            <input type="checkbox" @click="toggle(year, $event)" />
            {{ year }}
          </label>
          <!-- <div class="card" :style="{ 'background-color': getColor(year) }">
            <br />
          </div> -->
        </div>
      </div>
      <div class="column is-three-fifths">
        <svg></svg>
      </div>
      <div id="tooltip" class="column">
        <div v-if="properties.Share != 0" class="card-content">
          Year: {{ properties.Year }}
          <br />
          Month: {{ properties.Month }}
          <br />
          Make: {{ properties.Brand }}
          <br />
          Monthly Sales Share: {{ properties.Share }}%
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
        Share: 0,
      },

      colors: [
        "#3366cc",
        "#dc3912",
        "#ff9900",
        "#109618",
        "#990099",
        "#0099c6",
        "#dd4477",
        "#66aa00",
        "#b82e2e",
        "#316395",
        "#994499",
        "#22aa99",
        "#aaaa11",
        "#6633cc",
        "#e67300",
        "#8b0707",
        "#651067",
        "#329262",
        "#5574a6",
        "#3b3eac",
      ],
      colorIndex: 0,

      colorPair: {},
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
              for (var brand of month.MakeUp.data
                .sort((a, b) => a.Brand.localeCompare(b.Brand))
                .reverse()) {
                this.selectedData.push({
                  Date: new Date(year + " " + month.Brand),
                  Year: year,
                  Month: month.Brand,
                  Identifier: year + " " + month.Brand,
                  Brand: brand.Brand,
                  Share: brand.Share,
                });
              }
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

      this.y = d3.scaleLinear().domain([0, 100]).range([this.height, 0]);
      this.y_axis = d3.axisLeft(this.y);
      this.y_svg = this.svg.append("g");
    },
    moveBars() {
      this.svg
        .selectAll(".bar")
        .transition("shrink")
        .duration(this.animation_duration)
        .attr("opacity", 0)
        .transition()

        .remove();
    },
    getColor(brand) {
      if (!(brand in this.colorPair)) {
        this.colorPair[brand] = this.colors[this.colorIndex];
        this.colorIndex++;
      }
      return this.colorPair[brand];
    },
    plotSelectedData() {
      this.x.range([0, this.width]).domain(
        this.selectedData.map((d) => {
          return d.Identifier;
        })
      );

      this.x_svg
        .attr("transform", "translate(0," + this.height + ")")
        .transition()
        .duration(this.animation_duration)
        .call(this.x_axis);

      this.moveBars();

      // Add Y axis

      this.y_svg
        .transition()
        .duration(this.animation_duration)
        .call(this.y_axis);

      var offset = 0;
      var index = 0;
      // Bars
      this.svg
        .selectAll("bars")
        .data(this.selectedData)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d) => {
          return this.x(d.Identifier);
        })
        .attr("width", this.x.bandwidth())
        .attr("y", (d) => {
          let y = this.y(d.Share + offset);
          offset += d.Share;

          index++;

          if (index === 10) {
            offset = 0;
            index = 0;
          }
          return y;
        })
        .attr("height", (d) => {
          return this.height - this.y(d.Share);
        })
        .attr("opacity", 0)
        .attr("fill", (d) => this.getColor(d.Brand))
        .on("mouseover", (event, data) => {
          d3.select(event.target)
            .transition()
            .duration("50")
            .attr("opacity", "0.9");

          this.properties.Year = data.Year;
          this.properties.Month = data.Month;
          this.properties.Share = data.Share;
          this.properties.Brand = data.Brand;
        })
        .on("mouseout", (event) => {
          d3.select(event.target)
            .transition()
            .duration("50")
            .attr("opacity", "1");
          this.properties = {
            Share: "",
          };
        })
        .transition("grow")
        .duration(this.animation_duration)
        .attr("opacity", 1);
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
