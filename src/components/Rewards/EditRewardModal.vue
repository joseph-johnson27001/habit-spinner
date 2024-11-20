<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">×</button>
      <h2>Edit Reward</h2>
      <form @submit.prevent="handleEditReward">
        <div class="form-group">
          <input
            type="text"
            id="rewardName"
            v-model="editedReward.name"
            required
            class="reward-input"
            placeholder="Enter Reward Name"
          />
        </div>

        <!-- Select Reward Type -->
        <div class="form-group">
          <select
            id="rewardType"
            v-model="editedReward.type"
            required
            class="reward-select"
          >
            <option value="" disabled selected>Select Reward Type</option>
            <option v-for="(value, key) in rewardTypes" :key="key" :value="key">
              {{ value.name }}
            </option>
          </select>
        </div>

        <div class="modal-actions">
          <!-- Save Button -->
          <button type="submit" class="modal-button add-button">
            <i class="fa fa-check" aria-hidden="true"></i>
          </button>

          <!-- Delete Button -->
          <button
            type="button"
            class="delete-button"
            @click="handleDeleteReward"
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EditRewardModal",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    reward: {
      type: Object,
      required: true,
    },
  },
  data() {
    const editedReward = { ...this.reward };
    const rewardTypes = {
      instantGratification: { name: "Daily Reward", cost: 100 },
      weeklyWins: { name: "Weekly Reward", cost: 500 },
      monthlyMilestones: { name: "Monthly Reward", cost: 1500 },
      yearlyAchievements: { name: "Yearly Reward", cost: 5000 },
      ultimateAim: { name: "Ultimate Reward", cost: 10000 },
    };

    // Set the reward type based on the cost
    for (const [key, value] of Object.entries(rewardTypes)) {
      if (editedReward.cost === value.cost) {
        editedReward.type = key; // Assign the correct type based on cost
        break;
      }
    }

    return {
      editedReward,
      rewardTypes,
    };
  },

  methods: {
    ...mapActions("rewards", ["updateReward", "deleteReward"]),

    handleEditReward() {
      const selectedType = this.editedReward.type;
      if (this.rewardTypes[selectedType]) {
        this.editedReward.cost = this.rewardTypes[selectedType].cost;
      }

      this.updateReward(this.editedReward);
      this.closeModal();
    },

    handleDeleteReward() {
      this.deleteReward(this.editedReward.id);
      this.closeModal();
    },

    closeModal() {
      this.$emit("close");
    },
  },

  watch: {
    reward: {
      handler(newReward) {
        const editedReward = { ...newReward };
        for (const [key, value] of Object.entries(this.rewardTypes)) {
          if (editedReward.cost === value.cost) {
            editedReward.type = key;
            break;
          }
        }

        this.editedReward = editedReward;
      },
      deep: true,
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
  width: 95%;
  max-width: 500px;
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

.reward-input,
.reward-select {
  padding: 12px 15px;
  border: 1px solid #2f4a92;
  border-radius: 6px;
  font-size: 18px;
  outline: none;
  color: #2f4a92;
  font-family: "Baloo 2", sans-serif;
  font-weight: 600;
  background: linear-gradient(to right, #ffffff, #f4f6f8);
  width: 100%;
}

.reward-input::placeholder {
  color: #6a80a1;
  opacity: 1;
  font-weight: 400;
  font-size: 16px;
}

.modal-actions {
  display: flex;
  justify-content: space-around;
}

.add-button {
  font-size: 24px;
  cursor: pointer;
  background: transparent;
  color: #fff;
  border: none;
  font-weight: 100;
  border: 2px solid #fff;
  border-radius: 50%;
  padding: 10px;
  display: flex;
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

.delete-button {
  position: absolute;
  bottom: 5px;
  left: 5px;
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
}
</style>
