<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<template>
  <div class="min-h-screen text-black pb-12">
    <Navbar />
    <router-view> </router-view>
  </div>
</template>

<style>
* {
  font-family: "Verdana", "Arial";
  font-weight: 700;
}
</style>
