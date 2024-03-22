<script>
/* JS HERE */
import ProductCard from "./ProductCard.vue";
import { products } from '../data.js'
export default {
    name: 'AppMain',
    components: {
        ProductCard,
    },
    data() {
        return {
            products
        }
    }
}
</script>

<template>
    <!-- HTML HERE -->
    <main id="site-main">
            <ProductCard 
            :product="product" 
            v-for="product in products" />

    </main>
    <!-- /#site-main -->
</template>
<style lang="scss">

/* CSS HERE */


</style>