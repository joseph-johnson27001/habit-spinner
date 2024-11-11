<template>
  <div :class="['overlay', { active: slideOpen }]">
    <div class="side-navigation">
      <!-- Top section: Coins, Streaks, and Level -->
      <div class="top-section">
        <div class="status">
          <div class="status-item">
            <div>
              <i class="fas fa-coins coin-icon"></i>
              <span>{{ getCoins }}</span>
            </div>
            <div class="progress-bar">
              <div
                class="progress-fill"
                :style="{ width: coinProgress + '%' }"
              ></div>
            </div>
          </div>
          <div class="status-item">
            <div>
              <i class="fas fa-fire fire-icon"></i>
              <span>{{ storedHabits }}</span>
            </div>
            <div class="progress-bar">
              <div
                class="progress-fill"
                :style="{ width: streakProgress + '%' }"
              ></div>
            </div>
          </div>
          <div class="status-item">
            <div>
              <i class="fas fa-star star-icon"></i>
              <span>{{ getLevel }}</span>
            </div>
            <div class="progress-bar">
              <div
                class="progress-fill"
                :style="{ width: levelProgress + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Links Section with Icons -->
      <ul class="nav-links">
        <li v-for="link in links" :key="link.text">
          <router-link :to="link.to" @click="close">
            <i :class="link.icon" class="link-icon"></i> {{ link.text }}
          </router-link>
        </li>
      </ul>

      <!-- Settings Link with Cog Icon -->
      <div class="bottom-link">
        <router-link to="/settings" @click="close">
          <i class="fas fa-cog link-icon"></i> Settings
        </router-link>
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
        {
          text: "How to use this app",
          to: "/how-to-use",
          icon: "fas fa-question-circle",
        },
        {
          text: "The Science of making habits",
          to: "/science-of-habits",
          icon: "fas fa-flask",
        },
        {
          text: "Tips & Tricks",
          to: "/tips-and-tricks",
          icon: "fas fa-lightbulb",
        },
        { text: "Resources", to: "/resources", icon: "fas fa-book" },
        { text: "FAQ", to: "/faq", icon: "fas fa-info-circle" },
      ],
    };
  },
  computed: {
    ...mapGetters("habits", ["storedHabits"]),
    ...mapGetters("currency", ["getCoins"]),
    ...mapGetters("levels", ["getLevel"]),

    // Mock progress values (replace with actual logic for progress calculation)
    coinProgress() {
      return (this.getCoins / 100) * 100; // Example percentage
    },
    streakProgress() {
      return (this.storedHabits / 30) * 100; // Example, adjust based on actual streak goal
    },
    levelProgress() {
      return (8 / 10) * 100; // Assuming level 8 out of 10, adjust based on actual level max
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Overlay styles */
.overlay {
  position: fixed;
  top: 66px;
  right: -100%;
  width: 100%;
  height: calc(100% - 66px);
  display: flex;
  justify-content: flex-end;
  z-index: 9000;
  font-family: "Baloo 2", sans-serif;
  transition: right 0.3s ease;
}

.overlay.active {
  right: 0;
}

/* Side Navigation Styles */
.side-navigation {
  width: 100%;
  background: #efefef;
  max-width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.1rem;
  border-left: 1px solid #ccc;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
}

/* Top Section with Status Items */
.status {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  margin-bottom: 10px;
}

.status-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  font-size: 20px;
}

.coin-icon {
  color: #ffcc00;
  margin-right: 5px;
}

.fire-icon {
  color: #f76809;
  margin-right: 5px;
}

.star-icon {
  color: #ffd700;
  margin-right: 5px;
}

/* Progress Bar Styles */
.progress-bar {
  width: 100%;
  height: 5px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 5px;
}

.progress-fill {
  height: 100%;
  background-color: #9a74d6;
  transition: width 0.3s ease;
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
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: capitalize;
  color: #333;
}

.link-icon {
  margin-right: 10px;
  color: #4a90e2;
}

/* Bottom Link (Settings) */
.bottom-link {
  border-top: 1px dashed #ccc;
  padding-top: 20px;
  text-align: left;
}

.bottom-link a {
  text-decoration: none;
  color: #333;
}
</style>
