<script>
/* JS HERE */
export default {
    name: 'AppFooter',
}
</script>

<template>
    <!-- HTML HERE -->
    <footer id="site-footer">
        <div class="footer-container">
            <div class="container">
                <div class="info-footer">
                    <h3>Boolando S.r.l</h3>
                    <a href="#">informazioni legali</a>
                    <a href="#">Informativa sulla privacy</a>
                    <a href="#">Diritto di accesso</a>
                </div>
                <div>
                    <h3>Trovaci anche su:</h3>
                    <!-- LOGHI-->
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                    <a href="#" class="fab fa-facebook"></a>
                    <a href="#" class="fab fa-youtube"></a>
                </div>
            </div>
        </div>
    </footer>
    <!-- /#site-footer -->

</template>

<style lang="scss">
/* CSS HERE */
@use '../variables/variables.scss' as *;

.footer-container {
    padding: 10px;
    background-color: $footer-color;
    color: $light-color;
}

.footer-container>div {
    display: flex;
    justify-content: space-between;
}

.info-footer>a {
    padding-right: 20px;
    text-decoration: none;
    color:$light-color;
}

.fab {
    color: $light-color;
    text-decoration: none;
    padding: 0 0.5rem;
}

.fab:hover {
    font-size: 1rem;
    color: $darkest-color;
    background-color: $light-color;
}

</style>