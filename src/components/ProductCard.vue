<script>

export default {
    name: 'ProductCard',
    props: {
        product:Object,
    }
}
</script>

<template>
    
            <div class="main-container container debug">
                <div class="flex-top-bottom">
                    <div class="top-container">

                        <div class="img first"> <!-- section-->
                            <img :src="product.image">
                            <img class="hidden" :src="product.hiddenImage">
                            <div class="hearts-container absolute">
                                <span v-html="product.heartIconFavorites"></span>
                            </div>
                            <div class="percent-sales-container absolute">
                                <div>{{product.percentSale}}</div>

                            </div>
                            <div class="article-description-container absolute">
                                <div>{{ product.typeDescription }}</div>
                            </div>
                        </div>
                    </div>


                    <div class="bottom-container debug ">
                        <div class="brand">
                            Levi's
                        </div>
                        <div class="article-name">
                            RELAXED FIT TEE UNISEX
                        </div>
                        <div class="prices">
                            <span class="sale-price">14.99€</span>
                            <span class="original-price">29.99€</span>
                        </div>
                    </div>

                </div>
            </div>
</template>


<style lang="scss">
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

MAIN

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