<template>
  <!-- Container -->
  <div class="container mx-auto w-12/12 md:w-10/12 lg:w-7/12 md:pt-2">
    <!-- Desktop logo -->
    <div class="hidden md:flex text-3xl text-blue">
      <h1 class="logo pb-1.5">MoviesUP</h1>

      <img
        class="h-9 w-8 pt-0.5 pb-1.5"
        src="/src/assets/popcorn.png"
        alt="Popcorn icon"
      />
    </div>

    <!-- Mobile logo -->
    <div
      class="flex justify-between md:hidden text-xl text-white px-2 py-2 bg-blue"
    >
      <h1 class="logo">MUP</h1>

      <!-- Mobile menu button -->
      <button @click="openMenu = !openMenu" v-if="!openMenu">
        <router-link class="md:hidden" :to="{ name: 'menu' }">
          <img src="/src/assets/hamburger.png" class="w-6 h-6" alt="" />
        </router-link>
      </button>

      <div @click="openMenu = !openMenu" v-if="openMenu">
        <img
          src="/src/assets/close.png"
          @click="$router.back(1)"
          class="w-6 h-6"
          alt=""
        />
      </div>
    </div>

    <!--Desktop router  -->
    <div class="container hidden md:flex w-12/12 bg-blue">
      <router-link
        class="title text-white px-4 py-2 br-4 br-white"
        :to="{ name: 'home' }"
        >Home
      </router-link>
      <router-link
        class="title text-white px-4 py-2 br-4 br-white"
        :to="{ name: 'movie' }"
        >Movie</router-link
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const openMenu = ref(false);
    return { openMenu };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");
.title {
  font-size: 13px;
}

.logo {
  font-family: "Acme", sans-serif;
}
</style>
