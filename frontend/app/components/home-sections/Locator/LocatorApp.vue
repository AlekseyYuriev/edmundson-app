<script setup lang="ts">
import type { LocatorAppData } from '~/types/section';

const props = defineProps<{
  data: LocatorAppData;
}>();

const imageUrl = computed(() => getStrapiMedia(props.data.image));
</script>

<template>
  <NuxtLink :to="props.data.link" target="_blank" class="h-[50px] w-[170px]">
    <NuxtImg
      :src="imageUrl"
      alt="Locator app image"
      class="h-full w-full object-contain"
    />
  </NuxtLink>
</template>
