<script>
/* JS HERE */
import ProductCard from "./ProductCard.vue";
import Modal from "./Modal.vue"

import {state} from '../state.js'
export default {
    name: 'AppMain',
    components: {
        ProductCard,
        Modal,
    },
    data() {
        return {
            state, // (state:state / KEY: VALUE)
            isShowModal: false,
                       
        }
    },
    methods: {
        showModal() {
            this.isShowModal = true;
            console.log(this.isShowModal)
        },   
        setProductValue(n){
            this.productEl = n
            console.log(this.productEl)

        },
        hideModal() {
            this.isShowModal = false;
            console.log(this.isShowModal)
        },
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
            <ProductCard :product="product" v-for="product in state.products" @show-modal="(n) => { setProductValue(n), showModal()}" />
            <Modal :product="this.productEl" v-if="isShowModal && this.productEl != null" @hide-modal="hideModal()" />
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
    flex-wrap: wrap;
    padding: 5px;
    width: calc(100%/3 - 20px);
    min-width: 150px;

}

.img img {
    width: 100%;
    box-shadow: 10px 8px rgba(0, 0, 0, 0.192);
    border-radius: 20px;
    border: 1px solid lightgray
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
    >span{
        cursor: pointer;
    }
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

.modal-bg{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 3;
    background: rgba(0, 0, 0, 0.508);
    top: 0;
    left: 0;
}
.modal-container{
    width: 60%;
    height: 80%;
    padding: 1rem;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    color: $darkest-color;;
    background-color: rgba(255, 255, 255, 0.795);
    font-size: 1.5rem;
    margin: auto;

    border: 2px solid rgba(0, 0, 0, 0.815);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    > .close-modal{
        position: absolute;
        top: 0;
        right: 0;
        color: red;
        text-shadow: 2px 3px rgba(255, 0, 0, 0.493);
        font-size: 3rem;
        background-color: transparent;
        border: 0;
        padding: 0.2rem;
        &:hover{
            background-color: rgba(128, 128, 128, 0.267);
            cursor: pointer;

        }
    };
    > .modal-img{
        width: 50%;
        display: flex;
        justify-content: center;
        gap: 1rem;
        > img{
             border-radius: 50%;
             border: 1px solid black;
            width: 50%;
            
        }
    };
    >.favorites {
         color: red;
         text-shadow: 1px 1px black;
         text-decoration: underline;
         width: 50%;
         text-align: center;
         font-size: 1.8rem

    };
    > .modal-info{
        display: flex;
        flex-direction: column;   
        gap: 0.5rem;
        text-align: center;
        font-size : 1.5rem;
        font-weight: bold;
        >.modal-guess{
            color: rgba(255, 0, 0, 0.664);
        };
        >.modal-levis {
            color: rgba(18, 151, 6, 0.664);
        };
        >.modal-esprit {
            color: rgba(0, 102, 255, 0.664);
        };
        >.modal-name{
            font-size: 1.2rem;
            color: $dark-color
        };
        .modal-prices{
            gap: 0.8rem;
            display: flex;
            justify-content: center;
            
        };
      
    }




}
</style>