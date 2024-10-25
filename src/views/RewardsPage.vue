<!-- RewardsPage.vue -->
<template>
  <div class="rewards-page">
    <div class="rewards-list">
      <RewardCard
        v-for="(reward, index) in rewards"
        :key="index"
        :rewardName="reward.name"
        :redeemed="reward.redeemed"
        @redeem="redeemReward(index)"
      />
    </div>
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
        { name: "Spa Day", redeemed: false },
        { name: "Movie Ticket", redeemed: false },
        { name: "Dinner at a Restaurant", redeemed: false },
        { name: "New Book", redeemed: false },
      ],
    };
  },
  methods: {
    redeemReward(index) {
      this.rewards[index].redeemed = true;
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
</style>
