<script setup lang="ts">
import type { PolicyData } from '~/types/section';

const props = defineProps<{
  data: PolicyData;
}>();
</script>

<template>
  <div>
    <p
      class="text-[18px] font-light text-[var(--ee_color_text)]"
      :class="data.children[0].bold ? 'font-medium' : ''"
    >
      {{ data.children[0].text }}
    </p>
  </div>
</template>
