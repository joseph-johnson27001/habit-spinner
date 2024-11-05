<template>
  <label
    :class="['reward-card', { redeemed: isRedeemed }]"
    @click="toggleRedeem"
  >
    <span class="reward-name">{{ rewardName }}</span>
    <span v-if="!isRedeemed" class="reward-cost">
      <img src="/images/coin.png" alt="Coins" class="coin-image" />
      <span class="coin-value"> {{ cost }}</span>
    </span>
    <span v-if="isRedeemed" class="checkmark">✓ Redeemed</span>
  </label>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RewardCard",
  props: {
    rewardName: {
      type: String,
      required: true,
    },
    redeemed: {
      type: Boolean,
      default: false,
    },
    cost: {
      type: Number,
      required: true,
    },
    rewardId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isRedeemed: this.redeemed,
      redeemSound: new Audio(require("@/assets/chime.mp3")),
    };
  },
  methods: {
    ...mapActions("rewards", ["redeemReward"]),
    toggleRedeem() {
      if (!this.isRedeemed) {
        this.isRedeemed = true;
        this.redeemReward(this.rewardId);
        this.playRedeemSound();
      }
    },
    playRedeemSound() {
      this.redeemSound.play();
    },
  },
  watch: {
    redeemed(newVal) {
      this.isRedeemed = newVal;
    },
  },
};
</script>

<style scoped>
.reward-card {
  position: relative;
  background: linear-gradient(to right, #ffb84d, #f79e44);
  padding: 40px 15px;
  margin: 10px 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 100;
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

.reward-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #4caf50;
  transition: left 0.2s linear;
  z-index: 0;
}

.reward-card span {
  position: relative;
  z-index: 1;
}

.checkmark {
  color: white;
  font-size: 15px;
}

.reward-card.redeemed::before {
  left: 0;
}

/* New styles for the coin icon and reward cost */
.reward-cost {
  display: flex;
  align-items: center;
}

.coin-image {
  width: 24px;
  height: auto;
  margin-right: 0px;
}

.coin-value {
  margin-left: 2px;
  font-size: 14px;
}
</style>
