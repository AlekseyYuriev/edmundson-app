<script setup lang="ts">
interface ServicesData {
  title: string
}

const props = defineProps<{
  data: ServicesData
}>()
</script>

<template>
  <div class="my-8 bg-gray-100 h-[200px] flex items-center justify-center p-8">
    <h2 class="text-2xl font-bold">{{ props.data.title }}</h2>
  </div>
</template>
