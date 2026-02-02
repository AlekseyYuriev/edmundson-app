<template>
  <nav class="flex items-center justify-between px-[160px] pt-[25px] pb-[45px]">
    <NuxtLink to="/">
      <img
        src="~/assets/images/logo.png"
        alt="Edmundson Logo"
        class="h-[50px]"
      />
    </NuxtLink>

    <ul class="ml-[170px] flex flex-grow gap-10">
      <li class="link">
        <NuxtLink to="/" active-class="link__active">Home</NuxtLink>
      </li>
      <li class="link">
        <NuxtLink to="/about" active-class="link__active">About</NuxtLink>
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
}

.link__active {
  background-color: var(--ee_secondary);
  padding: 4px 8px;
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
}
</style>
