<script setup lang="ts">
import type { LocationCardData } from '~/types/section';

defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    locations: LocationCardData[];
    zoom?: number;
    tileUrl?: string;
    tileAttribution?: string;
  }>(),
  {
    zoom: 6,
    tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    tileAttribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);

const validLocations = computed(() =>
  (props.locations ?? []).filter(
    (l) => Number.isFinite(l.latitude) && Number.isFinite(l.longitude)
  )
);

const center = computed<[number, number]>(() => {
  if (validLocations.value.length === 0) return [0, 0];

  const avgLat =
    validLocations.value.reduce((sum, l) => sum + l.latitude, 0) /
    validLocations.value.length;
  const avgLng =
    validLocations.value.reduce((sum, l) => sum + l.longitude, 0) /
    validLocations.value.length;

  return [avgLat, avgLng];
});

const mapRef = ref<any>(null);

function fitToLocations() {
  const map = mapRef.value;
  const locs = validLocations.value;
  if (!map || locs.length === 0) return;

  if (locs.length === 1) {
    map.setView(
      [locs[0]!.latitude, locs[0]!.longitude],
      Math.max(props.zoom, 12)
    );
    return;
  }

  map.fitBounds(
    locs.map((l) => [l.latitude, l.longitude]),
    { padding: [24, 24] }
  );
}

function onMapReady(map: any) {
  mapRef.value = map;
  fitToLocations();
}

watch(
  validLocations,
  async () => {
    await nextTick();
    fitToLocations();
  },
  { deep: true }
);
</script>

<template>
  <div class="w-full" v-bind="$attrs">
    <ClientOnly>
      <div
        v-if="validLocations.length === 0"
        class="flex h-[630px] w-full items-center justify-center rounded-xl bg-[var(--ee_card_background)]"
      >
        <p class="text-[18px] font-light opacity-80">
          No locations to display.
        </p>
      </div>

      <LMap
        v-else
        class="h-[630px] w-full overflow-hidden rounded-xl"
        :zoom="zoom"
        :center="center"
        :use-global-leaflet="false"
        @ready="onMapReady"
        :options="{ attributionControl: false }"
      >
        <LTileLayer
          :url="tileUrl"
          :attribution="tileAttribution"
          layer-type="base"
          name="OSM"
        />

        <LMarker
          v-for="l in validLocations"
          :key="l.id"
          :lat-lng="[l.latitude, l.longitude]"
        >
          <LPopup>
            <div class="min-w-[180px]">
              <div class="font-semibold">{{ l.title }}</div>
              <div class="text-sm opacity-80">{{ l.address }}</div>
            </div>
          </LPopup>
        </LMarker>
      </LMap>

      <template #fallback>
        <div
          class="h-[630px] w-full rounded-xl bg-[var(--ee_card_background)]"
        />
      </template>
    </ClientOnly>
  </div>
</template>
