<script setup lang="ts">
import type { BlogData } from '~/types/section';
import { formatDate } from '~/utils/format-date';
import NewsTag from './NewsTag.vue';

const props = defineProps<{
  data: BlogData;
}>();

const imageUrl = computed(() => getStrapiMedia(props.data.image));
const newsLink = computed(() => props.data.link);
const tags = computed(() => props.data.tags ?? []);
</script>

<template>
  <NuxtLink
    :to="newsLink"
    class="gap-md flex flex-col items-center"
    target="_blank"
  >
    <NuxtImg
      :src="imageUrl"
      alt="News Image"
      class="h-full w-full rounded-xl object-cover"
    />
    <div class="gap-xs flex flex-col">
      <p class="text-lg text-[var(--ee_color_text_secondary)]">
        {{ props.data.author }} • {{ formatDate(props.data.date) }}
      </p>
      <h4 class="text-xl font-medium">{{ props.data.title }}</h4>
      <div class="gap-lg flex items-center">
        <NewsTag v-for="tag in tags" :key="tag.id" :data="tag" />
      </div>
    </div>
  </NuxtLink>
</template>
