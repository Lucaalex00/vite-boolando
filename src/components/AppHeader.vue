<script>
/* JS HERE */
export default {
    name:'AppHeader'
}
</script>

<template>
    <!-- HTML HERE -->
    <header id="site-header">
        <div class="header-container">
            <div class="container">
                <div class="gender-sel">
                    <span> Donna </span>
                    <span> Uomo </span>
                    <span> Bambini </span>

                </div>
                <div class="logo">
                    <img src="../assets/img/boolean-logo.png">
                </div>
                <div class="call-to-action">
                    &#9762;
                    &#9825;
                    &#128092;
                </div>
            </div>
        </div>
    </header>
    <!-- /#site-header -->

</template>

<style lang="scss">
/* CSS HERE */

@use '../components/variables/variables.scss' as *;

.container {
    max-width: 80%;
    margin: auto;
}

.header-container {
    padding: 10px;
    background-color: $header-color;
    color: $light-color;
    width: 100%;
    position: fixed;
    z-index: 1;
}

.header-container>div {
    display: flex;
    justify-content: space-around;
}

.logo>img {
    width: 100px;
}

.gender-sel span {
    padding: 10px;
}
</style>