<template>
    <div>
        <form @submit.prevent="submitForm">
            <input v-model="form.text" type="text">
            <button v-if="!form.id">Submit</button>
            <button v-else>Update</button>
            <button type="button" v-if="form.id" @click="resetForm">Cancel</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Text</th>
                    <th>Done</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td>{{ item.id }}</td>
                    <td>{{ item.text }}</td>
                    <td>{{ item.done }}</td>
                    <td>
                        <button @click="editTodo(item)">edit</button>
                        <button @click="handleShowDeleteConfirm(item)">delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-show="showDeleteConfirm">
            are you sure to delete this?
            <button @click="deleteTodo">yes</button>
            <button @click="showDeleteConfirm = false">no</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      form: { text: '', done: false },
      showDeleteConfirm: false
    }
  },
  computed: {
    ...mapGetters('todo', {
      items: 'items'
    })
  },
  created () {
    this.getTodos() 
  },
  methods: {
    async getTodos () {
      this.$store.dispatch('todo/getTodos')
    },
    submitForm () {
      if (!this.form.id) {
        this.createTodo()
      } else {
        this.updateTodo()
      }
    },
    async createTodo () {
      await this.$store.dispatch('todo/createTodo', this.form)
      this.getTodos()
      this.resetForm()
    },
    async updateTodo () {
      await this.$store.dispatch('todo/updateTodo', this.form)
      this.getTodos()
      this.resetForm()
    },
    async deleteTodo () {
      await this.$store.dispatch('todo/deleteTodo', this.form)
      this.getTodos()
      this.cancelDelete()
    },
    editTodo (todo) {
      this.form = Object.assign({}, todo)
    },
    handleShowDeleteConfirm (todo) {
      this.showDeleteConfirm = true
      this.form = Object.assign({}, todo)
    },
    resetForm () {
      this.form = { text: '', done: false }
    },
    cancelDelete () {
      this.showDeleteConfirm = false
      this.resetForm()
    }
  }
}
</script>
