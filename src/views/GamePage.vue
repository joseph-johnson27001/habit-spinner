<template>
  <div class="game-page">
    <!-- Flame Intensity Bar -->
    <FlameIntensityBar :intensity="intensityLevel" />

    <!-- Clickable Flame in the center of the page -->
    <ClickableFlame @flame-click="handleFlameClick" />

    <!-- Display Remaining Plays (Fuel) -->
    <div class="fuel-counter">Fuel: {{ storedHabits }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FlameIntensityBar from "@/components/Game/FlameIntensityBar.vue";
import ClickableFlame from "@/components/Game/ClickableFlame.vue";

export default {
  components: {
    FlameIntensityBar,
    ClickableFlame,
  },
  computed: {
    ...mapState("habits", ["storedHabits"]), // Access storedHabits from the Vuex store
    // intensityLevel() {
    // EACH TIME THE USER PLAYS IT CAN ADD A LEVEL OF INTENSITY
    // },
  },
  methods: {
    ...mapActions("habits", ["decrementStoredHabits"]),

    handleFlameClick() {
      if (this.storedHabits > 0) {
        // Decrease storedHabits in the Vuex store
        this.decrementStoredHabits();
      } else {
        // Optional: Notify the user that they’re out of fuel for today
        alert("You're out of fuel for today! Come back tomorrow.");
      }
    },
  },
};
</script>

<style scoped>
.game-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.fuel-counter {
  margin-top: 20px;
  font-size: 18px;
  color: #ff7e33;
}
</style>
