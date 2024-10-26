<template>
  <div class="currency-display">
    <!-- Reward Passes Display -->
    <div class="currency-item">
      <i class="fa fa-ticket ticket-icon"></i>
      <span class="currency-value">{{ rewardPasses }}</span>
    </div>

    <!-- Coins Display -->
    <div class="currency-item">
      <i class="fa fa-coins coin-icon"></i>
      <span class="currency-value">{{ coins }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurrencyDisplay",
  props: {
    coins: { type: Number, default: 0 },
    streak: { type: Number, default: 0 },
    rewardPasses: { type: Number, default: 0 },
  },
};
</script>

<style scoped>
.currency-display {
  display: flex;
  gap: 10px; /* Reduced gap between items */
  padding-top: 5px; /* Reduced padding */
  color: white;
  border-radius: 10px;
  justify-content: space-around;
  font-weight: bold;
}

/* Styling for each currency item */
.currency-item {
  display: flex;
  align-items: center;
}

.currency-value {
  font-size: 0.9rem;
  padding-left: 5px; /* Reduced margin */
}

/* Icon styling */
.coin-icon {
  color: #ffd700;
}

.ticket-icon {
  font-size: 1.2rem;
  color: orange;
}
</style>
