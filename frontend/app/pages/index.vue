<script setup>
import { usePages } from '~/composables/usePages';
import HeroSection from '~/components/home-sections/HeroSection.vue';
import PartnersSection from '~/components/home-sections/PartnersSection.vue';
import ServicesSection from '~/components/home-sections/ServicesSection.vue';

const sectionMap = {
  'sections.hero': HeroSection,
  'sections.services': ServicesSection,
  'sections.partners': PartnersSection,
}

const { data, isLoading, error } = usePages();

const sections = computed(() =>
  data.value?.data?.[0]?.sections || []
)
</script>

<template>
  <LoadingSpinner v-if="isLoading" />
  <div v-if="error" class="h-full flex justify-center items-center">
    <h1 class="text-2xl font-bold mt-32">Error loading page. Please try again later.</h1>
  </div>
  <div v-else>
    <component v-for="(section, index) in sections" :key="`${section.__component}-${index}`"
      :is="sectionMap[section.__component]" :data="section" />
  </div>
</template>
