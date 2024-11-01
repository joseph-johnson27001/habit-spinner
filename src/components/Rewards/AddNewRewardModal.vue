<template>
  <div class="modal-overlay" v-if="isVisible">
    <div class="modal-content">
      <h2>Add New Reward</h2>
      <form @submit.prevent="handleAddReward">
        <div class="form-group">
          <label for="rewardName">Reward Name:</label>
          <input
            type="text"
            id="rewardName"
            v-model="newReward.name"
            required
          />
        </div>

        <div class="form-group">
          <label for="rewardCost">Cost:</label>
          <input
            type="number"
            id="rewardCost"
            v-model="newReward.cost"
            min="1"
            required
          />
        </div>

        <div class="form-group">
          <button type="submit">Add Reward</button>
          <button type="button" @click="closeModal">Cancel</button>
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
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  width: 400px;
}

h2 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-right: 10px;
}
</style>
