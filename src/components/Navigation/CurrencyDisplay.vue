<template>
  <div class="overlay" @click.self="close">
    <div class="side-navigation">
      <!-- Top section: Coins and Plays (streaks) -->
      <div class="top-section">
        <div class="status">
          <i class="fas fa-coins coin-icon"></i>
          <span>{{ getCoins }}</span>
          <i class="fas fa-fire fire-icon"></i>
          <span>{{ storedHabits }}</span>
        </div>
      </div>

      <!-- Links Section -->
      <ul class="nav-links">
        <li v-for="link in links" :key="link.text">
          <router-link :to="link.to" @click="close">{{
            link.text
          }}</router-link>
        </li>
      </ul>

      <!-- Settings Link at the Bottom -->
      <div class="bottom-link">
        <router-link to="/settings" @click="close">Settings</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SideNavigation",
  emits: ["close"],
  data() {
    return {
      links: [
        { text: "How to use this app", to: "/how-to-use" },
        { text: "The Science of making habits", to: "/science-of-habits" },
      ],
    };
  },
  computed: {
    ...mapGetters("habits", ["storedHabits"]),
    ...mapGetters("currency", ["getCoins"]),
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 200;
}

.side-navigation {
  width: 80%;
  max-width: 400px;
  background: #e0e0e0;
  height: 100%;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateX(100%);
  animation: slideIn 0.3s forwards;
}

/* Top Section with Coin and Plays */
.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.status {
  display: flex;
  gap: 10px;
  align-items: center;
}

.coin-icon,
.fire-icon {
  font-size: 18px;
  color: #ffcc00;
}

/* Navigation Links */
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

.nav-links li {
  margin-bottom: 15px;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.nav-links a {
  text-decoration: none;
  color: #333;
}

/* Bottom Link (Settings) */
.bottom-link {
  border-top: 1px solid #ccc;
  padding-top: 10px;
  margin-top: 20px;
}

.bottom-link a {
  text-decoration: none;
  color: #333;
}

.close-btn {
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
}

/* Slide-in animation */
@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
