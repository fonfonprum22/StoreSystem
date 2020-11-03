import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config_status: false,
    products: []
  },
  mutations: {
    get_collection_products(state, payload) {
      state.products.push(payload)
    },
    reset_products(state) {
      state.products = []
    }
  },
  actions: {
    config_firebase({dispatch}) {
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
    post_data_to_collection_products({dispatch}, payload) {
      firebase.firestore().collection('products').add(payload)
        .catch((err) => {
          console.log(err)
        })
        dispatch('get_collection_products')
    },
    async get_collection_products({ commit }) {
      commit('reset_products')
      const cityRef = firebase.firestore().collection('products')
      const snapshot = await cityRef.get();
      snapshot.forEach(doc => {
        const data = {
          id : doc.id,
          data : doc.data()
        }
        commit('get_collection_products', data)
      });
    },
    async put_data_in_collection_products({dispatch}, payload) {
      const cityRef = firebase.firestore().collection('products')
      await cityRef.doc(payload.id).set(payload.data)
      dispatch('get_collection_products')
    },
    async delete_data_collection_product({dispatch}, payload) {
      firebase.firestore().collection('products').doc(payload).delete()
      dispatch('get_collection_products')
    }
  },
  modules: {
  }
})
