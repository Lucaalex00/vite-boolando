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
        <div class="main-container container debug">
            <ProductCard :product="product" v-for="product in products" />
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
}

.first:hover .hidden {
    display: block;
}

.second:hover img {
    display: none;
    cursor: pointer;
}

.second:hover .hidden {
    display: block;
}

.third:hover img {
    display: none;
    cursor: pointer;
}

.third:hover .hidden {
    display: block;
}

.fourth:hover img {
    display: none;
    cursor: pointer;
}

.fourth:hover .hidden {
    display: block;
}

.fifth:hover img {
    display: none;
    cursor: pointer;
}

.fifth:hover .hidden {
    display: block;
}

.six:hover img {
    display: none;
    cursor: pointer;
}

.six:hover .hidden {
    display: block;
}

.main-container {
    padding: 50px;
    display: flex;
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
}

.top-container {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;

}

.hearts-container {
    top: 10px;
    right: 0px;
    background-color: $light-color;
    padding: 5px 10px;

    & :hover {
        color: red;
        cursor: pointer;
    }
}

.percent-sales-container {
    bottom: 30px;
    padding: 2px 8px;
    background-color: $discount-color;
    color: $light-color;
}

.article-description-container {
    bottom: 30px;
    left: 50px;
    padding: 2px 8px;
    background-color: $tag-color;
    color: $light-color;
}

.article-name {
    font-weight: bold;

}

.sale-price {
    color: black;
    font-weight: bold;
    margin-right: 2px;
}

.original-price {
    text-decoration: line-through;
}

</style>