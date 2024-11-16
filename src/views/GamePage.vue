<template>
  <div class="game-page">
    <FlameIntensityBar :intensity="flameIntensityPercentage" />
    <ClickableFlame @flame-click="handleFlameClick" />

    <!-- Footer section containing fuel and coins counters -->
    <div class="game-footer">
      <div class="fuel-counter">
        <i class="fas fa-fire"></i> {{ storedHabits }}
      </div>
      <div class="coins-counter"><i class="fas fa-coins"></i> {{ coins }}</div>
    </div>
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
    ...mapState("habits", ["storedHabits", "flameIntensity"]),
    ...mapState("currency", ["coins"]),
    flameIntensityPercentage() {
      return (this.flameIntensity / 500) * 100;
    },
  },
  methods: {
    ...mapActions("habits", [
      "decrementStoredHabits",
      "increaseFlameIntensity",
    ]),
    ...mapActions("currency", ["increaseCoins"]), // Ensure the action for increasing coins is included

    handleFlameClick(coinValue) {
      if (this.storedHabits > 0) {
        // Decrease fuel and increase flame intensity as before
        this.decrementStoredHabits();
        this.increaseFlameIntensity();

        // Increase the coin balance with the randomly generated coin value
        this.increaseCoins(coinValue); // This calls the Vuex action to update coins
      } else {
        // Inform the user they're out of fuel if necessary
        console.log("Out of fuel!");
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
  padding: 0 20px;
  height: 100%;
}

.game-footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0px 20px;
  background-color: #f5f4f0;
  margin-top: auto;
}

.fuel-counter,
.coins-counter {
  display: flex;
  align-items: center;
  gap: 5px; /* Space between icon and text */
  font-size: 18px;
}

.fa-fire {
  color: #ff7e33;
}

.fa-coins {
  color: #ffd700;
}

.fuel-counter i,
.coins-counter i {
  font-size: 20px;
}
</style>
