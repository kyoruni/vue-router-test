<script setup lang="ts">
import { reactive, provide } from 'vue';
import { RouterView } from 'vue-router';
import type { Pokemon } from '@/interfaces';

const pokemons = new Map<number, Pokemon>();

const initPokemons = () => {
  pokemons.set(1, {
    id: 1,
    name: 'フシギダネ',
    type1: 'くさ',
    type2: 'どく',
    species: 'たね',
  });
  pokemons.set(4, {
    id: 4,
    name: 'ヒトカゲ',
    type1: 'ほのお',
    species: 'とかげ',
  });
  pokemons.set(7, {
    id: 7,
    name: 'ゼニガメ',
    type1: 'みず',
    species: 'かめのこ',
  });
};
initPokemons();
provide('pokemons', reactive(pokemons));
</script>

<template>
  <div id="app">
    <h1>vue-router-test</h1>
    {{  pokemons  }}
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
main {
  border: 1px solid red;
  padding: 20px;
}
</style>
