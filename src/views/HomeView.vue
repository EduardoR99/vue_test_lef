<script setup>
import Banner from '../components/Banner.vue';
import Options from '../components/Options.vue';

let categoriaSelecionada = null;
let categoriaSelecionadaTitulo = null;

</script>

<template>
  <main>
    <Banner />
    <Options />
    
  </main>
</template>

<style>
main {
  background-color: #fff;
  max-width: 1300px;
  margin: auto;
}
</style>
