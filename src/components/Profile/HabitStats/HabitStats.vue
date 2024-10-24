<template>
  <div class="habit-stats">
    <div class="stats-grid">
      <StatCard
        v-for="(stat, index) in statsArray"
        :key="index"
        :title="stat.title"
        :value="stat.value"
        :bgColor="stat.bgColor"
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
          bgColor: "#24b2da",
        },
        {
          title: "Current Streak",
          value: this.stats.streak,
          bgColor: "#f39c12",
        },
        {
          title: "Best Streak",
          value: this.stats.bestStreak,
          bgColor: "#e74c3c",
        },
        {
          title: "Total Habits",
          value: this.stats.totalHabits,
          bgColor: "#8e44ad",
        },
        {
          title: "Habits Completed This Week",
          value: this.stats.weeklyCompleted,
          bgColor: "#3498db",
        },
        {
          title: "Habits Completed This Month",
          value: this.stats.monthlyCompleted,
          bgColor: "#2ecc71",
        },
        {
          title: "Habits Completed This Year",
          value: this.stats.yearlyCompleted,
          bgColor: "#e67e22",
        },
      ];
    },
  },
};
</script>

<style scoped>
.habit-stats {
  padding-top: 10px;
}

.stats-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
