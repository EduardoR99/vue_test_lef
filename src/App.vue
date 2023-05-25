<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<style >
*{
  outline: none;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #dee2e6;
  padding: 0;
  margin: 0;
}

</style>
