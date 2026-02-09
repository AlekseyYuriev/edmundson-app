<script setup lang="ts">
import type { LocatorData } from '~/types/section';
import LocatorApp from './LocatorApp.vue';

const props = defineProps<{
  data: LocatorData;
}>();

const locatorApps = computed(() => props.data.locator_apps);
const description = computed(() => props.data.description[0]?.children);
</script>

<template>
  <section
    class="flex flex-col items-center justify-between gap-[92px] bg-[var(--ee_tertiary)] px-[160px] py-[40px] xl:flex-row"
  >
    <div>
      <h2 class="mb-sm text-[48px] font-bold">{{ props.data.title }}</h2>
      <span
        v-for="(item, index) in description"
        :key="index"
        class="text-[18px]"
        :class="item.bold ? 'font-medium' : 'font-light'"
        >{{ item.text }}</span
      >
    </div>
    <div class="gap-lg flex">
      <LocatorApp v-for="app in locatorApps" :key="app.id" :data="app" />
    </div>
  </section>
</template>
