<template>
  <div class="container mx-auto w-12/12 md:w-10/12 lg:w-7/12 md:py-2">
    <router-link
      class="md:hidden flex pt-2 border-b-2 border-grey py-2"
      :to="{ name: 'home' }"
      ><div class="w-fit lg:max-w-xl text-base flex items-center block px-2">
        <div class="w-5 h-5">
          <img src="/src/assets/cinema.gif" alt="Cinema icon" />
        </div>
      </div>
      <p class="">Home</p>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
