<script setup lang="ts">
import type { PartnerCardData } from '~/types/section';
import EEIconArrow from '../../icon/EEIconArrow.vue';

const props = defineProps<{
  data: PartnerCardData;
}>();

const imageUrl = computed(() => getStrapiMedia(props.data.image));
const logoUrl = computed(() => getStrapiMedia(props.data.logo));
</script>

<template>
  <div
    class="gap-ms relative flex h-[500px] flex-col items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }"
  >
    <NuxtImg
      :src="logoUrl"
      alt="Partner logo"
      class="my-xl h-[175px] w-[445px] object-contain"
    />
    <h3 class="text-center text-[36px] font-bold text-white">
      {{ props.data.title }}
    </h3>
    <p class="px-[75px] text-center text-xl font-medium text-white">
      {{ props.data.subtitle }}
    </p>
    <NuxtLink
      :to="props.data.link"
      class="gap-xs py-xs px-ms flex h-[40px] w-[190px] items-center rounded-lg border border-[var(--ee_secondary)] bg-[var(--ee_secondary)] text-white uppercase transition-colors duration-200 hover:border-[var(--ee_secondary)] hover:bg-transparent hover:text-[var(--ee_secondary)]"
      target="_blank"
    >
      <span class="leading-lg text-lg font-semibold">Find Out More</span>
      <EEIconArrow class="h-lg p-xxs w-lg" />
    </NuxtLink>
  </div>
</template>
