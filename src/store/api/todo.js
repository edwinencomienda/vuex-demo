import axios from 'axios'

export default {
  get () {
    return axios.get('http://todo-api.local/todos')
  }
}