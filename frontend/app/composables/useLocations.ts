import type { ComputedRef, Ref } from 'vue';
import { keepPreviousData, useQuery } from '@tanstack/vue-query';
import type { StrapiResponse } from '~/types/strapi';
import type { LocationCardData } from '~/types/section';

type SearchInput = string | Ref<string> | ComputedRef<string>;

export const useLocations = (search: SearchInput = '') => {
  const normalizedSearch = computed(() => (unref(search) ?? '').trim());

  const queryString = computed(() => {
    const params = new URLSearchParams();

    // Stable ordering
    params.set('sort', 'order:asc');

    // In case `address` is a relation
    params.set('populate[address]', '*');

    const q = normalizedSearch.value;
    if (q) {
      const fields = [
        'addressLine1',
        'addressLine2',
        'addressLine3',
        'city',
        'district',
        'postcode',
      ] as const;

      fields.forEach((field, idx) => {
        params.set(`filters[$or][${idx}][address][${field}][$containsi]`, q);
      });
    }

    return params.toString();
  });

  return useQuery({
    queryKey: computed(() => ['locations', normalizedSearch.value]),
    queryFn: () =>
      useStrapiFetch<StrapiResponse<LocationCardData>>(
        `/api/locations?${queryString.value}`
      ),
    placeholderData: keepPreviousData,
  });
};
