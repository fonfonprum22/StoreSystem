<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card>
      <v-card-title>Edit ProductID | {{ product.id }}</v-card-title>
      <v-card-subtitle>edit data product in storck. </v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col>
            <v-row class="ma-0 pa-0">
              <v-col class="ma-0 pb-0">
                <v-text-field
                  placeholder="Name"
                  label="Product Name"
                  rounded
                  filled
                  dense
                  v-model="product.data.name"
                  :rules="[(v) => !!v || 'Product Name is required']"
                  required
                />
              </v-col>
            </v-row>
            <v-row class="ma-0 pa-0">
              <v-col class="ma-0 pb-0">
                <v-text-field
                  placeholder="0"
                  label="Purchase Price"
                  rounded
                  filled
                  dense
                  suffix="Baht"
                  type="number"
                  v-model="product.data.purchasePrice"
                  :rules="[(v) => !!v || 'Purchase Price is required']"
                  required
                />
              </v-col>
            </v-row>
            <v-row class="ma-0 pa-0">
              <v-col class="ma-0 pb-0">
                <v-text-field
                  placeholder="0"
                  label="Price"
                  rounded
                  filled
                  dense
                  suffix="Baht"
                  type="number"
                  v-model="product.data.price"
                  :rules="[(v) => !!v || 'Price is required']"
                  required
                />
              </v-col>
            </v-row>
            <v-row class="ma-0 pa-0">
              <v-col class="ma-0 pb-0">
                <v-text-field
                  placeholder="0"
                  label="Instorck"
                  rounded
                  filled
                  dense
                  suffix="Unit"
                  type="number"
                  v-model="product.data.instorck"
                  :rules="[(v) => !!v || 'Instorck is required']"
                  required
                />
              </v-col>
            </v-row>
            <v-row class="ma-0 pa-0">
              <v-col class="ma-0 pb-0">
                <v-select
                  :items="items"
                  placeholder=" "
                  label="Type"
                  rounded
                  filled
                  dense
                  v-model="product.data.type"
                  :rules="[(v) => !!v || 'Type is required']"
                  required
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row class="ma-0 pa-0">
              <v-col class="ma-0 pb-0">
                <v-text-field
                  placeholder="0000-00-00"
                  label="BuyDate"
                  rounded
                  filled
                  dense
                  disabled
                  v-model="product.data.buyDate"
                  :rules="[(v) => !!v || 'BuyDate is required']"
                  required
                />
              </v-col>
              <v-col class="ma-0 pl-0 pb-0">
                <v-text-field
                  placeholder="0000-00-00"
                  label="Expire"
                  rounded
                  filled
                  dense
                  disabled
                  v-model="product.data.expire"
                  :rules="[(v) => !!v || 'Expire is required']"
                  required
                />
              </v-col>
            </v-row>
            <v-row class="ma-0 pa-0">
              <v-col class="ma-0">
                <v-date-picker v-model="dates" range landscape />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex flex-row-reverse pa-5">
        <v-btn class="ml-3" @click="close_dialog()">close</v-btn>
        <v-btn :disabled="!valid" @click="edit_dialog()">Save product</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  props: ["items", "product"],
  data: () => ({
    valid: true,
    dates: ["", ""],
  }),
  methods: {
    close_dialog() {
      this.$refs.form.reset();
      this.$emit("close");
    },
    edit_dialog() {
      this.$store.dispatch('put_data_in_collection_products', this.product)
      this.close_dialog() 
    }
  },
  updated() {
    if (this.dates[0] != "" && this.dates[0] != null) {
      this.product.data.buyDate = this.dates[0];
      this.product.data.expire = this.dates[1];
    }
  },
};
</script>
