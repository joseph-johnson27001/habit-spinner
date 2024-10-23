<!-- HabitsPage.vue -->
<template>
  <div class="habits-page">
    <div class="habits-list">
      <HabitCard
        v-for="(habit, index) in habits"
        :key="index"
        :habitName="habit.name"
        :completed="habit.completed"
        @update="updateHabit(index, $event)"
      />
    </div>
  </div>
</template>

<script>
import HabitCard from "@/components/HabitCard.vue";

export default {
  name: "HabitsPage",
  components: {
    HabitCard,
  },
  data() {
    return {
      habits: [
        { name: "Morning Exercise", completed: false },
        { name: "Read 30 Minutes", completed: false },
        { name: "Drink Water", completed: false },
        { name: "Meditate for 10 Minutes", completed: false },
        { name: "Write in Journal", completed: false },
        { name: "Eat a Healthy Breakfast", completed: false },
        { name: "Walk 10,000 Steps", completed: false },
        { name: "Plan Tomorrow’s Tasks", completed: false },
        { name: "Avoid Social Media for 1 Hour", completed: false },
        { name: "Sleep for 8 Hours", completed: false },
      ],
    };
  },
  methods: {
    updateHabit(index, isCompleted) {
      this.habits[index].completed = isCompleted;
    },
  },
};
</script>

<style scoped>
.habits-page {
  padding: 0 20px;
}

.habits-list {
  max-height: 80vh;
  overflow-y: auto;
}
</style>
