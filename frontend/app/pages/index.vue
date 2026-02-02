<script setup>
import { usePages } from '~/composables/usePages';
import HeroSection from '~/components/home-sections/HeroSection.vue';
import PartnersSection from '~/components/home-sections/Partners/PartnersSection.vue';
import ServicesSection from '~/components/home-sections/Services/ServicesSection.vue';
import LocationSection from '~/components/home-sections/Location/LocationSection.vue';

const sectionMap = {
  'sections.hero': HeroSection,
  'sections.services': ServicesSection,
  'sections.partners': PartnersSection,
  'sections.location': LocationSection,
};

const { data, isLoading, error } = usePages();

const sections = computed(() => data.value?.data?.[0]?.sections || []);
</script>

<template>
  <LoadingSpinner v-if="isLoading" />
  <div
    v-if="error"
    class="flex h-full min-h-[calc(100vh-20.75rem)] items-center justify-center"
  >
    <h1 class="mt-32 text-2xl font-bold">
      Error loading page. Please try again later.
    </h1>
  </div>
  <div v-else>
    <component
      v-for="(section, index) in sections"
      :key="`${section.__component}-${index}`"
      :is="sectionMap[section.__component]"
      :data="section"
    />
  </div>
</template>
