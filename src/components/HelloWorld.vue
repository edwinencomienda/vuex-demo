<template>
  <div>
    <center>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="product in productsWithBrands">
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.brand }}</td>
            </tr>
        </tbody>
    </table>
    </center>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      productsWithBrands: 'productsWithBrands'
    })
  },
  mounted () {
    const newProduct = { name: 'yeah', price: 99483, brand: 'glence' }
    this.addProduct(newProduct)
  },
  created () {
    this.$store.dispatch('getRandomJoke')
  },
  methods: {
    ...mapMutations({
      addProduct: 'addProduct'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
