<script setup lang="ts">
const error = useError();

const statusCode = computed(() => error.value?.statusCode ?? 500);
const isNotFound = computed(() => statusCode.value === 404);

useSeoMeta({
  title: () => (isNotFound.value ? 'Not found' : 'Error'),
});
</script>

<template>
  <NuxtLayout name="default">
    <div class="mx-auto w-full max-w-5xl px-6 py-20">
      <div
        class="rounded-2xl border border-[var(--ee_card_border)] bg-white p-8"
      >
        <p class="text-sm font-semibold text-[var(--ee_color_text)]/70">
          {{ statusCode }}
        </p>

        <h1 class="mt-2 text-3xl font-bold text-[var(--ee_color_text)]">
          {{ isNotFound ? 'Not found' : 'Something went wrong' }}
        </h1>

        <p class="mt-3 text-base text-[var(--ee_color_text)]/80">
          {{
            isNotFound
              ? "That route doesn't exist."
              : 'An unexpected error occurred. Please try again.'
          }}
        </p>

        <button
          type="button"
          class="mt-8 inline-flex items-center justify-center rounded-lg bg-[var(--ee_primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
          @click="clearError({ redirect: '/' })"
        >
          Back to home page
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
