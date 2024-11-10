<template>
  <div class="overlay">
    <div class="side-navigation">
      <!-- Top section: Coins and Plays (streaks) -->
      <div class="top-section">
        <div class="status">
          <i class="fas fa-coins coin-icon"></i>
          <span>{{ getCoins }}</span>
          <i class="fas fa-fire fire-icon"></i>
          <span>{{ storedHabits }}</span>
          <i class="fas fa-star star-icon"></i>
          <span>8</span>
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
  props: {
    slideOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      links: [
        { text: "How to use this app", to: "/how-to-use" },
        { text: "The Science of making habits", to: "/science-of-habits" },
      ],
    };
  },
  methods: {
    close() {
      this.$emit("close"); // Emit close event to parent component
    },
  },
  computed: {
    ...mapGetters("habits", ["storedHabits"]),
    ...mapGetters("currency", ["getCoins"]),
  },
};
</script>

<style scoped>
/* Overlay styles */
.overlay {
  position: fixed;
  height: 100vh;
  z-index: 2;
  font-family: "Baloo 2", sans-serif;
  transition: right 0.5s ease; /* Smooth transition for sliding in and out */
}

/* Side Navigation Styles */
.side-navigation {
  width: 100vw;
  background: #e6e6e6;
  margin-top: 66px;
  height: 100%;
  max-width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.1rem;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
}

/* When the overlay is active and should be visible */
.overlay.active {
  right: 0; /* Bring the side navigation into view */
}

/* Top Section with Coin and Plays */
.top-section {
  display: flex;
}

.status {
  display: flex;
  align-items: center;
  gap: 8px;
}

.coin-icon {
  font-size: 18px;
  color: #ffcc00;
}

.fire-icon {
  color: #f76809;
  font-size: 18px;
}

.star-icon {
  color: #ffcc00;
}

/* Navigation Links */
.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  text-align: left;
}

.nav-links li {
  margin: 10px 0px;
  border-bottom: 1px dashed #ccc;
  padding: 10px 0;
}

.nav-links a {
  text-decoration: none;
  text-transform: capitalize;
  color: #333;
}

/* Bottom Link (Settings) */
.bottom-link {
  border-top: 1px dashed #ccc;
  padding-top: 10px;
  margin-top: 20px;
  margin-bottom: 170px;
  text-align: left;
}

.bottom-link a {
  text-decoration: none;
  color: #333;
}
</style>
