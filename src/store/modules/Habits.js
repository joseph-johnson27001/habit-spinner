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
  DELETE_HABIT(state, index) {
    state.habits.splice(index, 1); // Remove the habit at the specified index
  },
  COMPLETE_HABIT(state, index) {
    const habit = state.habits[index];
    habit.completed = true;
    habit.totalCompletions += 1;
    habit.completedWeek += 1;
    habit.completedMonth += 1;
    habit.completedYear += 1;

    if (habit.streak === 0) {
      habit.firstCompletionDate = moment().format("MM-DD-YYYY"); // Set first completion date if first time
    }
    habit.streak += 1;

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
  deleteHabitAction({ commit }, index) {
    commit("DELETE_HABIT", index);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
