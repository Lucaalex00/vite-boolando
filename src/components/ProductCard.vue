<script>
export default {
    name: 'ProductCard',
    components: {
    },
    props: {
        product: Object,
    },
    data() {
        return {
            discountedPrice: 0,
        }
    },
    methods: {
        calcDiscount(price, discount) {
            // Converte i valori in numeri e calcola lo sconto
            this.discountedPrice = price * (1 - parseInt(discount) / 100);

            // Restituisci il prezzo scontato
            return this.discountedPrice.toFixed(2); // Arrotonda il prezzo a due decimali
        },
        showModal() {
            this.$emit('show-modal');
        }
        
    }
}
</script>

<template>
    <ModalComponent/>
    <div class="flex-top-bottom">
        <div class="top-container">

            <div class="img first"> <!-- section-->
                <img :src="'../src/assets/img/'+ product.frontImage">
                <img class="hidden" @click="showModal()" :src="'../src/assets/img/'+ product.backImage">
                <div class="hearts-container absolute">
                    <span :style="{ color: selectedEl ? 'red' : 'black' }" @click="AddFavorites()">&hearts;</span>
                </div>
                <div class="badge-container absolute">
                    <div v-for="badge in product.badges" class="percent-sales-container">
                        <div v-if="badge.type=='discount'" class="percent-sales-container-bg-color">{{badge.value}}
                        </div>
                    </div>
                    <div v-for="badge in product.badges" class="article-description-container">
                        <div v-if="badge.type=='tag'" class="article-description-container-bg-color">
                            {{ badge.value }}</div>
                        <div v-else></div>
                    </div>
                </div>
            </div>
        </div>


        <div class="bottom-container debug ">
            <div class="brand">
                {{ product.brand }}
            </div>
            <div class="article-name">
                {{product.name}}
            </div>
            <div class="prices">
                <span class=" sale-price ">
                    {{ product.price }}€</span>
                <div v-for="badge in product.badges">

                    <span v-if="badge.type == 'discount'" class=" original-price">{{
                        calcDiscount(product.price,
                        badge.value) }}€</span>
                </div>

            </div>
        </div>
    </div>
</template>


<style lang="scss">

</style>