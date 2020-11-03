<template>
  <v-card>
    <v-card-title> Product list </v-card-title>
    <v-card-subtitle>
      Select the product list and specify the desired quantity.
    </v-card-subtitle>
    <v-card-text>
      <div v-for="(item, index) in bill_items_index" :key="index" class="pa-0 ma-0">
        <FormComponents 
            :index="index"
            :product_name="product_name"
            :products="products"
            v-on:send_produc = "send_product_to_list"
        />
      </div>
      <v-row>
        <v-col>
          <v-btn @click="add_menu()" rounded block v-if="bill_items_index < 5">
            Add menu
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
import FormComponents from './FormbillComponent'
export default {
  data: () => ({
    bill_items_index: 1,
    bill_items: [],
    products: [],
    product_name: [],
  }),
  components : {
    FormComponents
  },
  methods: {
    add_menu() {
      this.bill_items_index = this.bill_items_index + 1;
    },
    initialize_products() {
      this.products = this.$store.state.products;
      this.$store.state.products.forEach(element => {
        this.product_name.push(element.data.name);
      });
    },
    send_product_to_list(payload) {
      if(this.bill_items.find(element => element.index == payload.index) != undefined) {
        this.bill_items[payload.index] = payload
      }
      else {
        this.bill_items.push(payload)
      }
      this.$emit('send_bill', this.bill_items)
    }
  },
  created() {
      this.initialize_products()
  },
  updated() {
      console.log(this.bils)
  }
};
</script>