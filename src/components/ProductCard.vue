<script>

export default {
    name: 'ProductCard',
    props: {
        product: Object,
    },
    data() {
        return {
            discountedPrice: 0,
            selectedEl: false,
            isShowModal: false,
        }
    },
    methods: {
        calcDiscount(price, discount) {
            // Converte i valori in numeri e calcola lo sconto
            this.discountedPrice = price * (1 - parseInt(discount) / 100);

            // Restituisci il prezzo scontato
            return this.discountedPrice.toFixed(2); // Arrotonda il prezzo a due decimali
        },
        AddFavorites() {
            if (this.selectedEl == false) {
                alert('Hai aggiunto un articolo nei preferiti !')
                this.selectedEl = !this.selectedEl
            }
            else {
                this.selectedEl = !this.selectedEl
            }
        },
        showModal() {
            this.isShowModal = true;
        },
        hideModal() {
            this.isShowModal = false;   
        },
    }
}
</script>

<template>
    <div class="modal-bg" v-if="isShowModal==true">
        <div class="modal-container">
            <span class="favorites" v-if="selectedEl==true"> Favorite's Product &hearts;</span>
            <div class="modal-img">
                <img :src="'../src/assets/img/' + product.frontImage">
                <img :src="'../src/assets/img/' + product.backImage">
            </div>

            <div class="modal-info">
                <span class="modal-guess" v-if="product.brand=='Guess'">{{ product.brand }}</span>

                <span class="modal-levis" v-else-if="product.brand == `Levi's`">{{ product.brand }}</span>

                <span class="modal-esprit" v-else-if="product.brand == 'Esprit'">{{ product.brand }}</span>

                <span v-else>{{product.brand}}</span>

                <span class="modal-name">{{ product.name }}</span>
                <div class="modal-prices">
                    <span class="sale-price">
                        {{ product.price }}€
                    </span>
                    <div v-for="badge in product.badges">

                        <span v-if="badge.type == 'discount'" class=" original-price">{{
                            calcDiscount(product.price,
                            badge.value) }}€
                        </span>
                    </div>
                </div>
            </div>
            <button class="close-modal" @click="hideModal()"> &cross; </button>
        </div>
    </div>
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