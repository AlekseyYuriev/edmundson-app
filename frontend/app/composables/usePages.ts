import { useQuery } from '@tanstack/vue-query';
import type { PageData, StrapiResponse } from '~/types/strapi';

const HOME_SLUG = 'home';

export const usePages = (slug: string = HOME_SLUG) => {
  const encodedSlug = encodeURIComponent(slug);

  // IMPORTANT: Always filter by slug so the homepage query doesn't accidentally
  // fetch *all* pages (e.g. "privacy-policy") after you add more pages in Strapi.
  const base = `/api/pages?filters[slug][$eq]=${encodedSlug}`;

  const populate =
    slug === HOME_SLUG
      ? base +
        '&populate[sections][on][sections.hero][populate]=*' +
        '&populate[sections][on][sections.location][populate][locations][populate]=*' +
        '&populate[sections][on][sections.partners][populate][partner_cards][populate]=*' +
        '&populate[sections][on][sections.services][populate][service_cards][populate]=*'
      : `${base}&populate[sections][on][sections.policy][populate]=*`;

  return useQuery({
    queryKey: ['pages', slug],
    queryFn: () => useStrapiFetch<StrapiResponse<PageData>>(populate),
  });
};
