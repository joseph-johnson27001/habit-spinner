<template>
  <nav class="top-nav">
    <div class="top-nav-content">
      <!-- Center: Heading -->
      <div class="center-section heading">
        <h2>Ember</h2>
      </div>

      <!-- Right side: Conditional Display -->
      <div class="side-section">
        <CurrencyDisplay
          v-if="isRewardsPage"
          :coins="coins"
          :streak="streak"
          :rewardPasses="rewardPasses"
        />
        <!-- Streak Display -->
        <div v-else-if="isProfilePage">
          <i class="fa fa-fire fire-icon"></i>
          <span class="currency-value">{{ streak }}</span>
        </div>
        <span v-else>{{ habitsCompleted }} / {{ totalHabits }}</span>
      </div>
    </div>
  </nav>
</template>

<script>
import CurrencyDisplay from "@/components/Navigation/CurrencyDisplay.vue";

export default {
  name: "TopNav",
  components: {
    CurrencyDisplay,
  },
  data() {
    return {
      totalHabits: 10,
      habitsCompleted: 0,
      streak: 5,
      coins: 120,
      rewardPasses: 1,
    };
  },
  computed: {
    isRewardsPage() {
      return this.$route.path === "/rewards";
    },
    isProfilePage() {
      return this.$route.path === "/profile";
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
  background: linear-gradient(135deg, #3a66d0, #6aafe6);
  border-bottom: 1px solid #2f4a92;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  height: 60px;
  text-align: center;
}

.top-nav-content {
  max-width: 1180px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  color: white;
}

.habits-completed {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
}

h2 {
  font-family: "Baloo 2", sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
  text-align: center;
  font-size: 2rem;
  margin: 0;
}

.side-section {
  display: flex;
  justify-content: flex-end;
  flex: 1;
}

.fire-icon {
  color: #f76809; /* Matches fire color */
  margin-right: 5px;
}
</style>
