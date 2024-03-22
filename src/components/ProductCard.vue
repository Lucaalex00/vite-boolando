<script>

export default {
    name: 'ProductCard',
    props: {
        product:Object,
    }
}
</script>

<template> 
                <div class="flex-top-bottom">
                    <div class="top-container">

                        <div class="img first"> <!-- section-->
                            <img :src="'../src/assets/img'+ product.image">
                            <img class="hidden" :src="'../src/assets/img'+ product.hiddenImage">
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
</template>


<style lang="scss">

</style>