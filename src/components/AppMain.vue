<script>
/* JS HERE */
import AppCard from "../components/AppCard.vue";
export default {
    name: 'AppMain'
}
</script>

<template>
    <!-- HTML HERE -->
    <main id="site-main">
        <div class="main-container container debug">
            <div class="flex-top-bottom">
                <div class="top-container">

                    <div class="img first"> <!--1st section-->
                        <img src="../assets/img/1.webp">
                        <img class="hidden" src="../assets/img/1b.webp">
                        <div class="hearts-container absolute">
                            <span>&hearts;</span>
                        </div>
                        <div class="percent-sales-container absolute">
                            <div>-50%</div>

                        </div>
                        <div class="article-description-container absolute">
                            <div>Sostenibilità</div>
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
            <div class="flex-top-bottom">
                <div class="top-container">

                    <div class="img second"> <!--2nd section-->
                        <img src="../assets/img/2.webp">
                        <img class="hidden" src="../assets/img/2b.webp">

                        <div class="hearts-container absolute">
                            <span>&hearts;</span>
                        </div>
                        <div class="percent-sales-container absolute">
                            <div>-30%</div>
                        </div>
                    </div>
                </div>


                <div class="bottom-container debug ">
                    <div class="brand">
                        Guess
                    </div>
                    <div class="article-name">
                        ROSES TEE
                    </div>
                    <div class="prices">
                        <span class="sale-price">14.99€</span>
                        <span class="original-price">29.99€</span>
                    </div>
                </div>

            </div>
            <div class="flex-top-bottom">
                <div class="top-container">

                    <div class="img third"> <!--3rd section-->
                        <img src="../assets/img/3.webp">
                        <img class="hidden" src="../assets/img/3b.webp">

                        <div class="hearts-container absolute">
                            <span>&hearts;</span>
                        </div>
                        <div class="percent-sales-container absolute">
                            <div>-50%</div>

                        </div>
                    </div>
                </div>


                <div class="bottom-container debug ">
                    <div class="brand">
                        Come Zucchero Filato
                    </div>
                    <div class="article-name">
                        VOGLIA DI COLORI PASTELLO
                    </div>
                    <div class="prices">
                        <span class="sale-price">14.99€</span>
                        <span class="original-price">29.99€</span>
                    </div>
                </div>

            </div>
            <div class="flex-top-bottom">
                <div class="top-container">

                    <div class="img fourth"> <!--4th section-->
                        <img src="../assets/img/4.webp">
                        <img class="hidden" src="../assets/img/4b.webp">

                        <div class="hearts-container absolute">
                            <span>&hearts;</span>
                        </div>
                        <div class="percent-sales-container absolute">
                            <div>-50%</div>

                        </div>
                        <div class="article-description-container absolute">
                            <div>Sostenibilità</div>
                        </div>
                    </div>
                </div>


                <div class="bottom-container debug ">
                    <div class="brand">
                        Levi's
                    </div>
                    <div class="article-name">
                        TEE UNISEX
                    </div>
                    <div class="prices">
                        <span class="sale-price">14.99€</span>
                        <span class="original-price">29.99€</span>
                    </div>
                </div>

            </div>
            <div class="flex-top-bottom">
                <div class="top-container">

                    <div class="img fifth"> <!--5th section-->
                        <img src="../assets/img/5.webp">
                        <img class="hidden" src="../assets/img/5b.webp">
                        <div class="hearts-container absolute">
                            <span>&hearts;</span>
                        </div>

                    </div>
                </div>


                <div class="bottom-container debug ">
                    <div class="brand">
                        Maya's Deluxe
                    </div>
                    <div class="article-name">
                        STRIPE BODICE
                    </div>
                    <div class="prices">
                        <span class="sale-price">14.99€</span>
                        <span class="original-price">29.99€</span>
                    </div>
                </div>

            </div>
            <div class="flex-top-bottom">
                <div class="top-container">

                    <div class="img six"> <!--6th section-->
                        <img src="../assets/img/6.webp">
                        <img class="hidden" src="../assets/img/6b.webp">
                        <div class="hearts-container absolute">
                            <span>&hearts;</span>
                        </div>
                        <div class="percent-sales-container absolute">
                            <div>-50%</div>

                        </div>
                        <div class="article-description-container absolute">
                            <div>Sostenibilità</div>
                        </div>
                    </div>
                </div>


                <div class="bottom-container debug ">
                    <div class="brand">
                        Esprit
                    </div>
                    <div class="article-name">
                        MAGLIONE - BLACK
                    </div>
                    <div class="prices">
                        <span class="sale-price">14.99€</span>
                        <span class="original-price">29.99€</span>
                    </div>
                </div>

            </div>
        </div>

    </main>
    <!-- /#site-main -->

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

//MAIN

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
    & :hover{
        color:red;
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
/* CSS HERE */


</style>