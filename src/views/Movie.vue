<template>
  <!-- Search All -->
  <div
    class="container mx-auto w-12/12 md:w-10/12 lg:w-7/12 md:pt-2 px-2 md:px-3.5 bg-blue1 border-b border-blue"
  >
    Search All
  </div>

  <!-- Search input -->
  <div
    class="container flex mx-auto w-12/12 md:w-10/12 lg:w-7/12 border-x border-grey"
  >
    <form
      @submit.prevent="searchMovies()"
      class="form flex mx-auto justify-center w-8/12 my-8 border border-grey3 rounded-lg"
    >
      <input
        type="text"
        v-model="search"
        placeholder="Search Movies..."
        class="input flex mx-auto w-full py-3 text-sm font-normal px-2 border-grey3 rounded-l-lg"
      />
      <div class="bg-grey2 rounded-r-lg border-l border-grey3">
        <input
          type="image"
          src="/src/assets/search.png"
          class="w-6 h-6 mx-3 my-3"
          alt="Submit"
        />
      </div>
    </form>
  </div>

  <!-- Search results  -->
  <div
    class="container flex mx-auto w-12/12 md:w-10/12 lg:w-7/12 border-x border-grey"
  >
    <div class="w-full bg-blue2 mx-3 py-1 text-white text-center">
      <!-- {{ movies.length }} -->
      <p class="text-xs">Search Results for "{{ searchResults }}"</p>
    </div>
  </div>
  <!-- <div v-if="movies.length">
    <div v-for="movie in movies" :key="movie.id">
      <router-link :to="{ name: 'moviedetail', params: { id: movie.id } }">
        <img :src="movie.image" alt="Poster" width="450" height="500" />
        <p>{{ movie.title }}</p>
      </router-link>
    </div>
  </div>

  <div v-if="load == true">Loading</div> -->
</template>

<script>
import { ref } from "vue";
import env from "@/env.js";

export default {
  setup() {
    const search = ref("");
    const movies = ref([]);
    const searchResults = ref("");
    const load = ref(false);

    const searchMovies = () => {
      if (search.value != "") {
        fetch(
          `https://imdb-api.com/en/API/Search/${env.apikey}/${search.value}`
        )
          .then((response) => response.json())
          .then((data) => {
            movies.value = data.results;
            load.value = false;

            console.log(data);
          });
        searchResults.value = search.value;
        load.value = true;
      }
    };

    return { search, movies, searchMovies, searchResults, load };
  },
};
</script>

<style>
.input {
  font-weight: 400;
}
</style>
