<template>
  <nav class="top-nav">
    <div class="top-nav-content">
      <!-- Left side: Daily habits completed -->
      <div class="side-section habits-completed">
        <span>{{ habitsCompleted }} / {{ totalHabits }}</span>
      </div>

      <!-- Center: Heading -->
      <!-- <div class="center-section heading">
        <h2>Ember</h2>
      </div> -->

      <!-- Right side: Currency Display -->
      <div class="side-section currency-info">
        <CurrencyDisplay
          :coins="coins"
          :streak="streak"
          :rewardPasses="rewardPasses"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import CurrencyDisplay from "@/components/Navigation/CurrencyDisplay.vue"; // Importing the CurrencyDisplay component

export default {
  name: "TopNav",
  components: {
    CurrencyDisplay, // Registering the component
  },
  data() {
    return {
      totalHabits: 10,
      habitsCompleted: 0,
      streak: 5,
      coins: 120, // Example coins value
      rewardPasses: 1, // Example reward passes value
    };
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
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  color: white;
}

.habits-completed {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align left */
  flex: 1; /* Allow to take available space */
}

h2 {
  font-family: "Baloo 2", sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
  text-align: center;
  font-size: 2rem;
  margin: 0;
}

.currency-info {
  display: flex;
  justify-content: flex-end; /* Align right */
  flex: 1; /* Allow to take available space */
}
</style>
