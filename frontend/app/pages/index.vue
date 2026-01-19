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

const pageTitle = computed(() => data.value?.data[0]?.title);
const pageSubtitle = computed(() => data.value?.data[0]?.content);
const sections = computed(() =>
  data.value?.data?.[0]?.sections || []
)

console.log(sections.value);
</script>

<template>
  <div class="p-6">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error</div>

    <div v-else>
      <h1 class="text-2xl font-bold mb-4">{{ pageTitle }} Page</h1>

      <h2 class="text-xl mb-4">{{ pageSubtitle }}</h2>

      <div>
        <component
          v-for="(section, index) in sections"
          :key="`${section.__component}-${index}`"
          :is="sectionMap[section.__component]"
          :data="section"
        />
      </div>
    </div>
  </div>
</template>
