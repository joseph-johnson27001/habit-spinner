<template>
  <div class="nav-bar">
    <div class="nav-content">
      <!-- Profile Button -->
      <router-link
        to="/profile"
        class="nav-button"
        :class="{ active: $route.path === '/profile' }"
      >
        <i class="fas fa-user"></i>
        <span>PROFILE</span>
      </router-link>

      <!-- Habits Button -->
      <router-link
        to="/"
        class="nav-button"
        :class="{ active: $route.path === '/' }"
      >
        <i class="fas fa-list-alt"></i>
        <span>HABITS</span>
      </router-link>

      <!-- Centerpiece Tracker Button (Circular) -->
      <router-link
        to="/tracker"
        class="nav-button tracker-button"
        :class="{
          active: $route.path === '/tracker',
          'ready-to-play': tasksCompleted,
        }"
      >
        <i class="fas fa-fire"></i>
      </router-link>

      <!-- Rewards Button -->
      <router-link
        to="/rewards"
        class="nav-button"
        :class="{ active: $route.path === '/rewards' }"
      >
        <i class="fas fa-gift"></i>
        <span>REWARDS</span>
      </router-link>

      <!-- Settings Button -->
      <router-link
        @click="this.tasksCompleted = !this.tasksCompleted"
        to="/settings"
        class="nav-button"
        :class="{ active: $route.path === '/settings' }"
      >
        <i class="fas fa-cog"></i>
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
  data() {
    return {
      tasksCompleted: false, // This would be dynamically updated based on task completion status
    };
  },
};
</script>

<style scoped>
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
  border-top: 1px solid #ccc;
}

/* Flex layout for buttons */
.nav-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  max-width: 1200px;
  width: 100%;
  position: relative;
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
}

.nav-button:focus {
  outline: none;
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

/* Centerpiece Tracker Button Styling */
.tracker-button {
  position: absolute;
  bottom: 35px; /* Makes it rise above the navbar */
  width: 45px;
  height: 45px;
  background-color: #24b2da;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, background-color 0.3s ease;
  z-index: 1001;
}

/* Icon inside the tracker button */
.tracker-button i {
  font-size: 28px;
}

/* Glow effect when the user has completed their tasks */
.tracker-button.ready-to-play {
  background-color: #f76809;
  box-shadow: 0 0 20px rgba(247, 104, 9, 0.8);
  transform: scale(1.1);
  animation: pulse 2s infinite ease-in-out;
}

.tracker-button.active::before {
  background: none;
  outline: none;
}

.fa-fire:before {
  color: white;
}

/* Define the pulse animation */
@keyframes pulse {
  0% {
    transform: scale(1.1); /* Initial scale */
    box-shadow: 0 0 10px rgba(247, 104, 9, 0.8); /* Initial shadow */
  }
  50% {
    transform: scale(1.2); /* Grow the scale slightly */
    box-shadow: 0 0 15px rgba(247, 104, 9, 1); /* Increase shadow */
  }
  100% {
    transform: scale(1.1); /* Back to original scale */
    box-shadow: 0 0 10px rgba(247, 104, 9, 0.8); /* Return to original shadow */
  }
}
</style>
