<template>
  <div class="small">
      <v-card-text>
        <bar-chart :chart-data="datacollection" />
      </v-card-text>
  </div>
</template>

<script>
import BarChart from "../chart_js/BarChart";

export default {
  components: {
    BarChart,
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