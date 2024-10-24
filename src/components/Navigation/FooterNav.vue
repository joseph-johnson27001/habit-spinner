<template>
  <div class="nav-bar">
    <div class="nav-content">
      <router-link
        to="/profile"
        class="nav-button"
        :class="{ active: $route.path === '/profile' }"
      >
        <i class="fas fa-user"></i>
        <!-- Updated Profile Icon -->
        <span>PROFILE</span>
      </router-link>
      <router-link
        to="/"
        class="nav-button"
        :class="{ active: $route.path === '/' }"
      >
        <i class="fas fa-list-alt"></i>
        <span>HABITS</span>
      </router-link>
      <router-link
        to="/tracker"
        class="nav-button"
        :class="{ active: $route.path === '/tracker' }"
      >
        <i class="fas fa-spinner"></i>
        <span>TRACKER</span>
      </router-link>
      <router-link
        to="/rewards"
        class="nav-button"
        :class="{ active: $route.path === '/rewards' }"
      >
        <i class="fas fa-gift"></i>
        <span>REWARDS</span>
      </router-link>
      <router-link
        to="/settings"
        class="nav-button"
        :class="{ active: $route.path === '/settings' }"
      >
        <i class="fas fa-cog"></i>
        <!-- Updated Settings Icon -->
        <span>SETTINGS</span>
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
  width: 100%;
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  background-color: #f3f2f2;
}

/* Flex layout for buttons */
.nav-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  max-width: 1200px;
  width: 100%;
}

/* Styling for each button */
.nav-button {
  color: #666666;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  transition: background-color 0.3s ease;
}

/* Active page indicator (colored line at the top of the square) */
.nav-button.active::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #24b2da;
  border-radius: 5px;
}

/* Active button text and icon colors */
.nav-button.active {
  color: #333333;
}

/* Icons */
.nav-button i {
  font-size: 18px;
}

/* Text */
.nav-button span {
  font-size: 10px;
  margin-top: 4px;
}
</style>
