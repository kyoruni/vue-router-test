<script setup lang="ts">
import { inject } from 'vue';
import { RouterLink } from 'vue-router';
import type { Pokemon } from '@/interfaces';

const pokemons = inject('pokemons') as Map<number, Pokemon>;
</script>

<template>
  <div class="pokemon-list">
    <h2>一覧ページ</h2>
    <nav id="breadcrumbs">
      <ul>
        <li>
          <RouterLink :to="{ name: 'TopPage' }">TOP</RouterLink>
        </li>
        <li>
          ポケモン一覧
        </li>
      </ul>
    </nav>
    <section>
      <h3>ポケモン一覧</h3>
      <ul>
        <li v-for="[id, pokemon] in pokemons" :key="id">
          ID: {{ id }}
          <RouterLink :to="{ name: 'PokemonDetail', params: { id: id } }">{{ pokemon.name }}</RouterLink>
        </li>
      </ul>
    </section>
  </div>
</template>
