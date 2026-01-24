<script setup lang="ts">
import EEIconArrow from '../icon/EEIconArrow.vue';

interface HeroData {
  title: string
  subtitle: string
  image?: { url?: string }
}

const props = defineProps<{
  data: HeroData
}>()

const imageUrl = computed(() =>
  getStrapiMedia(props.data.image)
);
</script>

<template>
  <div class="bg-[var(--ee_primary)] px-[160px] flex gap-6 pb-[70px]">
    <div class="flex flex-col gap-xl items-center justify-center text-white w-[686px] shrink-0 py-[55px]">
      <h1 class="text-[80px] font-bold">
        {{ props.data.title }}
      </h1>
      <p class="mt-4 text-xl">
        {{ props.data.subtitle }}
      </p>
      <NuxtLink to="/about"
        class="flex items-center gap-xs uppercase self-start w-[165px] h-[40px] border border-white py-xs px-ms rounded-lg text-white transition-colors duration-200 hover:text-[var(--ee_secondary)] hover:border-[var(--ee_secondary)]">
        <span class="text-lg font-semibold leading-lg">Learn More</span>
        <EEIconArrow class="w-lg h-lg p-xxs" />
      </NuxtLink>
    </div>
    <div class=" flex-1">
      <NuxtImg v-if="imageUrl" :src="imageUrl" alt="Hero Section Image" class="w-full h-full object-cover rounded-lg" />
    </div>
  </div>
</template>
