<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">×</button>
      <h2>Add New Reward</h2>
      <form @submit.prevent="handleAddReward">
        <div class="form-group">
          <input
            type="text"
            id="rewardName"
            v-model="newReward.name"
            required
            class="reward-input"
            placeholder="Enter Reward Name"
          />
        </div>

        <div class="form-group">
          <input
            type="number"
            id="rewardCost"
            v-model="newReward.cost"
            min="1"
            required
            class="reward-input"
            placeholder="Enter Reward Cost"
          />
        </div>

        <div class="modal-actions">
          <button type="submit" class="modal-button add-button">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddNewRewardModal",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      newReward: {
        name: "",
        cost: null,
      },
    };
  },
  methods: {
    ...mapActions("rewards", ["addReward"]),
    async handleAddReward() {
      const reward = {
        name: this.newReward.name,
        cost: Number(this.newReward.cost),
        redeemed: false,
      };
      await this.addReward(reward);
      this.closeModal();
    },
    closeModal() {
      this.$emit("close");
      this.newReward.name = "";
      this.newReward.cost = null;
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  font-family: "Baloo 2", sans-serif;
}

.modal-content {
  margin-bottom: 50vh;
  position: relative;
  background: linear-gradient(to right, #4a90e2, #9a74d6);
  padding: 20px 30px 30px 30px;
  border-radius: 12px;
  width: 80%;
  max-width: 300px;
  max-height: 300px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  color: white;
  text-align: left;
}

h2 {
  margin: 10px 0px 5px 0px;
  font-weight: 100;
  font-family: "Baloo 2", sans-serif;
}

.form-group {
  margin-bottom: 20px;
}

.reward-input {
  width: 90%;
  padding: 10px 15px;
  border: 1px solid #2f4a92;
  border-radius: 6px;
  font-size: 18px;
  outline: none;
  color: #2f4a92;
  font-family: "Baloo 2", sans-serif;
  font-weight: 600;
  background: linear-gradient(to right, #ffffff, #f4f6f8);
}

.reward-input::placeholder {
  color: #6a80a1;
  opacity: 1;
  font-weight: 400;
  font-size: 16px;
}

.modal-actions {
  display: flex;
  justify-content: center;
}

.add-button {
  font-size: 24px;
  margin: -5px -5px -10px 0px;
  cursor: pointer;
  background: transparent;
  color: #fff;
  border: none;
  font-weight: 100;
  border: 2px solid #fff;
  border-radius: 50%;
  padding: 6px 10px;
}

.close-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
}
</style>
