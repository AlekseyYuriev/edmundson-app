<script setup lang="ts">
import LocationCard from './LocationCard.vue';
import LocationMap from './LocationMap.vue';
import EEClear from '~/components/icon/EEClear.vue';
import type { LocationCardData, LocationData } from '~/types/section';

const props = defineProps<{
  data: LocationData;
}>();

// "Applied" search (actually hits the query).
const search = ref('');
// Draft input (search only on click/Enter).
const searchDraft = ref('');
const selectedLocation = ref<LocationCardData | null>(null);

const { data: locations, isFetching } = useLocations(search);

const locationCards = computed(() => locations.value?.data ?? []);

const applySearch = () => {
  search.value = searchDraft.value.trim();
};

const clearSearch = () => {
  searchDraft.value = '';
  search.value = '';
};
</script>

<template>
  <section
    class="py-xl my-xs flex flex-col justify-center gap-[4px] px-[160px]"
  >
    <h2 class="mb-xl text-[48px] font-bold">{{ props.data.title }}</h2>
    <div class="gap-ms flex">
      <div class="flex h-[630px] max-w-[460px] min-w-[346px] flex-col pr-2">
        <div
          class="gap-xs mb-sm relative flex w-full min-w-[346px] flex-col items-center"
        >
          <input
            v-model="searchDraft"
            type="text"
            placeholder="Search location"
            class="h-[44px] w-full rounded-lg border border-[var(--ee_card_border)] bg-transparent px-3 text-[16px] font-light ring-0 outline-none placeholder:opacity-60 focus:border-[var(--ee_primary)]"
            @keydown.enter.prevent="applySearch"
          />
          <EEClear
            v-if="searchDraft"
            @click="clearSearch"
            class="absolute top-3 right-3 cursor-pointer text-[var(--ee_color_text_secondary)] transition-colors hover:text-[var(--ee_color_text)]"
          />

          <button
            type="button"
            class="h-[44px] w-full cursor-pointer rounded-lg bg-[var(--ee_primary)] px-4 text-[14px] font-semibold whitespace-nowrap text-white disabled:cursor-not-allowed disabled:opacity-60"
            :disabled="isFetching"
            @click="applySearch"
          >
            Search
          </button>
        </div>

        <div class="gap-ms flex w-full flex-1 flex-col overflow-y-auto">
          <LocationCard
            v-for="card in locationCards"
            :key="card.id"
            :data="card"
            @view-on-map="selectedLocation = $event"
          />

          <p
            v-if="locationCards.length === 0"
            class="py-md w-full text-[16px] font-light opacity-70"
          >
            No locations found.
          </p>
        </div>
      </div>
      <LocationMap
        class="w-full min-w-0 flex-1"
        :locations="locationCards"
        :selected-location="selectedLocation"
      />
    </div>
  </section>
</template>
