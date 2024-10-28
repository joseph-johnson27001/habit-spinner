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
import { mapGetters } from "vuex"; // Import mapGetters
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
      showModal: false,
    };
  },
  computed: {
    ...mapGetters(["habits"]), // Map habits from the Vuex store
  },
  methods: {
    updateHabit(index, { isCompleted, streakChange }) {
      this.$store.dispatch("updateHabit", { index, isCompleted, streakChange });
    },
    showAddHabitModal() {
      this.showModal = true;
    },
    addNewHabit(habitName) {
      this.$store.dispatch("addHabit", habitName);
      this.showModal = false; // Close the modal after adding the habit
    },
  },
};
</script>

<style scoped>
.habits-page {
  padding: 0px 10px 60px 10px;
}
</style>
