<script setup lang="ts">
import type { LocationCardData } from '~/types/section';
import EEIconMap from '~/components/icon/EEIconMap.vue';

const props = defineProps<{
  data: LocationCardData;
}>();

const emit = defineEmits<{
  'view-on-map': [location: LocationCardData];
}>();
</script>

<template>
  <div
    class="py-sm px-md flex flex-col rounded-xl border border-[var(--ee_card_border)]"
  >
    <p class="text-[18px] font-light">
      <span class="font-medium">Branch Manager</span>
      {{ props.data.manager }}
    </p>
    <p class="text-[18px] font-light">
      <span class="font-medium">Contact No.</span>
      {{ props.data.phone }}
    </p>
    <p class="text-[18px] font-light">
      <span class="font-medium">Email </span>
      <span class="underline">{{ props.data.email }}</span>
    </p>
    <p class="text-[18px] font-medium">
      {{ props.data.title }}
    </p>
    <div class="gap-xs flex items-center">
      <EEIconMap class="h-[24px] w-[24px] flex-shrink-0 self-start" />
      <div class="max-w-[262px] text-[16px] font-light">
        <p>{{ props.data.address.addressLine1 }}</p>
        <p>{{ props.data.address.addressLine2 }}</p>
        <p>{{ props.data.address.addressLine3 }}</p>
        <p>{{ props.data.address.city }}</p>
        <p>{{ props.data.address.district }}</p>
        <p>{{ props.data.address.postcode }}</p>
      </div>
    </div>

    <button
      type="button"
      class="mt-sm mb-md py-xs px-xs inline-flex w-fit cursor-pointer items-center self-start rounded-lg border border-[var(--ee_primary)] text-[14px] font-semibold text-[var(--ee_primary)] transition-colors hover:bg-[var(--ee_primary)] hover:text-white"
      @click="emit('view-on-map', props.data)"
    >
      VIEW ON MAP
    </button>
  </div>
</template>
