import { createStore } from "vuex";

const loadHabitsFromLocalStorage = () => {
  const habits = localStorage.getItem("habits");
  return habits ? JSON.parse(habits) : []; // Load habits from local storage or return an empty array
};

const saveHabitsToLocalStorage = (habits) => {
  localStorage.setItem("habits", JSON.stringify(habits)); // Save habits to local storage
};

export default createStore({
  state: {
    habits: loadHabitsFromLocalStorage(), // Load initial state from local storage
  },
  mutations: {
    ADD_HABIT(state, habit) {
      state.habits.push(habit); // Adds a new habit to the list
      saveHabitsToLocalStorage(state.habits); // Save updated habits to local storage
    },
    UPDATE_HABIT(state, { index, updatedHabit }) {
      state.habits.splice(index, 1, updatedHabit); // Updates a specific habit
      saveHabitsToLocalStorage(state.habits); // Save updated habits to local storage
    },
    REMOVE_HABIT(state, index) {
      state.habits.splice(index, 1); // Remove a habit
      saveHabitsToLocalStorage(state.habits); // Save updated habits to local storage
    },
  },
  actions: {
    addHabit({ commit }, habitName) {
      commit("ADD_HABIT", { name: habitName, completed: false, streak: 0 });
    },
    updateHabit({ commit }, { index, updatedHabit }) {
      commit("UPDATE_HABIT", { index, updatedHabit });
    },
    removeHabit({ commit }, index) {
      commit("REMOVE_HABIT", index);
    },
  },
  getters: {
    habits: (state) => state.habits, // Returns the list of habits
  },
});
