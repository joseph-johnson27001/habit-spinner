<template>
  <div class="habit-stats">
    <div class="stats-grid">
      <StatCard
        v-for="(stat, index) in statsArray"
        :key="index"
        :title="stat.title"
        :value="stat.value"
        :bg="stat.bg"
      />
    </div>
  </div>
</template>

<script>
import StatCard from "@/components/Profile/HabitStats/StatCard.vue";

export default {
  name: "HabitStats",
  components: {
    StatCard,
  },
  props: {
    stats: {
      type: Object,
      required: true,
    },
  },
  computed: {
    statsArray() {
      return [
        {
          title: "Habits Completed Today",
          value: this.stats.completedHabits,
          bg: "#4a90e2", // Calm blue
        },
        {
          title: "Current Streak",
          value: this.stats.streak,
          bg: "#f39c12", // Warm orange
        },
        {
          title: "Best Streak",
          value: this.stats.bestStreak,
          bg: "#27ae60", // Rich green
        },
        {
          title: "Total Habits",
          value: this.stats.totalHabits,
          bg: "#f1c40f", // Bright yellow
        },
        {
          title: "Habits Completed This Week",
          value: this.stats.weeklyCompleted,
          bg: "#2980b9", // Deeper blue
        },
        {
          title: "Habits Completed This Month",
          value: this.stats.monthlyCompleted,
          bg: "#16a085", // Teal
        },
        {
          title: "Habits Completed This Year",
          value: this.stats.yearlyCompleted,
          bg: "#e74c3c", // Soft red
        },
      ];
    },
  },
};
</script>

<style scoped>
.stats-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
