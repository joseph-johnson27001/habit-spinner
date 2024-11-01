<template>
  <div class="rewards-page">
    <div class="rewards-list">
      <RewardCard
        v-for="(reward, index) in rewards"
        :key="reward.rewardId"
        :rewardId="index"
        :rewardName="reward.name"
        :redeemed="reward.redeemed"
        :cost="reward.cost"
        @redeem="redeemReward(index)"
      />
    </div>
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
    ...mapActions("rewards", ["redeemReward"]),
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
