import { useQuery } from "@tanstack/vue-query";

export const usePages = () => {
  return useQuery({
    queryKey: ["pages"],
    queryFn: () =>
      useStrapiFetch("/api/pages?populate[sections][populate]=*"),
  });
};
