import { createStore } from "vuex";
import moment from "moment";

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
      console.log("New Habit:", habit);
      state.habits.push({
        ...habit,
        bestStreak: 0,
        completedThisWeek: 0,
        completedThisMonth: 0,
        completedThisYear: 0,
        totalCompletions: 0,
        latestCompletedDate: moment().format("MMMM Do yy"),
      });
      saveHabitsToLocalStorage(state.habits);
    },
  },
  actions: {
    addHabit({ commit }, habitName) {
      const newHabit = {
        name: habitName,
        completed: false,
        streak: 0,
        firstCompletionDate: moment().format("MMMM Do yy"),
      };
      commit("ADD_HABIT", newHabit);
    },
  },
  getters: {
    habits: (state) => state.habits,
  },
});
