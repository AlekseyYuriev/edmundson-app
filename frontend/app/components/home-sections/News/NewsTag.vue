<script setup lang="ts">
import type { TagData } from '~/types/section';

const props = defineProps<{
  data: TagData;
}>();
</script>

<template>
  <span
    class="text-ms py-xxs px-sm rounded-[44px] border font-medium whitespace-nowrap text-[var(--ee_color_text)]"
    >{{ props.data.tag }}</span
  >
</template>
