import { createRouter, createWebHistory } from "vue-router";
import HabitsPage from "../views/HabitsPage.vue";
import RewardsPage from "../views/RewardsPage.vue";
import SpinnerPage from "../views/SpinnerPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import SettingsPage from "@/views/SettingsPage.vue";
import AchievementsPage from "@/views/AchievementsPage.vue";

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
    path: "/spinner",
    name: "Spinner",
    component: SpinnerPage,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
