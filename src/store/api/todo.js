import axios from 'axios'

export default {
  get () {
    return axios.get('http://todo-api.local/todos')
  },
  create (payload = {}) {
    return axios.post('http://todo-api.local/todos', payload)
  },
  update (payload = {}) {
    payload._method = 'put'
    return axios.post(`http://todo-api.local/todos/${payload.id}`, payload)
  },
  delete (payload = {}) {
    return axios.delete(`http://todo-api.local/todos/${payload.id}`, payload)
  }
}