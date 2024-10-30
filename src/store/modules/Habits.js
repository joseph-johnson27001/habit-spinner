// store/modules/Habits.js
import moment from "moment";

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
      firstCompletionDate: moment().format("MM-DD-YYYY"), // Set today's date in MM-DD-YYYY format
      latestCompletedDate: null,
    });
  },
};

const actions = {
  addHabit({ commit }, habit) {
    commit("ADD_HABIT", habit);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
