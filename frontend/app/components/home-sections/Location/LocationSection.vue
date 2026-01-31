<script setup lang="ts">
import type { LocationData } from '~/types/section';

const props = defineProps<{
  data: LocationData;
}>();
</script>

<template>
  <section class="py-lg gap-ms flex flex-col justify-center px-[160px]">
    <h2 class="text-[48px] font-bold">{{ props.data.title }}</h2>
  </section>
</template>
