<template>
  <div class="rewards-page">
    <!-- Rewards List -->
    <div class="rewards-list">
      <reward-card
        v-for="reward in rewards"
        :key="reward.id"
        :rewardName="reward.name"
        :redeemed="reward.redeemed"
        :cost="reward.cost"
        :rewardId="reward.id"
        @edit-reward="showEditModal"
      />
    </div>

    <!-- Floating Button -->
    <FloatingRewardButton @click="showAddRewardDialog" />

    <!-- New Reward Card -->
    <!-- <NewRewardCard @add="showAddRewardDialog" /> -->

    <!-- Edit Reward Modal -->
    <EditRewardModal
      :isVisible="isEditModalVisible"
      :reward="rewardToEdit"
      @close="closeEditModal"
    />

    <!-- Add New Reward Modal -->
    <AddNewRewardModal
      :isVisible="isModalVisible"
      @close="closeAddRewardModal"
    />
  </div>
</template>

<script>
import RewardCard from "@/components/Rewards/RewardCard.vue";
// import NewRewardCard from "@/components/Rewards/NewRewardCard.vue";
import AddNewRewardModal from "@/components/Rewards/AddNewRewardModal.vue";
import EditRewardModal from "@/components/Rewards/EditRewardModal.vue";
import { mapGetters, mapActions } from "vuex";
import FloatingRewardButton from "@/components/Rewards/FloatingRewardButton.vue";

export default {
  name: "RewardsPage",
  components: {
    RewardCard,
    // NewRewardCard,
    AddNewRewardModal,
    EditRewardModal,
    FloatingRewardButton,
  },
  data() {
    return {
      isModalVisible: false,
      isEditModalVisible: false,
      rewardToEdit: null,
    };
  },
  computed: {
    ...mapGetters("rewards", ["allRewards"]),
    rewards() {
      return this.allRewards;
    },
  },
  methods: {
    ...mapActions("rewards", ["updateReward", "deleteReward"]),

    showAddRewardDialog() {
      setTimeout(() => {
        this.isModalVisible = true;
      }, 200);
    },

    showEditModal(rewardData) {
      this.rewardToEdit = rewardData;
      this.isEditModalVisible = true;
    },

    closeEditModal() {
      this.isEditModalVisible = false;
      this.rewardToEdit = null;
    },

    closeAddRewardModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.rewards-page {
  padding: 0px 10px 115px 10px;
}
</style>
