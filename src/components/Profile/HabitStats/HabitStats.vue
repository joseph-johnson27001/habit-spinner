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
import { mapGetters } from "vuex";

export default {
  name: "HabitStats",
  components: {
    StatCard,
  },
  computed: {
    // Map Vuex getters to access habit stats from the store
    ...mapGetters("habits", [
      "todayCompletedHabits",
      "totalHabits",
      "totalCompletedHabits",
      "habitsCompleted",
      "bestStreak",
      "weeklyCompleted",
      "monthlyCompleted",
      "yearlyCompleted",
    ]),
    // Define an array of stats for rendering StatCards
    statsArray() {
      return [
        {
          title: "Habits Completed Today",
          value: this.todayCompletedHabits,
          bg: "#4a90e2", // Calm blue
        },
        {
          title: "Best Streak",
          value: this.bestStreak,
          bg: "#FF6F61", // Vibrant coral for motivation
        },
        {
          title: "Best Current Streak",
          value: this.habitsCompleted,
          bg: "linear-gradient(135deg, #2ECC71, #27AE60)", // Gradient from bright green to rich green
        },
        {
          title: "Total Completed Habits",
          value: this.totalCompletedHabits,
          bg: "#F39C12", // Golden yellow for importance
        },
        {
          title: "Habits Completed This Week",
          value: this.weeklyCompleted,
          bg: "#3498DB", // Calm blue for consistency
        },
        {
          title: "Habits Completed This Month",
          value: this.monthlyCompleted,
          bg: "linear-gradient(135deg, #1ABC9C, #16A085)", // Gradient teal for progress
        },
        {
          title: "Habits Completed This Year",
          value: this.yearlyCompleted,
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
