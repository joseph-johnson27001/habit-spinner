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
import RewardCard from "@/components/Rewards/RewardCard.vue";
import NewRewardCard from "@/components/Rewards/NewRewardCard.vue";

export default {
  name: "RewardsPage",
  components: {
    RewardCard,
    NewRewardCard,
  },
  data() {
    return {
      rewards: [
        { name: "Spa Day", redeemed: false, cost: 50 },
        { name: "Movie Ticket", redeemed: false, cost: 20 },
        { name: "Dinner at a Restaurant", redeemed: false, cost: 80 },
        { name: "New Book", redeemed: false, cost: 30 },
      ],
    };
  },
  methods: {
    redeemReward(index) {
      this.rewards[index].redeemed = true;
      // Optional: Update logic to deduct coins or handle other reward redemption logic
    },
    showAddRewardDialog() {
      console.log("Add new reward dialog triggered!");
    },
  },
};
</script>

<style scoped>
.rewards-page {
  padding: 0px 10px 60px 10px;
}

.rewards-list {
  margin-top: 20px;
}
</style>
