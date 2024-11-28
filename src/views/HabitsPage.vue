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
        :completedWeek="habit.completedWeek"
        :completedMonth="habit.completedMonth"
        :completedYear="habit.completedYear"
        :habitIndex="index"
        :showDetailsIndex="showDetailsIndex"
        @setShowDetailsIndex="setShowDetailsIndex"
      />
    </div>

    <!-- <NewHabitCard @add="showAddHabitModal" /> -->
    <!-- Keep this or remove it if unnecessary -->

    <!-- Floating Habit Button -->
    <FloatingHabitButton @click="showAddHabitModal" />

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
import { mapGetters, mapActions } from "vuex";
import HabitCard from "@/components/Habits/HabitCard.vue";
// import NewHabitCard from "@/components/Habits/NewHabitCard.vue";
import AddHabitModal from "@/components/Habits/AddHabitModal.vue";
import FloatingHabitButton from "@/components/Habits/FloatingHabitButton.vue";

export default {
  name: "HabitsPage",
  components: {
    HabitCard,
    // NewHabitCard,
    AddHabitModal,
    FloatingHabitButton,
  },
  data() {
    return {
      showModal: false,
      showDetailsIndex: null,
    };
  },
  computed: {
    ...mapGetters("habits", ["allHabits"]),
  },
  methods: {
    ...mapActions("habits", ["resetCompletedState"]),
    showAddHabitModal() {
      setTimeout(() => {
        this.showModal = true;
      }, 200);
    },
    addNewHabit(habitName) {
      this.$store.dispatch("habits/addHabit", habitName);
      this.showModal = false;
    },
    setShowDetailsIndex(index) {
      this.showDetailsIndex = this.showDetailsIndex === index ? null : index;
    },
  },
  mounted() {
    this.resetCompletedState();
  },
};
</script>

<style scoped>
.habits-page {
  padding: 0px 10px 60px 10px;
  position: relative; /* Ensures children are positioned relative to this container */
}
</style>
