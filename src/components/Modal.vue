    <script>
    import {state} from '../state.js'
    export default {
        name: 'Modal',
        props: {
            product: Object,
        },
        data() {
            return {
                state,
                discountedPrice: 0,


            }

        },
        methods: {
            hideModal() {
                this.$emit('hide-modal');
            },
        },
    }
    </script>

<template>
    <div class="modal-bg">
        <div class="modal-container">
            <span class="favorites" v-if="product.isInFavorites == true"> Favorite's Product &hearts;</span>
            <div class="modal-img">
                <img :src="'../src/assets/img/' + product.frontImage">
                <img :src="'../src/assets/img/' + product.backImage">
            </div>

            <div class="modal-info">
                <span class="modal-guess" v-if="product.brand == 'Guess'">{{ product.brand }}</span>

                <span class="modal-levis" v-else-if="product.brand == `Levi's`">{{ product.brand }}</span>

                <span class="modal-esprit" v-else-if="product.brand == 'Esprit'">{{ product.brand }}</span>

                <span v-else>{{ product.brand }}</span>

                <span class="modal-name">{{ product.name }}</span>
                <div class="modal-prices">
                    <span class="sale-price">
                        {{ product.price }}€
                    </span>
                    <div v-for="badge in product.badges">

                        <span v-if="badge.type == 'discount'" class=" original-price">{{
                            state.calcDiscount(product.price,
                            badge.value) }}€
                        </span>
                    </div>
                </div>
            </div>
            <button class="close-modal" @click="hideModal()"> &cross; </button>
        </div>
    </div>
</template>


<style lang="scss" >

</style>