<template>
  <div class="nav-bar">
    <div class="nav-content">
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
        :class="{ active: $route.path === '/' }"
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
  background-color: #f3f2f2;
  padding: 10px 0;
  width: 100%;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
}

.nav-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
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
