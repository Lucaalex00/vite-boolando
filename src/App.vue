<script>
/* IMPORT COMPONENTS */
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import '@fortawesome/fontawesome-free/css/all.css'

/* EXPORT ITSELF */
export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  }
}
</script>

<template>
  <!-- USE COMPONENTS -->
  <AppHeader />

  <AppMain />
  
  <AppFooter />
</template>

<style>
</style>
