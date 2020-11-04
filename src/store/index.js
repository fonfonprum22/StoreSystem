import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config_status: false,
    products: [],
    logs: [],
    employees: [],
    user: undefined
  },
  mutations: {
    get_collection_products(state, payload) {
      state.products.push(payload)
      console.log(state.products)
    },
    get_collection_logs(state, payload) {
      state.logs.push(payload)
    },
    get_employees (state, payload) {
      state.employees.push(payload)
    },
    reset_employees(state) {
      state.employees = []
    },
    reset_products(state) {
      state.products = []
    },
    reset_logs(state) {
      state.logs = []
    }
  },
  actions: {
    config_firebase({ dispatch }) {
      const config = {
        apiKey: "AIzaSyA5wWfyOMgGnU56vmccj0_NfPPSYijyZ_Y",
        authDomain: "newstore-d8ef2.firebaseapp.com",
        databaseURL: "https://newstore-d8ef2.firebaseio.com",
        projectId: "newstore-d8ef2",
        storageBucket: "newstore-d8ef2.appspot.com",
        messagingSenderId: "582816019955",
        appId: "1:582816019955:web:d3e667d05f90fef4ca0e86",
        measurementId: "G-L9GLCTQ5XP"
      }
      firebase.initializeApp(config);
      firebase.analytics()
      dispatch('get_collection_products')
    },
    post_data_to_collection_products({ dispatch }, payload) {
      firebase.firestore().collection('products').add(payload)
        .catch((err) => {
          console.log(err)
        })
      const log_payload = {
        actions: 'Buy',
        nameProduct: payload.name,
        money: payload.buy,
        unit: Number(payload.instorck),
        date: payload.buyDate,
        productType: payload.type
      }
      dispatch('get_collection_products')
      dispatch('post_data_to_collection_logs', log_payload)
    },
    post_data_to_collection_logs({ dispatch }, payload) {
      firebase.firestore().collection('logs').add(payload)
        .catch((err) => {
          console.log(err)
        })
      dispatch('get_collection_logs')
    },
    post_employees({ dispatch }, payload) {
      firebase.firestore().collection('employee').add(payload)
        .catch((err) => {
          console.log(err)
        })
      dispatch('get_collection_employees')
    },
    async get_collection_employees({ commit }) {
      const cityRef = firebase.firestore().collection('employee')
      const snapshot = await cityRef.get();
      commit('reset_employees')
      snapshot.forEach(doc => {
        const data = {
          id: doc.id,
          data: doc.data()
        }
        commit('get_employees', data)
      });
    },
    async get_collection_products({ commit }) {
      const cityRef = firebase.firestore().collection('products')
      const snapshot = await cityRef.get();
      commit('reset_products')
      snapshot.forEach(doc => {
        const data = {
          id: doc.id,
          data: doc.data()
        }
        commit('get_collection_products', data)
      });
    },
    async get_collection_logs({ commit }) {
      const cityRef = firebase.firestore().collection('logs')
      const snapshot = await cityRef.get();
      commit('reset_logs')
      snapshot.forEach(doc => {
        const data = {
          id: doc.id,
          data: doc.data()
        }
        commit('get_collection_logs', data)
      });
    },
    async put_data_in_collection_products({ dispatch }, payload) {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();
      today = yyyy + '-' + mm + '-' + dd;

      const cityRef = firebase.firestore().collection('products')
      await cityRef.doc(payload.id).set(payload.data)
      const log_payload = {
        actions: 'Edit',
        nameProduct: payload.data.name,
        money: payload.data.buy,
        unit: payload.data.instorck,
        date: today,
        productType: payload.data.type
      }
      dispatch('post_data_to_collection_logs', log_payload)
      dispatch('get_collection_products')
    },

    async sale_data_in_collection_products({ dispatch }, payload) {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();
      today = yyyy + '-' + mm + '-' + dd;

      const cityRef = firebase.firestore().collection('products')
      await cityRef.doc(payload.id).set(payload.data)
      const log_payload = {
        actions: 'Sale',
        nameProduct: payload.data.name,
        money: payload.price,
        unit: payload.unit,
        date: today,
        productType: payload.data.type
      }
      dispatch('post_data_to_collection_logs', log_payload)
      dispatch('get_collection_products')
    },

    async delete_data_collection_product({ dispatch }, payload) {
      firebase.firestore().collection('products').doc(payload).delete()
      dispatch('get_collection_products')
    }
  },
  modules: {
  }
})
