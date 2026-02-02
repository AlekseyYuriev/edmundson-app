<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy',
  description: 'Our privacy policy.',
});
</script>

<template>
  <div class="mx-auto min-h-[calc(100vh-20.75rem)] w-full max-w-5xl px-6 py-10">
    <h1 class="text-3xl font-bold text-[var(--ee_text_footer)]">
      Privacy Policy
    </h1>
    <p class="mt-2 text-base text-[var(--ee_text_footer)]/80">
      This page is under development.
    </p>

    <div
      class="mt-8 rounded-xl border border-[var(--ee_card_border)] bg-white p-6"
    >
      <p class="text-sm text-[var(--ee_text_footer)]/75">
        Put your policy content here (sections, effective date, contact info,
        etc).
      </p>
      <NuxtLink
        to="/"
        class="mt-4 inline-block text-sm font-semibold text-[var(--ee_primary)] hover:underline"
      >
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>
