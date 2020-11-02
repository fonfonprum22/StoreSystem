import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    owner: "",
    products: []
  },
  mutations: {
    putProduct(state, payload) {
      const pd = {
        productName:
          payload.data.productName != null ? payload.data.productName : "",
        type: payload.data.type != null ? payload.data.type : "",
        price: payload.data.price != null ? payload.data.price : 0,
        sellingPrice:
          payload.data.sellingPrice != null ? payload.data.sellingPrice : 0,
        buyDate: payload.data.buyDate != null ? payload.data.buyDate : "",
        expired: payload.data.expired != null ? payload.data.expired : "",
        unit: payload.data.unit != null ? payload.data.unit : ""
      };
      state.products[payload.id] = pd;
    },
    addProduct(state, payload) {
      console.log(payload);
      const pd = {
        productName: payload.productName != null ? payload.productName : "",
        type: payload.type != null ? payload.type : "",
        price: payload.price != null ? payload.price : 0,
        sellingPrice: payload.sellingPrice != null ? payload.sellingPrice : 0,
        buyDate: payload.buyDate != null ? payload.buyDate : "",
        expired: payload.expired != null ? payload.expired : "",
        unit: payload.unit != null ? payload.unit : ""
      };
      state.products.push(pd);
    }
  },
  actions: {},
  modules: {}
});
