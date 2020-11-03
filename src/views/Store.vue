<template>
  <div>
    <Table_Data
      :headers="headers"
      :products="products"
      :ittle_add="`Add new product`"
      v-on:reset="initialize()"
      v-on:add_new="open_dialog_addnew_product()"
      v-on:edit_item="open_dialog_edit_product"
      v-on:delete_item="delete_data_in_product"
    />
    <v-dialog persistent v-model="add_dialog" width="1000">
      <Form_Add v-on:close="close_dialog_addnew_product()" :items="items" />
    </v-dialog>
    <v-dialog persistent v-model="edit_dialog" width="1000">
      <From_Edit
        v-on:close="close_dialog_edit_product()"
        :items="items"
        :product="product"
      />
    </v-dialog>
  </div>
</template>

<script>
import Form_Add from "../components/dialog_card_product/AddNew";
import From_Edit from "../components/dialog_card_product/Edit";
import Table_Data from "../components/table_data/Table";
export default {
  data: () => ({
    add_dialog: false,
    edit_dialog: false,
    headers: [
      {
        text: "Products Name (List)",
        align: "start",
        sortable: false,
        value: "data.name",
      },
      { text: "Type", value: "data.type" },
      { text: "BuyDate", value: "data.buyDate" },
      { text: "Expire", value: "data.expire" },
      { text: "PurchasePrice (Baht)", value: "data.purchasePrice" },
      { text: "Price (Baht)", value: "data.price" },
      { text: "Instorck (unit)", value: "data.instorck" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    products: [],
    product: {},
    items: ["Drink","Snacks","Garnish"],
  }),
  components: {
    Table_Data,
    Form_Add,
    From_Edit,
  },
  created() {
    this.initialize();
  },
  updated() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.products = this.$store.state.products;
      console.log("initalize");
    },
    open_dialog_addnew_product() {
      this.add_dialog = true;
    },
    close_dialog_addnew_product() {
      this.add_dialog = false;
      this.initialize()
    },
    open_dialog_edit_product(params) {
      this.product = params;
      this.edit_dialog = true;
    },
    close_dialog_edit_product() {
      this.edit_dialog = false;
      this.initialize()
    },
    delete_data_in_product(params) {
      console.log(params.id);
      this.$store.dispatch("delete_data_collection_product", params.id);
      this.initialize();
    },
  },
};
</script>