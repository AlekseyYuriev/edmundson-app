<script setup lang="ts">
interface HeroData {
  title: string
  subtitle: string
}

const props = defineProps<{
  data: HeroData
}>()
</script>

<template>
  <div class="my-8 bg-gray-100 h-[200px] flex items-center justify-center p-8">
      <h1 class="text-5xl font-bold">
        {{ props.data.title }}
      </h1>
      <p class="mt-4 text-xl">
        {{ props.data.subtitle }}
      </p>
    </div>
</template>
