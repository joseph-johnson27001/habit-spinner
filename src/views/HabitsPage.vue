<template>
  <div class="habits-page">
    <div class="habits-list">
      <HabitCard
        v-for="(habit, index) in allHabits"
        :key="index"
        :habitName="habit.name"
        :completed="habit.completed"
        :streak="habit.streak"
        :bestStreak="habit.bestStreak"
        :totalCompletions="habit.totalCompletions"
        :firstCompletionDate="habit.firstCompletionDate"
        :latestCompletedDate="habit.latestCompletedDate"
        :habitIndex="index"
        @update="updateHabit(index, $event)"
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
    ...mapGetters("habits", ["allHabits"]),
  },
  methods: {
    showAddHabitModal() {
      this.showModal = true;
    },
    addNewHabit(habitName) {
      this.$store.dispatch("habits/addHabit", habitName);
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
