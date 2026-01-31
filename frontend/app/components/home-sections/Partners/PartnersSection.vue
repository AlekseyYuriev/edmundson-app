<script setup lang="ts">
import type { PartnersData } from '~/types/section';
import PartnerCard from './PartnerCard.vue';

const props = defineProps<{
  data: PartnersData;
}>();

const partnerCards = computed(() => props.data.partner_cards);
</script>

<template>
  <section
    class="py-lg gap-ms flex min-h-[500px] flex-col justify-center bg-[var(--ee_tertiary)] px-[160px]"
  >
    <h2 class="my-ms text-[48px] font-bold">{{ props.data.title }}</h2>
    <div class="flex flex-col items-center justify-center gap-[36px]">
      <PartnerCard v-for="card in partnerCards" :key="card.id" :data="card" />
    </div>
  </section>
</template>
