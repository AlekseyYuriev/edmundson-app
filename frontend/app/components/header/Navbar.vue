<template>
  <nav
    class="flex flex-col items-center gap-8 px-[160px] pt-[25px] pb-[45px] xl:flex-row xl:gap-0"
  >
    <NuxtLink to="/" class="shrink-0">
      <img
        src="~/assets/images/logo.png"
        alt="Edmundson Logo"
        class="h-[50px] w-auto max-w-none"
      />
    </NuxtLink>

    <ul class="ml-0 flex flex-col gap-10 sm:flex-row xl:ml-[170px]">
      <li class="link">
        <NuxtLink to="/" active-class="link__active">Home</NuxtLink>
      </li>
      <li class="link">
        <NuxtLink to="/about" active-class="link__active">About</NuxtLink>
      </li>
      <li class="link">
        <NuxtLink to="/policies/privacy-policy" active-class="link__active"
          >Privacy Policy</NuxtLink
        >
      </li>
      <li class="link">
        <NuxtLink
          to="/policies/terms-and-conditions"
          active-class="link__active"
          >Terms and Conditions</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="postcss" scoped>
.link {
  color: var(--ee_white);
  text-decoration: none;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  transition: all 0.5s ease;
  white-space: nowrap;
}

.link__active {
  background-color: var(--ee_secondary);
  padding: 4px 8px;
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
}
</style>
