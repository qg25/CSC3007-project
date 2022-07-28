<template>
  <section class="hero">
    <div class="hero-body">
      <p class="title">SG Car Sales</p>
      <p class="subtitle">Group 5</p>
    </div>
  </section>
  <div class="tabs is-centered">
    <ul>
      <li
        :class="{ 'is-active': activeTab === 'yearly' }"
        @click="set('yearly')"
      >
        <a>Yearly Comparison</a>
      </li>
      <li :class="{ 'is-active': activeTab === 'data' }" @click="set('data')">
        <a>Data Exploration</a>
      </li>
      <li
        :class="{ 'is-active': activeTab === 'percentage' }"
        @click="set('percentage')"
      >
        <a>Percentage Plot</a>
      </li>
    </ul>
  </div>
  <div class="container">
    <BasicPlot v-if="activeTab === 'data'" />
    <ComparisonPlot v-if="activeTab === 'yearly'" />
    <PercentagePlot v-if="activeTab === 'percentage'" />
  </div>
</template>

<script>
import BasicPlot from "./components/BasicPlot.vue";
import ComparisonPlot from "./components/ComparisonPlot.vue";
import PercentagePlot from "./components/PercentagePlot.vue";
export default {
  name: "App",
  components: {
    BasicPlot,
    ComparisonPlot,
    PercentagePlot,
  },
  data() {
    return {
      activeTab: "data",
    };
  },
  methods: {
    set(tab) {
      this.activeTab = tab;
    },
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
