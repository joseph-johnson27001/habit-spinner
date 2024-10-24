<template>
  <div class="habit-stats">
    <h3>Habit Statistics</h3>
    <ul>
      <li>Total Habits: {{ stats.totalHabits }}</li>
      <li>Completed Habits: {{ stats.completedHabits }}</li>
      <li>Current Streak: {{ stats.streak }} days</li>
      <li>Win Percentage: {{ stats.winPercentage }}%</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HabitStats",
  props: {
    stats: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.habit-stats {
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
h3 {
  margin-bottom: 10px;
}
</style>
