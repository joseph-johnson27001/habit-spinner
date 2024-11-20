<template>
  <div :class="['reward-card', { redeemed: isRedeemed }]" @click="toggleRedeem">
    <span class="reward-name">{{ rewardName }}</span>

    <!-- Edit button -->
    <div class="edit-section" @click.stop="openEditModal">
      <i class="fa-solid fa-pencil"></i>
    </div>

    <!-- Price area / Reedeemed area -->
    <div class="reward-cost">
      <span v-if="!isRedeemed">
        <i class="fas fa-coins coin-icon"></i>
        <span class="coin-value"> {{ cost }}</span>
      </span>
      <span v-if="isRedeemed" class="checkmark">✓ Redeemed</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters("currency", ["getCoins"]),
    canAfford() {
      return this.getCoins >= this.cost;
    },
  },
  methods: {
    ...mapActions("rewards", ["redeemReward"]),

    openEditModal() {
      this.$emit("edit-reward", {
        id: this.rewardId,
        name: this.rewardName,
        redeemed: this.redeemed,
        cost: this.cost,
      });
    },

    toggleRedeem() {
      if (!this.canAfford) {
        return;
      }
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

.reward-cost {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.edit-section {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
}

.edit-section i {
  font-size: 12px;
}

.checkmark {
  color: white;
  font-size: 15px;
}

.reward-card.redeemed::before {
  left: 0;
}

.reward-cost {
  display: flex;
  align-items: center;
}

.coin-icon {
  color: #ffcc00;
  margin-right: 3px;
}

.coin-value {
  margin-top: 4px;
  margin-left: 2px;
  font-size: 14px;
}
</style>
