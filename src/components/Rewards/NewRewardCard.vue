<!-- NewRewardCard.vue -->
<template>
  <label class="new-reward-card" @click="addReward">
    <span>Add New Reward</span>
    <span class="reward-icon"><i class="fas fa-plus"></i></span>
  </label>
</template>

<script>
export default {
  name: "NewRewardCard",
  methods: {
    addReward() {
      this.$emit("add");
    },
  },
};
</script>

<style scoped>
.new-reward-card {
  position: relative;
  background: linear-gradient(to right, #5ec1ff, #1f9eff);
  padding: 40px 15px;
  margin: 10px 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 100;
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
  justify-content: center;
  transition: color 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
}

.new-reward-card i {
  margin-left: 8px;
}
</style>
