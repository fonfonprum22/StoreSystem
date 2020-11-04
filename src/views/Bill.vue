<template>
  <div>
    <div v-if="!show_bills">
      <v-row>
        <v-col cols="6">
          <div>
            <Bill
              :product_list="product_list"
              :totle="totle"
              :accept="accept"
            />
          </div>
        </v-col>
        <v-col>
          <Formbill v-on:send_bill="send_to_bills" />
        </v-col>
      </v-row>
      <v-footer absolute class="font-weight-medium">
        <v-col class="d-flex justify-center">
          <v-card max-width="1000">
            <v-card-actions>
              <v-row>
                <v-col cols="auto">
                  <span><h3>Accept Money :</h3></span>
                </v-col>
                <v-col>
                  <v-text-field
                    rounded
                    filled
                    dense
                    suffix="Baht"
                    type="number"
                    v-model="accept"
                  >
                  </v-text-field>
                </v-col>
                <v-col>
                  <v-row>
                    <v-col class="pa-0 pl-3 pr-3">
                      <v-btn @click="confirm_to_put_product()" rounded block>
                        confirm
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-footer>
    </div>
    <div v-else>
      <v-row>
        <v-col id="printMe">
        <Bill
              :product_list="product_list"
              :totle="totle"
              :accept="accept"
            />
        </v-col>
      </v-row>
       <v-row class="d-flex justify-center">
                    <v-col cols="6">
                      <v-btn rounded block v-print="printObj">
                        print bill
                      </v-btn>
                    </v-col>
                  </v-row>
                   <v-row class="d-flex justify-center">
                    <v-col cols="6">
                      <v-btn rounded block @click="new_oder()">
                        New Oder
                      </v-btn>
                    </v-col>
                  </v-row>
                 
    </div>
  </div>
</template>
<script>
import Bill from "../components/card_bills/Cardbills";
import Formbill from "../components/card_bills/Formbill";
export default {
  components: {
    Bill,
    Formbill,
  },
  data: () => ({
    product_list: [],
    totle: 0,
    accept: 0,
    show_bills: false,
    printObj: {
      id: "printMe",
      popTitle: "บริษัทฮานะจำกัมหาชน",
      extraCss: "https://www.google.com,https://www.google.com",
      extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
    },
  }),
  methods: {
    send_to_bills(payload) {
      this.totle = 0;
      this.product_list = payload;
      this.product_list.forEach((elememt) => {
        this.totle = this.totle + elememt.price;
      });
    },
    confirm_to_put_product() {
      this.product_list.forEach((elememt) => {
        const payload = {
          id: elememt.id,
          price: elememt.price,
          unit: elememt.unit,
          data: {
            buy: elememt.data.buy,
            buyDate: elememt.data.buyDate,
            expire: elememt.data.expire,
            instorck: elememt.data.instorck - elememt.unit,
            name: elememt.data.name,
            price: elememt.data.price,
            purchasePrice: elememt.data.purchasePrice,
            type: elememt.data.type,
          },
        };
        this.$store.dispatch("sale_data_in_collection_products", payload);
        this.show_bills = true;
      });
    },
    new_oder() {
      this.show_bills = false;
      this.product_list = []
      this.totle = 0
      this.accept = 0
    }
  },
};
</script>