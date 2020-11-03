<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card>
      <v-card-title>Add New Product</v-card-title>
      <v-card-subtitle> install product in storck. </v-card-subtitle>
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
                  v-model="product.name"
                  :rules="[v => !!v || 'Product Name is required']"
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
                  v-model="product.purchasePrice"
                  :rules="[v => !!v || 'Purchase Price is required']"
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
                  v-model="product.price"
                  :rules="[v => !!v || 'Price is required']"
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
                  v-model="product.instorck"
                  :rules="[v => !!v || 'Instorck is required']"
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
                  v-model="product.type"
                  :rules="[v => !!v || 'Type is required']"
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
                  v-model="dates[0]"
                  :rules="[v => !!v || 'BuyDate is required']"
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
                  v-model="dates[1]"
                  :rules="[v => !!v || 'Expire is required']"
                  required
                />
              </v-col>
            </v-row>
            <v-row class="ma-0 pa-0">
              <v-col class="ma-0">
                   <v-date-picker
                      v-model="dates"
                      range
                      landscape
                    />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex flex-row-reverse pa-5">
        <v-btn class="ml-3" @click="close_dialog()">close</v-btn>
        <v-btn :disabled="!valid" @click="add_new_product()">Add new product</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
export default {
  props: ['items'],
  data: () => ({
    valid: true,
    dates: ['',''],
    product : {
            name : '',
            buyDate : '',
            expire : '',
            purchasePrice : '', 
            price : '',
            instorck : '',
            type : '' 
        }
  }),
  methods : {
    add_new_product() {
      this.$refs.form.validate()
      if (this.valid) {
        this.product.buyDate = this.dates[0]
        this.product.expire = this.dates[1]
        this.$store.dispatch('post_data_to_collection_products', this.product)
        this.close_dialog()
      }
    },
    close_dialog(){
      this.$refs.form.reset()
      this.$emit('close')
    }
  },
};
</script>
