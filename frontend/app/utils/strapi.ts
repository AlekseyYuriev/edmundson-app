export const useStrapiFetch = <T>(url: string) => {
  const config = useRuntimeConfig();

  return $fetch<T>(`${config.public.strapiUrl}${url}`);
};
