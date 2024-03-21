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
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-youtube"></a>
                </div>
            </div>
        </div>
    </footer>
    <!-- /#site-footer -->

</template>

<style lang="scss">
/* CSS HERE */
@use '../components/variables/variables.scss' as *;
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

.fa {
    color: white;
    text-decoration: none;
}

.fa:hover {
    font-size: 1.5rem;
    background-color: var(--light-color);
}

</style>