<template>
  <div class="currency-display">
    <!-- Reward Passes Display -->
    <div class="currency-item">
      <i class="fa fa-ticket ticket-icon"></i>
      <span class="currency-value">{{ rewardPasses }}</span>
    </div>
    <!-- Streak Display -->
    <div class="currency-item">
      <i class="fa fa-fire fire-icon"></i>
      <span class="currency-value">{{ streak }}</span>
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
  gap: 20px;
  padding-top: 10px;
  color: #333;
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
  font-size: 1.4rem;
  margin-left: 8px;
  color: #333;
}

/* Icon styling */
.coin-icon {
  font-size: 1.4rem;
  color: #ffd700; /* Gold color for coins */
}

.fire-icon {
  font-size: 1.4rem;
  color: #f76809; /* Matches fire color */
}

.ticket-icon {
  font-size: 1.4rem;
  color: #9e9e9e; /* Gray color for reward passes */
}
</style>
