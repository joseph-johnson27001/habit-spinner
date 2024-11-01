<template>
  <div class="rewards-page">
    <!-- Rewards List -->
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

    <!-- New Reward Card -->
    <NewRewardCard @add="showAddRewardDialog" />

    <!-- Add New Reward Modal -->
    <AddNewRewardModal
      :isVisible="isModalVisible"
      @close="isModalVisible = false"
    />
  </div>
</template>

<script>
import RewardCard from "@/components/Rewards/RewardCard.vue";
import NewRewardCard from "@/components/Rewards/NewRewardCard.vue";
import AddNewRewardModal from "@/components/Rewards/AddNewRewardModal.vue";
import { mapGetters } from "vuex";

export default {
  name: "RewardsPage",
  components: {
    RewardCard,
    NewRewardCard,
    AddNewRewardModal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  computed: {
    ...mapGetters("rewards", ["allRewards"]),
    rewards() {
      return this.allRewards;
    },
  },
  methods: {
    redeemReward(index) {
      this.REDEEM_REWARD(index);
    },
    showAddRewardDialog() {
      this.isModalVisible = true;
    },
  },
};
</script>

<style scoped>
.rewards-page {
  padding: 0px 10px 60px 10px;
}
</style>
