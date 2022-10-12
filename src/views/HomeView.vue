<script setup>
import c from "../data.json"
import {useRoute, useRouter} from "vue-router"
import { onMounted, ref, watch } from "vue";

const router = useRouter()
const route = useRoute()
const cars = ref(c)
const make = ref("")
const price = ref("")

const handleChange = (e) => {
  router.push({query: { make: make.value, price: price.value }})
}


onMounted(() => {
  make.value = route.query.make;
  price.value = route.query.price
})

watch([make, price], () => {
  if(make.value){
    if(make.value === "All") return cars.value = c
    cars.value = c.filter((c) => {
      return c.make === make.value
    })
  }
  if(price.value){
    cars.value = cars.value.sort((a, b) => {
      console.log(price.value)
    if(price.value === 'htl') return b.price - a.price;
    else return a.price - b.price;
  })
  }
})

</script>

<template>
  <div class="container">
      <h1>Our Cars</h1>
      <label for="">Make:</label>
      <select @change="handleChange" v-model="make">
        <option value="All">All</option>
        <option value="Chevrolet">Chevy</option>
        <option value="Porsche">Porsche</option>
        <option value="Audi">Audi</option>
      </select>
      <label for="">Price:</label>
      <select @change="handleChange" v-model="price">
        <option value="any">Any</option>
        <option value="htl">High to Low</option>
        <option value="lth">Low to High</option>
      </select>
      <div class="cards">
        <div class="card" v-for="car in cars" @click="router.push(`/car/${car.id}`)">
          <h1>{{car.make}}</h1>
          <p>${{car.price}}</p>
        </div>
    </div>
  </div>
</template>


<style scoped>
.cards {
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
}

.card {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
  padding: 15px;
  width: 150px;
  margin-right: 15px;
  cursor: pointer;
  margin-bottom: 20px;

}

.links {
  padding: 20px
}

.links a {
  margin: 0 5px
}
</style>
