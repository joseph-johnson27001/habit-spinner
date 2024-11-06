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
            Add Reward
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
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: linear-gradient(to right, #4a90e2, #9a74d6);
  padding: 20px 30px;
  border-radius: 12px;
  width: 80%;
  max-width: 500px;
  max-height: 350px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  color: white;
}

h2 {
  margin: 0 0 20px;
  font-weight: 100;
  font-family: "Baloo 2", sans-serif;
}

.form-group {
  margin-bottom: 20px;
}

.reward-input {
  width: 90%;
  padding: 10px 20px;
  border: 1px solid #4a90e2;
  border-radius: 8px;
  font-size: 18px;
  outline: none;
  background: linear-gradient(to right, #ffffff, #f4f6f8);
  color: #2f4a92;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, border 0.3s ease;
  font-family: "Baloo 2", sans-serif;
  font-weight: 600;
}

.reward-input::placeholder {
  color: #6a80a1;
  opacity: 1;
  font-weight: 400;
}

.modal-actions {
  display: flex;
  justify-content: center;
}

.modal-button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: inherit;
}

.add-button {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 15px 15px;
  border-radius: 10px;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

.cancel-button {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 15px 15px;
  border-radius: 10px;
  transition: transform 0.2s ease, background-color 0.3s ease;
  margin-left: 10px;
}

.cancel-button:hover {
  transform: scale(1.03); /* Slight size increase on hover */
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #ccc;
}
</style>
