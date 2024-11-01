<template>
  <div class="currency-display">
    <!-- Reward Passes Display -->
    <div class="currency-item">
      <i class="fa fa-ticket ticket-icon"></i>
      <span class="currency-value">{{ getTickets }}</span>
    </div>

    <!-- Coins Display -->
    <div class="currency-item">
      <i class="fa fa-coins coin-icon"></i>
      <span class="currency-value">{{ getCoins }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CurrencyDisplay",
  computed: {
    ...mapGetters("currency", ["getCoins", "getTickets"]),
  },
};
</script>

<style scoped>
.currency-display {
  display: flex;
  gap: 10px;
  color: white;
  border-radius: 10px;
  justify-content: space-around;
}

/* Styling for each currency item */
.currency-item {
  display: flex;
  align-items: center;
}

.currency-value {
  padding-left: 5px; /* Reduced margin */
}

/* Icon styling */
.coin-icon {
  color: #ffd700;
}

.ticket-icon {
  font-size: 1.2rem;
  color: #ffaa33;
}
</style>
