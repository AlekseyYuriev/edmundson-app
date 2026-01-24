<script setup lang="ts">
interface PartnersData {
  title: string;
}

const props = defineProps<{
  data: PartnersData;
}>();
</script>

<template>
  <section
    class="pt-lg gap-ms flex min-h-[500px] flex-col justify-center px-[160px]"
  >
    <h2 class="text-2xl font-bold">{{ props.data.title }}</h2>
  </section>
</template>
