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
          bg: "#FF6F61", // Vibrant coral for motivation
        },
        {
          title: "Best Streak",
          value: this.stats.bestStreak,
          bg: "linear-gradient(135deg, #2ECC71, #27AE60)", // Gradient from bright green to rich green
        },
        {
          title: "Total Habits",
          value: this.stats.totalHabits,
          bg: "#F39C12", // Golden yellow for importance
        },
        {
          title: "Habits Completed This Week",
          value: this.stats.weeklyCompleted,
          bg: "#3498DB", // Calm blue for consistency
        },
        {
          title: "Habits Completed This Month",
          value: this.stats.monthlyCompleted,
          bg: "linear-gradient(135deg, #1ABC9C, #16A085)", // Gradient teal for progress
        },
        {
          title: "Habits Completed This Year",
          value: this.stats.yearlyCompleted,
          bg: "#E74C3C", // Strong red for major achievements
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
