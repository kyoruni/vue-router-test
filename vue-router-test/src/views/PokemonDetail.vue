<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="pokemon-detail">
    <h2>ポケモン詳細</h2>
    <nav id="breadcrumbs">
      <ul>
        <li>
          <RouterLink :to="{ name: 'TopPage' }">TOP</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'PokemonList' }">ポケモン一覧</RouterLink>
        </li>
        <li>ポケモン詳細</li>
      </ul>
    </nav>
    <section>
      <h3>ポケモン詳細情報</h3>
    </section>
  </div>
</template>