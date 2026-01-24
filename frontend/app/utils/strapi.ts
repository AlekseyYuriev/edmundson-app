export const useStrapiFetch = <T>(url: string) => {
  const config = useRuntimeConfig();

  return $fetch<T>(`${config.public.strapiUrl}${url}`);
};

export const getStrapiMedia = (media?: { url?: string }) => {
  const config = useRuntimeConfig();
  return media?.url ? `${config.public.strapiUrl}${media.url}` : "";
};
