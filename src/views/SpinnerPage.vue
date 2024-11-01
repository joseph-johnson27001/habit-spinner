<template>
  <div>
    <h1>Spinner Page</h1>
    <p>Spin to win here!</p>

    <!-- Display today's completed habits and stored habits -->
    <div>
      <p>Plays For Tomorrow: {{ todayCompletedHabits }}</p>
      <p>Plays Available: {{ storedHabits }}</p>
    </div>

    <div>
      <!-- Button to decrement storedHabits -->
      <button @click="useStoredPlay" :disabled="storedHabits <= 0">
        Use a Play
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SpinnerPage",
  computed: {
    ...mapGetters("habits", ["todayCompletedHabits", "storedHabits"]),
  },
  methods: {
    useStoredPlay() {
      this.$store.dispatch("habits/decrementStoredHabits");
    },
  },
};
</script>

<style scoped>
/* Add styles for the spinner page */
</style>
