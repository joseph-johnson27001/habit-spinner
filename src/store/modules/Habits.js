import moment from "moment";

const state = () => ({
  habits: [],
});

const getters = {
  allHabits: (state) => state.habits,
  totalHabits: (state) => state.habits.length,
  habitsCompleted: (state) =>
    state.habits.filter((habit) => habit.completed).length,
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
    state.habits.splice(index, 1);
  },
  async COMPLETE_HABIT(state, index) {
    const habit = state.habits[index];
    habit.previouslyCompletedDate = habit.latestCompletedDate;
    habit.completed = true;
    habit.totalCompletions += 1;
    habit.completedWeek += 1;
    habit.completedMonth += 1;
    habit.completedYear += 1;

    if (habit.streak === 0) {
      habit.firstCompletionDate = moment().format("DD-MM-YYYY");
    }
    habit.streak += 1;

    if (habit.streak > habit.bestStreak) {
      habit.currentBestStreak = true;
      habit.bestStreak = habit.streak;
    }

    habit.latestCompletedDate = moment().format("DD-MM-YYYY");
  },

  async UNCOMPLETE_HABIT(state, index) {
    const habit = state.habits[index];
    habit.latestCompletedDate = habit.previouslyCompletedDate;
    habit.completed = false;
    habit.totalCompletions -= 1;
    habit.completedWeek -= 1;
    habit.completedMonth -= 1;
    habit.completedYear -= 1;

    habit.streak = Math.max(0, habit.streak - 1);
    // if (habit.completed === false) {
    //   habit.latestCompletedDate = null;
    // }
    if (habit.totalCompletions === 0) {
      habit.firstCompletionDate = null;
    }
    if (habit.currentBestStreak === true) {
      habit.bestStreak -= 1;
    }
  },
  RESET_COMPLETED_STATE(state) {
    const today = moment().format("DD-MM-YYYY");
    state.habits.forEach((habit) => {
      if (habit.latestCompletedDate !== today) {
        habit.completed = false; // Reset to false if the last completion date is not today
      }
    });
  },
};

const actions = {
  addHabit({ commit }, habit) {
    commit("ADD_HABIT", habit);
  },
  completeHabit({ commit }, index) {
    commit("COMPLETE_HABIT", index);
  },
  uncompleteHabit({ commit }, index) {
    commit("UNCOMPLETE_HABIT", index);
  },
  deleteHabitAction({ commit }, index) {
    commit("DELETE_HABIT", index);
  },
  resetCompletedState({ commit }) {
    commit("RESET_COMPLETED_STATE");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
