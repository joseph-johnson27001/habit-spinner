import moment from "moment";

const state = () => ({
  habits: [],
  todayCompletedHabits: 0,
  storedHabits: 20,
  lastTrackedDate: moment().format("DD-MM-YYYY"),
  lastTrackedWeek: moment().week(),
  lastTrackedMonth: moment().month(),
  lastTrackedYear: moment().year(),
  level: 1,
  newLevel: false,
  points: 0,
  levelRequirements: Array.from({ length: 100 }, (_, i) => (i + 1) * 25), // XP required for each level is 25 points higher than previous level
});

const getters = {
  // Habit-related getters
  allHabits: (state) => state.habits,
  totalHabits: (state) => state.habits.length,
  totalCompletedHabits: (state) =>
    state.habits.reduce((sum, habit) => sum + habit.totalCompletions, 0),
  habitsCompleted: (state) =>
    state.habits.filter((habit) => habit.completed).length,
  todayCompletedHabits: (state) => state.todayCompletedHabits,
  storedHabits: (state) => state.storedHabits,
  bestStreak: (state) =>
    state.habits.reduce((max, habit) => Math.max(max, habit.bestStreak), 0),
  weeklyCompleted: (state) =>
    state.habits.reduce((sum, habit) => sum + habit.completedWeek, 0),
  monthlyCompleted: (state) =>
    state.habits.reduce((sum, habit) => sum + habit.completedMonth, 0),
  yearlyCompleted: (state) =>
    state.habits.reduce((sum, habit) => sum + habit.completedYear, 0),

  // Level-related getters
  getNewLevel: (state) => state.newLevel,
  getLevel: (state) => state.level,
  getPoints: (state) => state.points,
  getPointsToNextLevel: (state) => state.levelRequirements[state.level - 1], // Points required for the next level
};

const mutations = {
  // Habit-related mutations
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
  async COMPLETE_HABIT(state, index) {
    const habit = state.habits[index];
    habit.previouslyCompletedDate = habit.latestCompletedDate;
    habit.completed = true;
    habit.totalCompletions += 1;
    habit.completedWeek += 1;
    habit.completedMonth += 1;
    habit.completedYear += 1;
    habit.streak += 1;

    if (habit.bestStreak === 0) {
      habit.firstCompletionDate = moment().format("DD-MM-YYYY");
    }

    if (habit.streak > habit.bestStreak) {
      habit.currentBestStreak = true;
      habit.bestStreak = habit.streak;
    }

    habit.latestCompletedDate = moment().format("DD-MM-YYYY");

    // Update today's completed habits count
    state.todayCompletedHabits += 1;

    // No points are added here, as it's now handled inside the rollover logic
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
    if (habit.totalCompletions === 0) {
      habit.firstCompletionDate = null;
    }
    if (habit.currentBestStreak === true) {
      habit.bestStreak -= 1;
    }

    // Decrease today's completed habits count
    state.todayCompletedHabits = Math.max(0, state.todayCompletedHabits - 1);
  },

  async ROLLOVER_COMPLETED_HABITS(state) {
    const today = moment().format("DD-MM-YYYY");

    // Update `storedHabits` if a new day has started
    if (state.lastTrackedDate !== today) {
      state.storedHabits += state.todayCompletedHabits;
      state.todayCompletedHabits = 0;
      state.lastTrackedDate = today;
    }

    // Check if a new week, month, or year has started
    const currentWeek = moment().week();
    const currentMonth = moment().month();
    const currentYear = moment().year();

    // Reset weekly, monthly, and yearly completion counts if needed
    state.habits.forEach((habit) => {
      if (state.lastTrackedWeek !== currentWeek) {
        habit.completedWeek = 0; // Reset weekly count
      }
      if (state.lastTrackedMonth !== currentMonth) {
        habit.completedMonth = 0; // Reset monthly count
      }
      if (state.lastTrackedYear !== currentYear) {
        habit.completedYear = 0; // Reset yearly count
      }

      // Reset individual habit completion status and streaks if needed
      if (habit.latestCompletedDate) {
        const daysSinceLastCompletion = moment(today, "DD-MM-YYYY").diff(
          moment(habit.latestCompletedDate, "DD-MM-YYYY"),
          "days"
        );

        if (daysSinceLastCompletion >= 1) {
          // Check if the habit was completed
          if (daysSinceLastCompletion >= 1) {
            if (habit.completed) {
              mutations.ADD_POINTS(state, 5); // This adds points for completed habits
            }
            habit.completed = false;
          }

          // Reset completed status for a new day
          habit.completed = false;
        }

        // Reset the streak if more than a day has passed
        if (daysSinceLastCompletion > 1) {
          habit.streak = 0;
          habit.currentBestStreak = false;
        }
      }
    });

    // Update last tracked week, month, and year to current values
    if (state.lastTrackedWeek !== currentWeek) {
      state.lastTrackedWeek = currentWeek;
    }
    if (state.lastTrackedMonth !== currentMonth) {
      state.lastTrackedMonth = currentMonth;
    }
    if (state.lastTrackedYear !== currentYear) {
      state.lastTrackedYear = currentYear;
    }
  },

  DECREMENT_STORED_HABITS(state) {
    if (state.storedHabits > 0) {
      state.storedHabits -= 1;
    }
  },

  // Level-related mutations
  ADD_POINTS(state, points) {
    state.points += points;
    const pointsToNextLevel = state.levelRequirements[state.level - 1];

    // Check if user has enough points to level up
    if (state.points >= pointsToNextLevel) {
      state.level += 1; // Increase level
      state.points = 0; // Reset points for the new level
      state.newLevel = true; // Set new level value to true
    }
  },
  RESET_NEW_LEVEL(state) {
    state.newLevel = false;
  },
};

const actions = {
  // Habit-related actions
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

  // Level-related actions
  addPoints({ commit }, points) {
    commit("ADD_POINTS", points);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
