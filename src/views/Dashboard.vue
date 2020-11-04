<template>
  <div>
    <v-row>
      <v-col>
        <TradingStatisticsBaht
          :buy="buy"
          :sale="sale"
          :lucre="lucre"
          :mode="'Baht'"
        />
      </v-col>
      <v-col>
        <TradingStatisticsBaht
          :buy="unit_buy"
          :sale="unit_sale"
          :mode="'Unit'"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TradingStatisticsBaht from "../components/tradingStatistics/TradingStatistics";
export default {
  data: () => ({
    unit_buy: 0,
    unit_sale: 0,
    buy: 0,
    sale: 0,
    lucre: 0,
    Trading_statistics: "",
  }),
  created() {
    this.calculator_buy_sale_money();
    this.calculator_buy_sale_unit();
  },
  components: {
    TradingStatisticsBaht,
  },
  methods: {
    calculator_buy_sale_money() {
      this.buy = 0;
      this.sale = 0;
      this.lucre = 0;
      this.$store.state.logs.forEach((element) => {
        if (element.data.actions == "Buy") {
          this.buy = this.buy + element.data.money;
        } else if (element.data.actions == "Sale") {
          this.sale = this.sale + element.data.money;
        }
      });
      this.lucre = this.sale - this.buy;
      if (this.lucre < 0) {
        this.lucre = 0;
      }
    },
    calculator_buy_sale_unit() {
    this.unit_buy = 0
    this.unit_sale = 0
    this.$store.state.logs.forEach((element) => {
        console.log('element');
        if (element.data.actions == "Buy") {
          this.unit_buy = this.unit_buy + element.data.unit;
        } else if (element.data.actions == "Sale") {
          this.unit_sale = this.unit_sale + element.data.unit;
        }
      });
  }
  },
  
};
</script>