<script setup>
import {useRoute, useRouter} from "vue-router"
import {onMounted,ref} from "vue"
import cars from "../data.json"

const route = useRoute()
const router = useRouter()
const car = ref(null)
const {id} = route.params

onMounted(() => {
   const c = cars.find(c => c.id === parseInt(id));
   car.value = c
})

</script>

<template>
    <div class="container">
        <div v-if="car">
            <h1>The Car</h1>
            <p>Make: {{car.make}}</p>
            <p>Body: {{car.body}}</p>
            <p>Price: {{car.price}}</p>
            <p>Year: {{car.year}}</p>
            <button @click="router.push(`/car/${id}/dealer`)">Contact Dealer</button>
            <button @click="router.push(`/car/${id}/manufactorer`)">Contact Manufactorer</button>
            <RouterView />
        </div>
        <div v-else>
            <h1>Car not found</h1>
            <button @click="router.back()">Go Back</button>
        </div>
    </div>
</template>