<template>
  <!-- Form section -->
  <form @submit.prevent="searchMovies()">
    <input
      type="text"
      v-model="search"
      placeholder="What are you looking for?"
    />
    <input type="submit" value="Search" />
  </form>
</template>

<script>
import { ref } from "vue";
import env from "@/env.js";
export default {
  setup() {
    const search = ref("");
    const movies = ref([]);

    const searchMovies = () => {
      if (search.value != "") {
        fetch(
          `https://api.themoviedb.org/3/movie/${search.value}?api_key=${env.apikey}`
        )
          .then((response) => response.json)
          .then((data) => console.log(data));
      }
    };

    return { search, movies, searchMovies };
  },
};
</script>

<style></style>
