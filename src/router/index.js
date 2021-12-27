import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Venue from "../views/Venue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/venue",
    name: "Venue",
    component: Venue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
