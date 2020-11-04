<template>
  <div class="small">
    <doughnut-chart :chart-data="datacollection"/>
  </div>
</template>

<script>
import DoughnutChart from "../chart_js/DoughnutChart";

export default {
  components: {
    DoughnutChart,
  },
  props:['datacollection']
};
</script>

<style>
.small {
  max-width: 600px;
  margin: 150px auto;
}
</style>