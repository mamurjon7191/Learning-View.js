import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Todos from "../views/Todos.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/todos",
      component: Todos,
    },
  ],
});

export default router;
