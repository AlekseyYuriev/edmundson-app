<script setup lang="ts">
import { usePages } from '~/composables/usePages';
import PolicyBlock from '~/components/PolicyBlock.vue';
import type { PageSection } from '~/types/strapi';

useSeoMeta({
  title: 'Privacy Policy',
  description: 'Our privacy policy.',
});

const { data, isLoading, error } = usePages('privacy-policy');

const sectionData = computed(
  () => (data.value?.data?.[0]?.sections?.[0] as PageSection) || []
);
</script>

<template>
  <LoadingSpinner v-if="isLoading" />
  <div
    v-if="error"
    class="flex h-full min-h-[calc(100vh-20.75rem)] items-center justify-center"
  >
    <h1 class="text-2xl font-bold">
      Error loading page. Please try again later.
    </h1>
  </div>
  <div
    v-else
    class="pt-lg mt-[48px] flex h-full min-h-[calc(100vh-20.75rem)] flex-col items-center px-[160px]"
  >
    <h1 class="text-[var(--ee_color_text) pb-ms text-[48px] font-bold">
      {{ sectionData.title }}
    </h1>
    <div class="flex flex-col gap-4">
      <PolicyBlock
        v-for="block in sectionData.content"
        :key="block.id"
        :data="block"
      />
    </div>
  </div>
</template>
