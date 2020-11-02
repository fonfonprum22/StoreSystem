<template>
  <v-dialog v-model="dialog" max-width="900px" persistent>
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
        <span>New Product</span>
      </v-btn>
    </template>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card>
        <v-card-title>
          <span class="headline" v-if="data != null">Edit Product</span>
          <span class="headline" v-else>New Product</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col class="pr-8">
                <v-row>
                  <v-col class="pa-0 ma-0">
                    <v-text-field
                      label="Product Name"
                      placeholder=" "
                      filled
                      dense
                      v-model="product.productName"
                      :rules="[v => !!v || 'Product Name is required']"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="pa-0 ma-0">
                    <v-select
                      :items="types"
                      placeholder=" "
                      filled
                      label="Type"
                      v-model="product.type"
                      :rules="[v => !!v || 'Type is required']"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="pa-0 ma-0">
                    <v-text-field
                      label="Price"
                      placeholder=" "
                      filled
                      dense
                      type="number"
                      v-model="product.price"
                      :rules="[v => !!v || 'Price is required']"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="pa-0 ma-0">
                    <v-text-field
                      label="Selling Price"
                      placeholder=" "
                      filled
                      dense
                      type="number"
                      v-model="product.sellingPrice"
                      :rules="[v => !!v || 'Selling Price is required']"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="pa-0 ma-0">
                    <v-text-field
                      label="Unit"
                      placeholder=" "
                      filled
                      dense
                      type="number"
                      v-model="product.unit"
                      :rules="[v => !!v || 'Unit is required']"
                      required
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
                <v-row>
                  <v-col class="pa-0 ma-0 pr-5">
                    <v-text-field
                      label="Buy Date"
                      placeholder=" "
                      filled
                      dense
                      v-model="date[0]"
                      :rules="[v => !!v || 'Buy Date is required']"
                      required
                    />
                  </v-col>
                  <v-col class="pa-0 ma-0 ">
                    <v-text-field
                      label="Expired"
                      placeholder=" "
                      filled
                      dense
                      v-model="date[1]"
                      :rules="[v => !!v || 'Expired is required']"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row align="center">
                  <v-date-picker v-model="date" landscape range />
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog()">
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            :disabled="!valid"
            v-if="data != null"
            @click="editData()"
          >
            Edit Product
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            :disabled="!valid"
            v-else
            @click="addData()"
          >
            Add New Product
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  props: ["dialog", "data", "id"],
  data: () => ({
    valid: true,
    date: ["", ""],
    update: 0,
    product: {
      productName: "",
      type: "",
      price: "",
      sellingPrice: "",
      buyDate: "",
      expired: "",
      unit: ""
    },
    types: ["Snack", "Drink", "Garnish"]
  }),
  methods: {
    closeDialog() {
      this.$refs.form.reset();
      this.dialog = false;
      this.update = 0;
      this.$emit("close");
    },
    editData() {
      // console.log('edit')
      this.product.buyDate = this.date[0];
      this.product.expired = this.date[1];
      const payload = {
        data: this.product,
        id: this.id
      };
      this.$store.commit("putProduct", payload);
      this.closeDialog();
    },
    addData() {
      this.product.buyDate = this.date[0];
      this.product.expired = this.date[1];
      this.$store.commit("addProduct", this.product);
      this.closeDialog();
    }
  },
  updated() {
    if (
      this.dialog == true &&
      this.update == 0 &&
      this.data.productName != null
    ) {
      this.product = this.data;
      this.date[0] = this.product.buyDate;
      this.date[1] = this.product.expired;
      this.update = 1;
      console.log("test");
    } else if (this.update == 0) {
      this.data = null;
    }
  }
};
</script>
