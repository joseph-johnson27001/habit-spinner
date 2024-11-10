<template>
  <div>
    <nav class="top-nav">
      <div class="top-nav-content">
        <!-- Center: Heading -->
        <div class="center-section heading">
          <h2>Ember</h2>
        </div>

        <!-- Right side: Conditional Display -->
        <div class="side-section">
          <!-- <CurrencyDisplay
            v-if="isRewardsPage"
            :coins="coins"
            :streak="streak"
            :rewardPasses="rewardPasses"
          />
    
          <div v-else-if="isProfilePage" class="side-section">
            <router-link to="/settings">
              <i class="fas fa-cog settings-icon"></i>
            </router-link>
          </div>
          <div v-else-if="isGamePage" class="side-section">
            Available Plays: {{ storedHabits }}
          </div>

          <span v-else-if="isHabitsPage"
            >{{ habitsCompleted }} / {{ totalHabits }}</span
          >

          <span v-else> <i class="fas fa-star star-icon"></i> {{ level }}</span> -->

          <i class="fas fa-bars hamburger-bars"></i>
        </div>
      </div>
    </nav>
    <ToastBar />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ToastBar from "@/components/Toast/ToastBar.vue";

export default {
  name: "TopNav",
  components: {
    // CurrencyDisplay,
    ToastBar,
  },
  data() {
    return {
      streak: 5,
      rewardPasses: 1,
      level: 8,
    };
  },
  computed: {
    ...mapGetters("habits", [
      "totalHabits",
      "habitsCompleted",
      "storedHabits",
      "todayCompletedHabits",
    ]),
    isRewardsPage() {
      return this.$route.path === "/rewards";
    },
    isProfilePage() {
      return this.$route.path === "/profile";
    },
    isGamePage() {
      return this.$route.path === "/spinner";
    },
    isHabitsPage() {
      return this.$route.path === "/";
    },
  },
};
</script>

<style scoped>
.top-nav {
  width: 100%;
  background: transparent;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #3a66d0, #6aafe6);
  border-bottom: 1px solid #2f4a92;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  height: 65px;
  text-align: center;
}

.top-nav-content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  color: white;
}

h2 {
  font-family: "Baloo 2", sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
  text-align: center;
  margin: 0;
}

.side-section {
  display: flex;
  justify-content: flex-end;
  flex: 1;
  align-items: center;
}

.hamburger-bars {
  cursor: pointer;
  font-size: 18px;
}

@media only screen and (min-width: 1200px) {
  .top-nav-content {
    max-width: 1180px;
    width: 100%;
  }
}
</style>
