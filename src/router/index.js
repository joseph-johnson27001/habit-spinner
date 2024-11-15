import { createRouter, createWebHistory } from "vue-router";
import HabitsPage from "../views/HabitsPage.vue";
import RewardsPage from "../views/RewardsPage.vue";
import GamePage from "../views/GamePage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import SettingsPage from "@/views/SettingsPage.vue";
import AchievementsPage from "@/views/AchievementsPage.vue";
import ScienceOfHabitsPage from "@/views/ScienceOfHabitsPage.vue";

const routes = [
  {
    path: "/",
    name: "Habits",
    component: HabitsPage,
  },
  {
    path: "/rewards",
    name: "Rewards",
    component: RewardsPage,
  },
  {
    path: "/game",
    name: "Game",
    component: GamePage,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfilePage,
  },
  {
    path: "/achievements",
    name: "Achievements",
    component: AchievementsPage,
  },
  {
    path: "/settings",
    name: "Settings",
    component: SettingsPage,
  },
  {
    path: "/science-of-habits",
    name: "ScienceOfHabits",
    component: ScienceOfHabitsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Ensure scroll to top behavior on route change
    if (savedPosition) {
      return savedPosition;
    } else {
      // Immediately scroll to top of the `.content-container`
      const contentContainer = document.querySelector(".content-container");
      if (contentContainer) {
        contentContainer.scrollTop = 0;
      }
      return { top: 0 }; // Immediate scroll to top
    }
  },
});

export default router;
