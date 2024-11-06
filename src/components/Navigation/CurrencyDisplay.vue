<template>
  <div class="currency-display">
    <!-- Coins Display -->
    <div class="currency-item">
      <img src="/images/coin.png" alt="Coins" class="coin-image" />
      <!-- Use the image here -->
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

.currency-item {
  display: flex;
  align-items: center;
}

.coin-image {
  width: 24px;
}

.currency-value {
  margin-left: 2px;
  font-size: 14px;
}
</style>
