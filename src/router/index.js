import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import Movie from "../views/Movie.vue";
import MovieDetail from "../views/MovieDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/menu",
      name: "menu",
      component: Menu,
    },
    {
      path: "/movie",
      name: "movie",
      component: Movie,
    },
    {
      path: "/movie/:id",
      name: "moviedetail",
      component: MovieDetail,
    },
  ],
});

export default router;
