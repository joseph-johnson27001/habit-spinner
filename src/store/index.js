import { createStore } from "vuex";

export default createStore({
  state: {
    habits: [],
  },
  mutations: {
    ADD_HABIT(state, habit) {
      state.habits.push(habit); // Adds a new habit to the list
    },
    UPDATE_HABIT(state, { index, updatedHabit }) {
      state.habits.splice(index, 1, updatedHabit); // Updates a specific habit
    },
  },
  actions: {
    addHabit({ commit }, habitName) {
      commit("ADD_HABIT", { name: habitName, completed: false, streak: 0 });
    },
    updateHabit({ commit }, { index, updatedHabit }) {
      commit("UPDATE_HABIT", { index, updatedHabit });
    },
  },
  getters: {
    habits: (state) => state.habits, // Returns the list of habits
  },
});
