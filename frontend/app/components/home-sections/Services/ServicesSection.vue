<script setup lang="ts">
import type { ServicesData } from '~/types/section';
import ServiceCard from './ServiceCard.vue';

const props = defineProps<{
  data: ServicesData;
}>();

const serviceCards = computed(() => props.data.service_cards);
</script>

<template>
  <section class="pt-lg gap-ms flex flex-col justify-center px-[160px]">
    <h2 class="text-[48px] font-bold">{{ props.data.title }}</h2>
    <p class="text-[18px font-light">{{ props.data.subtitle }}</p>
    <div class="gap-ms grid grid-cols-2 lg:grid-cols-4">
      <ServiceCard v-for="card in serviceCards" :key="card.id" :data="card" />
    </div>
  </section>
</template>
