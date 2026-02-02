<script setup lang="ts">
import EEFacebook from '~/components/icon/EEFacebook.vue';
import EEInstagram from '~/components/icon/EEInstagram.vue';
import EETwitter from '~/components/icon/EETwitter.vue';
import EELinkedIn from '~/components/icon/EELinkedIn.vue';

const props = defineProps({
  content: Object,
});
</script>

<template>
  <footer
    class="relative bottom-0 flex w-full flex-col items-center justify-center px-[160px]"
  >
    <div class="pb-lg flex w-full flex-1 justify-between py-[36px]">
      <img
        src="~/assets/images/logo-footer.png"
        alt="Edmundson Logo"
        class="h-[40px]"
      />
      <div
        class="gap-sm flex max-w-[229px] flex-col text-lg font-light text-[var(--ee_text_footer)]"
      >
        <p>Edmundson House</p>
        <p class="text-ms">
          PO Box 1, Tatton Street, Knutsford, Cheshire. WA16 6AY
        </p>
      </div>
      <div
        class="gap-sm text-ms flex flex-col font-light text-[var(--ee_text_footer)]"
      >
        <p>Registration No.- 2667012</p>
        <p>edmundson@eel.co.uk</p>
      </div>
      <div
        class="gap-sm text-ms flex flex-col font-semibold text-[var(--ee_text_footer)]"
      >
        <NuxtLink to="policies/terms-and-conditions">
          <p class="cursor-pointer">Terms and Conditions</p>
        </NuxtLink>
        <NuxtLink to="policies/privacy-policy">
          <p class="cursor-pointer">Privacy Policy</p>
        </NuxtLink>
      </div>
      <ul class="gap-md flex">
        <li class="cursor-pointer">
          <EEFacebook class="text-[var(--ee_primary)]" />
        </li>
        <li class="cursor-pointer">
          <EEInstagram class="text-[var(--ee_primary)]" />
        </li>
        <li class="cursor-pointer">
          <EETwitter class="text-[var(--ee_primary)]" />
        </li>
        <li class="cursor-pointer">
          <EELinkedIn class="text-[var(--ee_primary)]" />
        </li>
      </ul>
    </div>
    <div class="pt-sm pb-[36px]">
      <span class="text-ms font-light text-[var(--ee_text_footer)]"
        >© Copyright Edmundson Electrical, All rights reserved 2022-2025.</span
      >
    </div>
  </footer>
</template>
