<template>
  <v-card>
    <v-card-title class="grey">
      Trading statistics ({{ mode }})
      <v-spacer />
      <div class="pr-2">
        <v-btn fab small @click="switch_mode('DoughnutChart')">
          <v-icon> mdi-chart-arc </v-icon>
        </v-btn>
      </div>
      <div class="pr-2">
        <v-btn fab small @click="switch_mode('BarChart')">
          <v-icon> mdi-chart-bar </v-icon>
        </v-btn>
      </div>
    </v-card-title>
    <v-card-text>
      <DoughnutChart
        v-if="mode_chart == 'DoughnutChart'"
        :datacollection="Trading_statistics_doughnutChart"
      />
      <BarChart 
        v-else-if="mode_chart == 'BarChart'" 
        :datacollection = "Trading_statistics_barchart"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
export default {
  components: {
    DoughnutChart,
    BarChart,
  },
  props: ["buy", "sale", "lucre", "unit", "mode"],
  created() {
    if (this.mode == 'Baht'){   
      this.calculator_trading_statistics_baht(this.buy, this.sale, this.lucre);
    }
    else {
      this.calculator_trading_statistics_unit(this.buy, this.sale);
    }
 },
  data: () => ({
    mode_chart: "DoughnutChart",
    Trading_statistics_doughnutChart : ''
  }),
  methods: {
    calculator_trading_statistics_baht(buy, sale, lucre) {
      this.Trading_statistics_doughnutChart = {
        labels: ["Buy", "Sale", "Lucre"],
        datasets: [
          {
            backgroundColor: ["#E46651", "#41B883", "#00D8FF"],
            data: [buy, sale, lucre],
          },
        ],
      }
     this.Trading_statistics_barchart = {
      datasets: [
        {
          label: 'Buy',
          backgroundColor: '#E46651',
          data: [buy]
        },
        {
          label: 'Sale',
          backgroundColor: '#41B883',
          data: [sale]
        },
        {
          label: 'Lucre',
          backgroundColor: '#00D8FF',
          data: [lucre]
        }
      ]
     }
    },
    calculator_trading_statistics_unit(buy, sale) {
      this.Trading_statistics_doughnutChart = {
        labels: ["Buy", "Sale"],
        datasets: [
          {
            backgroundColor: ["#E46651", "#41B883"],
            data: [buy, sale],
          },
        ],
      }
     this.Trading_statistics_barchart = {
      datasets: [
        {
          label: 'Buy',
          backgroundColor: '#E46651',
          data: [buy]
        },
        {
          label: 'Sale',
          backgroundColor: '#41B883',
          data: [sale]
        }
      ]
     }
    },
    switch_mode(payload) {
      console.log(payload)
      this.mode_chart = payload;
    },
  },
};
</script>