import { createStore } from "vuex";
import moment from "moment"; // Import moment for date handling

const loadHabitsFromLocalStorage = () => {
  const habits = localStorage.getItem("habits");
  return habits ? JSON.parse(habits) : [];
};

const saveHabitsToLocalStorage = (habits) => {
  localStorage.setItem("habits", JSON.stringify(habits));
};

export default createStore({
  state: {
    habits: loadHabitsFromLocalStorage(),
  },
  mutations: {
    ADD_HABIT(state, habit) {
      state.habits.push({
        ...habit,
        bestStreak: 0,
        completedThisWeek: 0,
        completedThisMonth: 0,
        completedThisYear: 0,
        totalCompletions: 0,
        firstCompletionDate: null,
        latestCompletedDate: null,
      });
      saveHabitsToLocalStorage(state.habits);
    },
    UPDATE_HABIT(state, { index, updatedHabit }) {
      state.habits.splice(index, 1, updatedHabit);
      saveHabitsToLocalStorage(state.habits);
    },
    REMOVE_HABIT(state, index) {
      state.habits.splice(index, 1);
      saveHabitsToLocalStorage(state.habits);
    },
  },
  actions: {
    addHabit({ commit }, habitName) {
      commit("ADD_HABIT", {
        name: habitName,
        completed: false,
        streak: 0,
        bestStreak: 0,
        completedThisWeek: 0,
        completedThisMonth: 0,
        completedThisYear: 0,
        totalCompletions: 0,
        firstCompletionDate: null,
        latestCompletedDate: null,
      });
    },
    updateHabit({ commit }, { index, updatedHabit }) {
      // const habit = state.habits[index];
      const isCompleted = updatedHabit.completed;
      const currentDate = moment();
      let streakChange = 0;

      // Check if the habit is completed
      if (isCompleted) {
        streakChange = 1;

        // Increment the streak and check for best streak
        updatedHabit.streak += streakChange;
        if (updatedHabit.streak > updatedHabit.bestStreak) {
          updatedHabit.bestStreak = updatedHabit.streak;
        }

        // Update completion counts
        updatedHabit.totalCompletions += 1;
        updatedHabit.latestCompletedDate = currentDate.format("YYYY-MM-DD");

        // Update the completed counts based on the last completion date
        const lastCompletedDate = moment(updatedHabit.latestCompletedDate);

        if (!updatedHabit.firstCompletionDate) {
          updatedHabit.firstCompletionDate = updatedHabit.latestCompletedDate;
        }

        // Check if the last completed date is in the same week, month, or year
        if (lastCompletedDate.isSame(currentDate, "week")) {
          updatedHabit.completedThisWeek += 1;
        }
        if (lastCompletedDate.isSame(currentDate, "month")) {
          updatedHabit.completedThisMonth += 1;
        }
        if (lastCompletedDate.isSame(currentDate, "year")) {
          updatedHabit.completedThisYear += 1;
        }
      } else {
        // If uncompleted, decrement the streak
        streakChange = -1;
        if (updatedHabit.streak > 0) {
          updatedHabit.streak += streakChange;
        }
      }

      // Emit the updated habit with the new values
      commit("UPDATE_HABIT", { index, updatedHabit });
    },
    removeHabit({ commit }, index) {
      commit("REMOVE_HABIT", index);
    },
  },
  getters: {
    habits: (state) => state.habits,
  },
});
