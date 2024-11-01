<template>
  <div class="rewards-page">
    <!-- Rewards List -->
    <div class="rewards-list">
      <RewardCard
        v-for="(reward, index) in rewards"
        :key="index"
        :rewardName="reward.name"
        :redeemed="reward.redeemed"
        :cost="reward.cost"
        @redeem="redeemReward(index)"
      />
    </div>

    <!-- New Reward Card -->
    <NewRewardCard @add="showAddRewardDialog" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import RewardCard from "@/components/Rewards/RewardCard.vue";
import NewRewardCard from "@/components/Rewards/NewRewardCard.vue";

export default {
  name: "RewardsPage",
  components: {
    RewardCard,
    NewRewardCard,
  },
  computed: {
    ...mapGetters("rewards", ["allRewards"]),
    rewards() {
      return this.allRewards;
    },
  },
  methods: {
    ...mapActions("rewards", ["redeemReward", "addReward"]),
    redeemReward(index) {
      this.redeemReward(index); // Dispatch Vuex action
    },
    showAddRewardDialog() {
      const newReward = { name: "Custom Reward", redeemed: false, cost: 40 };
      this.addReward(newReward); // Dispatch Vuex action to add new reward
    },
  },
};
</script>

<style scoped>
.rewards-page {
  padding: 0px 10px 60px 10px;
}
</style>
