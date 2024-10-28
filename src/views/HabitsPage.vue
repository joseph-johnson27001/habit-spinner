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
    <NewHabitCard @add="showAddHabitModal" />

    <!-- AddHabitModal component -->
    <AddHabitModal
      v-if="showModal"
      :show="showModal"
      @add-habit="addNewHabit"
      @close="showModal = false"
    />
  </div>
</template>

<script>
import HabitCard from "@/components/Habits/HabitCard.vue";
import NewHabitCard from "@/components/Habits/NewHabitCard.vue";
import AddHabitModal from "@/components/Habits/AddHabitModal.vue";

export default {
  name: "HabitsPage",
  components: {
    HabitCard,
    NewHabitCard,
    AddHabitModal,
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
      showModal: false,
    };
  },
  methods: {
    updateHabit(index, { isCompleted, streakChange }) {
      this.habits[index].completed = isCompleted;
      this.habits[index].streak += streakChange;
    },
    showAddHabitModal() {
      this.showModal = true;
    },
    addNewHabit(habitName) {
      this.habits.push({
        name: habitName,
        completed: false,
        streak: 0,
      });
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.habits-page {
  padding: 0px 10px 60px 10px;
}
</style>
