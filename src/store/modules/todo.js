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
    },
    async createTodo ({ commit }, payload) {
      const response = await api.create(payload)
    },
    async updateTodo ({ commit }, payload) {
      const response = await api.update(payload)
    },
    async deleteTodo ({ commit }, payload) {
      const response = await api.delete(payload)
    }
  }
}
