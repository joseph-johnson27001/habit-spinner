import moment from "moment";

const state = () => ({
  habits: [],
  todayCompletedHabits: 0,
  storedHabits: 0,
  lastTrackedDate: moment().format("DD-MM-YYYY"),
});

const getters = {
  allHabits: (state) => state.habits,
  totalHabits: (state) => state.habits.length,
  habitsCompleted: (state) =>
    state.habits.filter((habit) => habit.completed).length,
  todayCompletedHabits: (state) => state.todayCompletedHabits,
  storedHabits: (state) => state.storedHabits,
};

const mutations = {
  ADD_HABIT(state, habit) {
    state.habits.push({
      name: habit,
      completed: false,
      streak: 0,
      bestStreak: 0,
      totalCompletions: 0,
      firstCompletionDate: null,
      latestCompletedDate: null,
      previouslyCompletedDate: null,
      completedWeek: 0,
      completedMonth: 0,
      completedYear: 0,
      currentBestStreak: false,
    });
  },
  DELETE_HABIT(state, index) {
    const habit = state.habits[index];
    if (habit.completed) {
      state.todayCompletedHabits = Math.max(0, state.todayCompletedHabits - 1);
    }
    state.habits.splice(index, 1);
  },
  COMPLETE_HABIT(state, index) {
    const habit = state.habits[index];
    habit.previouslyCompletedDate = habit.latestCompletedDate;
    habit.completed = true;
    habit.totalCompletions += 1;
    habit.completedWeek += 1;
    habit.completedMonth += 1;
    habit.completedYear += 1;

    if (habit.bestStreak === 0) {
      habit.firstCompletionDate = moment().format("DD-MM-YYYY");
    }
    habit.streak += 1;

    if (habit.streak > habit.bestStreak) {
      habit.currentBestStreak = true;
      habit.bestStreak = habit.streak;
    }

    habit.latestCompletedDate = moment().format("DD-MM-YYYY");

    // Update today's completed habits count
    state.todayCompletedHabits += 1;
  },

  UNCOMPLETE_HABIT(state, index) {
    const habit = state.habits[index];
    habit.latestCompletedDate = habit.previouslyCompletedDate;
    habit.completed = false;
    habit.totalCompletions -= 1;
    habit.completedWeek -= 1;
    habit.completedMonth -= 1;
    habit.completedYear -= 1;

    habit.streak = Math.max(0, habit.streak - 1);
    if (habit.totalCompletions === 0) {
      habit.firstCompletionDate = null;
    }
    if (habit.currentBestStreak === true) {
      habit.bestStreak -= 1;
    }

    // Decrease today's completed habits count
    state.todayCompletedHabits = Math.max(0, state.todayCompletedHabits - 1);
  },

  ROLLOVER_COMPLETED_HABITS(state) {
    const today = moment().format("DD-MM-YYYY");

    // Check if the stored habits count needs to be updated
    if (state.lastTrackedDate !== today) {
      // Update stored habits count and reset today's completed habits
      state.storedHabits += state.todayCompletedHabits;
      state.todayCompletedHabits = 0;
      state.lastTrackedDate = today;
    }

    // Reset individual habit completion status and streaks if needed
    state.habits.forEach((habit) => {
      if (habit.latestCompletedDate) {
        const daysSinceLastCompletion = moment(today, "DD-MM-YYYY").diff(
          moment(habit.latestCompletedDate, "DD-MM-YYYY"),
          "days"
        );

        // Reset `completed` status for a new day
        if (daysSinceLastCompletion >= 1) {
          habit.completed = false;
        }

        // Reset the streak if it has been more than a day since the last completion
        if (daysSinceLastCompletion > 1) {
          habit.streak = 0;
          habit.currentBestStreak = false;
        }
      }
    });
  },

  DECREMENT_STORED_HABITS(state) {
    if (state.storedHabits > 0) {
      state.storedHabits -= 1;
    }
  },
};

const actions = {
  addHabit({ commit }, habit) {
    commit("ADD_HABIT", habit);
  },
  completeHabit({ commit, dispatch }, index) {
    commit("COMPLETE_HABIT", index);
    dispatch("checkDateForRollover");
  },
  uncompleteHabit({ commit, dispatch }, index) {
    commit("UNCOMPLETE_HABIT", index);
    dispatch("checkDateForRollover");
  },
  deleteHabitAction({ commit, dispatch }, index) {
    commit("DELETE_HABIT", index);
    dispatch("checkDateForRollover");
  },
  checkDateForRollover({ commit }) {
    commit("ROLLOVER_COMPLETED_HABITS");
  },
  resetCompletedState({ commit }) {
    commit("ROLLOVER_COMPLETED_HABITS");
  },
  decrementStoredHabits({ commit }) {
    commit("DECREMENT_STORED_HABITS");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
