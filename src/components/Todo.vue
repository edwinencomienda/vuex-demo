<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Text</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td>{{ item.id }}</td>
                    <td>{{ item.text }}</td>
                    <td>{{ item.done }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('todo', {
      items: 'items'
    })
  },
  created () {
    this.$store.dispatch('todo/getTodos')
  }
}
</script>
