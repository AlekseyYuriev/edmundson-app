<script setup lang="ts">
import type { ServiceCardData } from '~/types/section';

const props = defineProps<{
  data: ServiceCardData;
}>();

const imageUrl = computed(() => getStrapiMedia(props.data.image));

const description = computed(() => props.data.description[0].children[0].text);
</script>

<template>
  <div
    class="py-md px-sm flex flex-col rounded-xl bg-[var(--ee_card_background)]"
  >
    <div
      class="relative mb-[46px] aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100"
    >
      <NuxtImg
        :src="imageUrl"
        alt="Service Card Image"
        class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
    <h3
      class="mb-sm text-center text-[24px] font-bold text-[var(--ee_primary)]"
    >
      {{ props.data.title }}
    </h3>
    <p class="text-center text-[18px] font-light">{{ description }}</p>
  </div>
</template>
