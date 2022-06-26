<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<template>
  <div class="min-h-screen text-black">
    <Navbar />
    <router-view> </router-view>
  </div>
</template>

<style>
* {
  font-family: Verdana, sans-serif;
  font-weight: 700;
}
</style>
