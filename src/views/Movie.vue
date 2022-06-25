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
  <p>Search Results for {{ searchResults }} {{ movies.length }}</p>
  <div v-for="movie in movies" :key="movie.id">
    <router-link :to="{ name: 'moviedetail', params: { id: movie.id } }">
      <img :src="movie.image" alt="Poster" width="450" height="500" />
      <p>{{ movie.title }}</p>
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import env from "@/env.js";

export default {
  setup() {
    const search = ref("");
    const movies = ref([]);
    const searchResults = ref("");

    const searchMovies = () => {
      if (search.value != "") {
        fetch(
          `https://imdb-api.com/en/API/Search/${env.apikey}/${search.value}`
        )
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.results;
            console.log(data);
          });
        searchResults.value = search.value;
      }
    };

    return { search, movies, searchMovies, searchResults };
  },
};
</script>

<style></style>
