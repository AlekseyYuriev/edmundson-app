import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      strapiUrl: import.meta.env.NUXT_PUBLIC_STRAPI_URL,
    },
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: [300, 400, 600, 700],
        },
        download: true,
        outputDir: "app/assets",
      },
    ],
  ],
});
