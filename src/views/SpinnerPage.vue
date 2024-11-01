<template>
  <div>
    <h1>Spinner Page</h1>
    <p>Spin to win here!</p>

    <!-- Display today's completed habits and stored habits -->
    <div>
      <p>Today's Completed Habits: {{ todayCompletedHabits }}</p>
      <p>Stored Completed Habits: {{ storedHabits }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SpinnerPage",
  computed: {
    ...mapGetters("habits", [
      "todayCompletedHabits",
      "storedHabits", // Changed to match the updated state
    ]),
  },
};
</script>

<style scoped>
/* Add styles for the spinner page */
</style>
