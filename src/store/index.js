import { createStore } from "vuex";
import moment from "moment"; // Import Moment.js

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
        firstCompletionDate: moment().format("DD-MM-YYYY"),
        latestCompletedDate: moment().format("DD-MM-YYYY"),
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
      });
    },
    updateHabit({ commit }, { index, updatedHabit }) {
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
