import { useQuery } from '@tanstack/vue-query';

export const usePages = () => {
  const populate =
    '/api/pages' +
    '?populate[sections][on][sections.hero][populate]=*' +
    '&populate[sections][on][sections.partners][populate]=*' +
    '&populate[sections][on][sections.services][populate][service_cards][populate]=*';

  return useQuery({
    queryKey: ['pages'],
    queryFn: () => useStrapiFetch(populate),
  });
};
