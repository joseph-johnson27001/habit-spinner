<template>
  <div class="game-page">
    <FlameIntensityBar :intensity="flameIntensityPercentage" />
    <ClickableFlame @flame-click="handleFlameClick" />

    <!-- Coin Value Notification -->
    <div v-if="coinNotificationVisible" class="coin-notification">
      +{{ coinNotificationValue }} Coins
    </div>

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
  data() {
    return {
      coinNotificationVisible: false,
      coinNotificationValue: 0,
    };
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
    ...mapActions("currency", ["increaseCoins"]),

    handleFlameClick(coinValue) {
      if (this.storedHabits > 0) {
        // Decrease fuel and increase flame intensity
        this.decrementStoredHabits();
        this.increaseFlameIntensity();

        // Increase the coin balance with the randomly generated coin value
        this.increaseCoins(coinValue);

        // Show coin notification
        this.coinNotificationValue = coinValue;
        this.coinNotificationVisible = true;

        // Hide the coin notification after 1 second
        setTimeout(() => {
          this.coinNotificationVisible = false;
        }, 1000);
      } else {
        // NEED TO ADD IN CONDITIONALS HERE
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
  gap: 5px;
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

/* Coin notification styling */
.coin-notification {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 128, 0, 0.8);
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  animation: fadeInOut 1s ease-in-out;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
