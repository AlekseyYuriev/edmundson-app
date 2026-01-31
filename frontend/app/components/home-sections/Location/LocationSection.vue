<script setup lang="ts">
import type { LocationData } from '~/types/section';
import LocationCard from './LocationCard.vue';
import LocationMap from './LocationMap.vue';

const props = defineProps<{
  data: LocationData;
}>();

const locationCards = computed(() => props.data.locations);
</script>

<template>
  <section
    class="py-xl my-xs flex flex-col justify-center gap-[4px] px-[160px]"
  >
    <h2 class="mb-xl text-[48px] font-bold">{{ props.data.title }}</h2>
    <div class="gap-ms flex">
      <div
        class="gap-ms flex h-[630px] max-w-[460px] flex-col overflow-y-auto pr-2"
      >
        <LocationCard
          v-for="card in locationCards"
          :key="card.id"
          :data="card"
        />
      </div>
      <LocationMap class="flex-1" :locations="locationCards" />
    </div>
  </section>
</template>
