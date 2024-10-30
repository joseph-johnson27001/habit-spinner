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
import { mapGetters, mapActions } from "vuex";
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
      showDetailsIndex: null, // Track the index of the habit with open details
    };
  },
  computed: {
    ...mapGetters("habits", ["allHabits"]),
  },
  methods: {
    ...mapActions("habits", ["resetCompletedState"]),
    showAddHabitModal() {
      this.showModal = true;
    },
    addNewHabit(habitName) {
      this.$store.dispatch("habits/addHabit", habitName);
      this.showModal = false;
    },
    setShowDetailsIndex(index) {
      // Toggle details visibility for the clicked habit card
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
}
</style>
