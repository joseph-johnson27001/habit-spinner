<template>
  <label class="new-habit-card" @click="addHabit">
    <span>Add New Habit</span>
    <span class="habit-icon"><i class="fas fa-plus"></i></span>
  </label>
</template>

<script>
export default {
  name: "NewHabitCard",
  methods: {
    addHabit() {
      this.$emit("add");
    },
  },
};
</script>

<style scoped>
.new-habit-card {
  position: relative;
  background-color: #24b2da;
  border: 1px solid white;
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
  margin-bottom: 20px;
}

.new-habit-card i {
  margin-left: 8px;
}
</style>
