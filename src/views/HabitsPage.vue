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
        :streak="habit.streak"
      />
    </div>
    <NewHabitCard @add="showAddHabitDialog" />
  </div>
</template>

<script>
import HabitCard from "@/components/Habits/HabitCard.vue";
import NewHabitCard from "@/components/Habits/NewHabitCard.vue";

export default {
  name: "HabitsPage",
  components: {
    HabitCard,
    NewHabitCard,
  },
  data() {
    return {
      habits: [
        { name: "Morning Exercise", completed: false, streak: 5 },
        { name: "Read 30 Minutes", completed: false, streak: 6 },
        { name: "Drink Water", completed: false, streak: 4 },
        { name: "Meditate for 10 Minutes", completed: false, streak: 5 },
        { name: "Write in Journal", completed: false, streak: 4 },
        { name: "Eat a Healthy Breakfast", completed: false, streak: 5 },
        { name: "Walk 10,000 Steps", completed: false, streak: 5 },
        { name: "Plan Tomorrow’s Tasks", completed: false, streak: 4 },
        { name: "Avoid Social Media for 1 Hour", completed: false, streak: 3 },
        { name: "Sleep for 8 Hours", completed: false, streak: 2 },
      ],
    };
  },
  methods: {
    updateHabit(index, { isCompleted, streakChange }) {
      this.habits[index].completed = isCompleted;

      this.habits[index].streak += streakChange;
    },
    showAddHabitDialog() {
      console.log("New Habit Card Clicked!");
    },
  },
};
</script>

<style scoped>
.habits-page {
  padding: 0px 10px 60px 10px;
}
</style>
