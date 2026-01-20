<script lang="ts" setup>
import Navbar from '~/components/header/Navbar.vue';
</script>

<template>
  <div class="layout-container">
    <header class="fixed_header">
      <Navbar />
    </header>
    <main class="main-content w-full bg-white">
      <NuxtPage :page-key="(route) => route.fullPath" />
    </main>
  </div>
</template>

<style scoped>
.layout-container {
  min-height: 100vh;
  background-color: var(--ee_white);
}

.fixed_header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: var(--ee_primary);
}

.main-content {
  min-height: calc(100vh - 300px);
  max-width: 2560px;
  background-color: var(--ee_white);
  margin: auto;
  padding-top: 8rem;
  height: fit-content;
}
</style>
