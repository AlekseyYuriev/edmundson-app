<script setup lang="ts">
import type { NewsData } from '~/types/section';
import NewsCard from './NewsCard.vue';

const props = defineProps<{
  data: NewsData;
}>();

const partnerCards = computed(() => props.data.blogs ?? []);
const firstCard = computed(() => partnerCards.value[0] ?? null);
const otherCards = computed(() => partnerCards.value.slice(1));
</script>

<template>
  <section class="gap-md flex flex-col px-[160px] pb-[40px]">
    <h2 class="my-ms text-[48px] font-bold">{{ props.data.title }}</h2>
    <div class="gap-md flex justify-center">
      <NewsCard v-if="firstCard" :data="firstCard" class="w-1/2" />
      <div class="gap-lg flex w-1/2 flex-col">
        <NewsCard v-for="card in otherCards" :key="card.id" :data="card" />
      </div>
    </div>
  </section>
</template>
