<template>
  <div class="nav-bar">
    <router-link
      to="/habits"
      class="nav-button"
      :class="{ active: $route.path === '/habits' }"
    >
      <i class="fas fa-list-alt"></i>
      <span>Habits</span>
    </router-link>
    <router-link
      to="/"
      class="nav-button"
      :class="{ active: $route.path === '/tracker' }"
    >
      <i class="fas fa-spinner"></i>
      <span>Tracker</span>
    </router-link>
    <router-link
      to="/rewards"
      class="nav-button"
      :class="{ active: $route.path === '/rewards' }"
    >
      <i class="fas fa-gift"></i>
      <span>Rewards</span>
    </router-link>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "NavBar",
  components: {
    RouterLink,
  },
};
</script>

<style>
.nav-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f3f2f2;
  color: #333333;
  padding: 10px 0;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}

.nav-button {
  color: #666666;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-button.active {
  color: #333333;
}

.nav-button i {
  font-size: 20px;
}

.nav-button span {
  font-size: 12px;
}
</style>
