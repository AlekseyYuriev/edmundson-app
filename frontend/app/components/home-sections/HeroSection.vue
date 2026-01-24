<script setup lang="ts">
import type { HeroData } from '~/types/section';
import EEIconArrow from '../icon/EEIconArrow.vue';

const props = defineProps<{
  data: HeroData;
}>();

const imageUrl = computed(() => getStrapiMedia(props.data.image));
</script>

<template>
  <section class="flex gap-6 bg-[var(--ee_primary)] px-[160px] pb-[70px]">
    <div
      class="gap-xl flex w-[686px] shrink-0 flex-col items-center justify-center py-[55px] text-white"
    >
      <h1 class="text-[80px] font-bold">
        {{ props.data.title }}
      </h1>
      <p class="mt-4 text-xl">
        {{ props.data.subtitle }}
      </p>
      <NuxtLink
        to="/about"
        class="gap-xs py-xs px-ms flex h-[40px] w-[165px] items-center self-start rounded-lg border border-white text-white uppercase transition-colors duration-200 hover:border-[var(--ee_secondary)] hover:text-[var(--ee_secondary)]"
      >
        <span class="leading-lg text-lg font-semibold">Learn More</span>
        <EEIconArrow class="h-lg p-xxs w-lg" />
      </NuxtLink>
    </div>
    <div class="flex-1">
      <NuxtImg
        v-if="imageUrl"
        :src="imageUrl"
        alt="Hero Section Image"
        class="h-full w-full rounded-lg object-cover"
      />
    </div>
  </section>
</template>
