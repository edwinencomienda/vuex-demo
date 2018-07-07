import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      { name: 'shoes', price: 200 },
      { name: 'bag', price: 200 },
      { name: 'clothes', price: 100 },
      { name: 'clothes', price: 100 },
    ],
    joke: ''
  },
  getters: {
    productsWithBrands: state => state.products.map(value => {
      value.brand = 'char'
      value.price *= 2
      return value
    }),
    productsWithTwoHundredPrice: state => state.products.filter(value => value.price === 200)
  },
  mutations: {
    addProduct (state, payload) {
      state.products.push(payload)
    },
    setJoke (state, payload) {
      state.joke = payload
    }
  },
  actions: {
    getRandomJoke ({ commit }) {
      fetch('http://api.icndb.com/jokes/random')
      .then(response => response.json())
      .then(data => {
        commit('setJoke', data)
      }).catch(error => console.log(error))
    }
  }
})

