<template>
  <div class="game-page">
    <FlameIntensityBar :intensity="flameIntensityPercentage" />
    <ClickableFlame @flame-click="handleFlameClick" />
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
    ...mapState("habits", ["storedHabits", "flameIntensity"]),
    flameIntensityPercentage() {
      return (this.flameIntensity / 500) * 100;
    },
  },
  methods: {
    ...mapActions("habits", [
      "decrementStoredHabits",
      "increaseFlameIntensity",
    ]),

    handleFlameClick() {
      if (this.storedHabits > 0) {
        this.decrementStoredHabits();
        this.increaseFlameIntensity();
      } else {
        //  PUT IN SOMETHING HERE TO TELL THE USER THEY'RE OUT OF FUEL
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
  padding: 0px 20px;
  font-family: Arial, sans-serif;
}

.fuel-counter {
  margin-top: 20px;
  font-size: 18px;
  color: #ff7e33;
}
</style>
