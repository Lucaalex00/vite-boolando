<script>
import { products } from '../data.js'
export default {
    name: 'AppCard',
    data() {
        return {
            products:products
        }
    }
}
</script>

<template>
    <div v-for="product in products">
        {{product.name}}
        
    </div>
</template>


<style>

</style>