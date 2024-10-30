import moment from "moment"; // Make sure to import moment

const state = () => ({
  habits: [],
});

const getters = {
  allHabits: (state) => state.habits,
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
      completedWeek: 0,
      completedMonth: 0,
      completedYear: 0,
    });
  },
  COMPLETE_HABIT(state, index) {
    const habit = state.habits[index];

    // Update habit properties
    habit.completed = true;
    habit.totalCompletions += 1; // Increment total completions
    habit.completedWeek += 1; // Increment completed this week
    habit.completedMonth += 1; // Increment completed this month
    habit.completedYear += 1; // Increment completed this year

    // Update streak
    if (habit.streak === 0) {
      habit.firstCompletionDate = moment().format("MM-DD-YYYY"); // Set first completion date if first time
    }
    habit.streak += 1; // Increment current streak

    // Update latest completed date
    habit.latestCompletedDate = moment().format("MM-DD-YYYY"); // Set last completed date
  },
};

const actions = {
  addHabit({ commit }, habit) {
    commit("ADD_HABIT", habit);
  },
  completeHabit({ commit }, index) {
    commit("COMPLETE_HABIT", index);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
