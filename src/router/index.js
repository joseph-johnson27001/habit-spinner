import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue"; // Updated import
import HabitsPage from "../views/HabitsPage.vue"; // Updated import
import RewardsPage from "../views/RewardsPage.vue"; // Updated import

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage, // Updated reference
  },
  {
    path: "/habits",
    name: "Habits",
    component: HabitsPage, // Updated reference
  },
  {
    path: "/rewards",
    name: "Rewards",
    component: RewardsPage, // Updated reference
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
