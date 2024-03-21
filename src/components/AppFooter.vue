<script>
/* JS HERE */
export default {
    name: 'AppFooter'
}
</script>

<template>
    <!-- HTML HERE -->
    <footer id="site-footer">
        <div class="footer-container">
            <div class="container">
                <div class="info-footer">
                    <h3>Boolando S.r.l</h3>
                    <span>informazioni legali</span>
                    <span>Informativa sulla privacy</span>
                    <span>Diritto di accesso</span>
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
    color: white;
}

.footer-container>div {
    display: flex;
    justify-content: space-between;
}

.info-footer>span {
    padding-right: 20px;
}

.fab {
    color: white;
    text-decoration: none;
    padding: 0 0.5rem;
}

.fab:hover {
    font-size: 1.5rem;
    background-color: $light-color;
}

</style>