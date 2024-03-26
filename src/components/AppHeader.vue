<script>
/* JS HERE */
import GenderChoice from './GenderChoice.vue';
export default {
    name: 'AppHeader',
    components: {
        GenderChoice
    }
}
</script>

<template>
    <!-- HTML HERE -->
    <header id="site-header">
        <div class="header-container">
            <div class="container">
                <GenderChoice />
                <div class="logo">
                    <img src="../assets/img/boolean-logo.png">
                </div>
                <div class="call-to-action">
                    <a href="#">&#9762;</a>
                    <a href="#">&#9825;</a>
                    <a href="#">&#128092;</a>
                </div>
            </div>
        </div>
    </header>
    <!-- /#site-header -->

</template>

<style lang="scss">
/* CSS HERE */
@use '../variables/variables.scss' as *;

.container {
    max-width: 80%;
    margin: auto;
}

.header-container {
    padding: 10px;
    background-color: $header-color;
    width: 100%;
    position: fixed;
    z-index: 1;
}

.header-container>.container {
    display: flex;
    justify-content: space-around;
}

.logo>img {
    width: 100px;
}

.gender-sel a, .call-to-action a {
    padding: 10px;
    text-decoration: none;
    color: $light-color;
    &:hover{
        background-color: rgba(124, 119, 119, 0.432);
    }
}
</style>