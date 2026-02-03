<script setup lang="ts">
if (import.meta.server) {
  const event = useRequestEvent();
  if (event) setResponseStatus(event, 404);
}

useSeoMeta({
  title: 'Not found',
  description: "That route doesn't exist.",
});
</script>

<template>
  <div
    class="mx-auto flex min-h-[calc(100vh-20.75rem)] w-full flex-col items-center justify-center px-6 py-20"
  >
    <p class="text-[10rem] font-semibold">404</p>

    <h1 class="mt-2 text-3xl font-bold text-[var(--ee_color_text)]">
      Oops! Page not found
    </h1>

    <NuxtLink
      to="/"
      class="text-ms mt-8 inline-flex items-center justify-center rounded-lg bg-[var(--ee_primary)] px-4 py-2 font-semibold text-white hover:text-[var(--ee_black)]"
    >
      BACK TO HOME
    </NuxtLink>
  </div>
</template>
