<script>
/* JS HERE */
import ProductCard from "./ProductCard.vue";
import {state} from '../state.js'
export default {
    name: 'AppMain',
    components: {
        ProductCard,
    },
    data() {
        return {
            state // (state:state / KEY: VALUE)
            
        }
    },
    mounted() {
        this.state.getProducts(this.state.products_url)
        //INVOKE FUNCTION for use "url" and select products in data of state
    }
}
</script>

<template>
    <!-- HTML HERE -->
    <main id="site-main">
        <div class="main-container container debug">
            <ProductCard :product="product" v-for="product in state.products" />
        </div>
    </main>
    <!-- /#site-main -->
</template>
<style lang="scss">

/* CSS HERE */
@use '../variables/variables.scss' as *;

.absolute {
    position: absolute;
}

.hidden {
    display: none;
}

.first:hover img {
    display: none;
    cursor: pointer;
    border: 1px solid black;
    box-shadow: 10px 8px rgba(0, 0, 0, 0.466);
}

.first:hover .hidden {
    display: inline;
}

.main-container {
    padding: 50px;
    display: flex;
    gap:1rem;
    flex-wrap: wrap;
    justify-content: space-between;
}

.flex-top-bottom {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: calc(100%/3 - 20px);

}

.img img {
    width: 100%;
    box-shadow: 10px 8px rgba(0, 0, 0, 0.192);
    border-radius: 20px;
}

.top-container {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    

}

.hearts-container {
    top: 10px;
    right: 5px;
    background-color: $light-color;
    padding: 5px 10px;
    border-radius: 5px;
    border-top-right-radius: 50%;

}
.heart-red{
    color: red;
}

.percent-sales-container {
    bottom: 30px;
    color: $light-color;
}
.percent-sales-container-bg-color{
    background-color: $discount-color;
    padding: 2px 8px;
}

.article-description-container {
    bottom: 30px;
    left: 50px;
    color: $light-color;
}
.article-description-container-bg-color{
    padding: 2px 8px;
    background-color: $tag-color;
}

.article-name {
    font-weight: bold;
    font-size: 1.2rem;

}
.prices{
    display: flex;
    gap: 0.5rem;
}

.sale-price {
    color: black;
    font-weight: bold;
    margin-right: 2px;
}

.original-price {
    text-decoration: line-through;
}

.badge-container{
    display: flex;
    bottom: 30px;;
}
.bottom-container{
    padding: 0.5rem 0.2rem;
}
</style>