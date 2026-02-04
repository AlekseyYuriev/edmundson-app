<script setup lang="ts">
import type { RichTextData } from '~/types/section';

const props = defineProps<{
  data: RichTextData;
}>();
</script>

<template>
  <div>
    <p
      class="text-[18px] font-light text-[var(--ee_color_text)]"
      :class="
        data.children[0].bold
          ? 'text-xxl !font-bold text-[var(--ee_primary)]'
          : ''
      "
    >
      {{ data.children[0].text }}
    </p>
  </div>
</template>
