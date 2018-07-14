import api from '../api/todo'

export default {
  namespaced: true,
  state: {
    items: [],
    pagination: ''
  },
  getters: {
    items: state => state.items
  },
  mutations: {
    setTodos (state, payload) {
      state.items = payload
    }
  },
  actions: {
    async getTodos ({ commit }) {
      const response = await api.get()
      commit('setTodos', response.data)
      console.log(response)
    }
  }
}
