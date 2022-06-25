<template>
  <div @click="getMovieDetail">Detail {{ $route.params.id }}</div>
  <!-- <p>{{ movie }}</p> -->
  <p>{{ movie.plot }}</p>
</template>

<script>
import env from "@/env.js";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const route = useRoute();
    const movie = ref("");

    const getMovieDetail = () => {
      fetch(
        `https://imdb-api.com/en/API/Title/${env.apikey}/${route.params.id}/Posters,Images,Trailer,Ratings,`
      )
        .then((response) => response.json())
        .then((data) => {
          movie.value = data.plot;
          console.log(data);
        });
    };
    return { getMovieDetail, movie };
  },
};
</script>

<style></style>
