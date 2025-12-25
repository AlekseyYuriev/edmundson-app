<script setup>
const { data, isLoading, error } = usePages();

const pageTitle = computed(() => data.value?.data[0]?.title);
</script>

<template>
  <div class="p-6">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error</div>

    <div v-else>
      <h1 class="text-2xl font-bold mb-4">{{ pageTitle }} Page</h1>

      <ul>
        <li v-for="page in data.data" :key="page.id">
          {{ page.content }}
        </li>
      </ul>
    </div>
  </div>
</template>
