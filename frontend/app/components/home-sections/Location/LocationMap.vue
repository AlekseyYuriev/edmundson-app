<script setup lang="ts">
import EEIconMap from '~/components/icon/EEIconMap.vue';
import EEIconPhone from '~/components/icon/EEIconPhone.vue';
import type { LocationCardData } from '~/types/section';

defineOptions({ inheritAttrs: false });

const props = withDefaults(
  defineProps<{
    locations?: LocationCardData[];
    selectedLocation?: LocationCardData | null;
    zoom?: number;
    tileUrl?: string;
    tileAttribution?: string;
  }>(),
  {
    selectedLocation: null,
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
const isMapReady = ref(false);

onBeforeUnmount(() => {
  // If the map component unmounts, any pending watcher work must no-op.
  isMapReady.value = false;
  mapRef.value = null;
});

// When there are no locations, the <LMap> subtree is not rendered.
// Clear refs so we never try to operate on a destroyed Leaflet instance.
watch(
  () => validLocations.value.length,
  (len) => {
    if (len === 0) {
      isMapReady.value = false;
      mapRef.value = null;
    }
  }
);

function fitToLocations() {
  const map = mapRef.value;
  const locs = validLocations.value;
  if (!isMapReady.value || !map || locs.length === 0) return;

  // Leaflet throws if we try to move a map whose container has been torn down.
  const container: HTMLElement | undefined = map.getContainer?.();
  if (!container?.isConnected) return;

  try {
    map.invalidateSize?.({ pan: false });
  } catch {
    // ignore
  }

  try {
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
  } catch {
    // Map might be mid-destroy; safely ignore.
  }
}

function onMapReady(map: any) {
  mapRef.value = map;
  isMapReady.value = true;
  fitToLocations();
}

watch(
  validLocations,
  async () => {
    await nextTick();
    fitToLocations();
  },
  { flush: 'post' }
);

watch(
  () => props.selectedLocation,
  async (loc) => {
    const map = mapRef.value;
    if (!isMapReady.value || !map || !loc) return;
    if (!Number.isFinite(loc.latitude) || !Number.isFinite(loc.longitude))
      return;

    await nextTick();
    const container: HTMLElement | undefined = map.getContainer?.();
    if (!container?.isConnected) return;

    try {
      map.flyTo([loc.latitude, loc.longitude], 14, {
        animate: true,
        duration: 0.6,
      });
    } catch {
      // ignore
    }
  }
);
</script>

<template>
  <div class="w-full min-w-0" v-bind="$attrs">
    <ClientOnly>
      <div class="relative h-[630px] w-full overflow-hidden rounded-xl">
        <div
          v-if="validLocations.length === 0"
          class="flex h-full w-full items-center justify-center bg-[var(--ee_card_background)]"
        >
          <p class="text-[18px] font-light opacity-80">
            No locations to display.
          </p>
        </div>

        <LMap
          v-else
          class="h-full w-full"
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
            <LPopup :options="{ closeButton: false }">
              <div class="min-w-[320px]">
                <h4
                  class="mb-xs text-[18px] font-medium text-[var(--ee_primary)]"
                >
                  {{ l.title }}
                </h4>
                <div class="gap-xs mb-xxs flex items-center">
                  <EEIconMap
                    class="h-[24px] w-[24px] flex-shrink-0 self-start"
                  />
                  <div class="mt-[2px] text-[16px] font-light">
                    <p class="!m-0">{{ l.address.addressLine1 }}</p>
                    <p class="!m-0">{{ l.address.addressLine2 }}</p>
                    <p class="!m-0">{{ l.address.addressLine3 }}</p>
                    <p class="!m-0">{{ l.address.city }}</p>
                    <p class="!m-0">{{ l.address.district }}</p>
                    <p class="!m-0">{{ l.address.postcode }}</p>
                  </div>
                </div>
                <div class="gap-xs flex items-center">
                  <EEIconPhone
                    class="h-[24px] w-[24px] flex-shrink-0 self-start text-[var(--ee_primary)]"
                  />
                  <div class="mt-[2px] text-[16px] font-light">
                    <p class="!m-0">{{ l.phone }}</p>
                    <p class="!m-0">{{ l.manager }}</p>
                    <p class="!m-0 underline">{{ l.email }}</p>
                  </div>
                </div>
              </div>
            </LPopup>
          </LMarker>
        </LMap>
      </div>

      <template #fallback>
        <div
          class="h-[630px] w-full rounded-xl bg-[var(--ee_card_background)]"
        />
      </template>
    </ClientOnly>
  </div>
</template>
