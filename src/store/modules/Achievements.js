// store/modules/Achievements.js

export default {
  namespaced: true,
  state: () => ({
    achievements: [
      // Habit Completion Badges
      {
        title: "Firestarter",
        description: "Complete your first habit",
        completed: true,
        reward: "first-habit-badge.png",
        completedDate: "01-11-2024",
      },
      {
        title: "Starter Streak",
        description: "Maintain a 3-day streak on a habit",
        completed: false,
        reward: "three-day-habit-badge.png",
        completedDate: null,
      },
      {
        title: "Weekly Warrior",
        description: "Complete a habit for 7 days in a row",
        completed: false,
        reward: "weekly-warrior-badge.png",
        completedDate: null,
      },
      {
        title: "Two-Week Titan",
        description: "Maintain a 14-day habit streak",
        completed: false,
        reward: "two-week-badge.png",
        completedDate: null,
      },
      {
        title: "Monthly Master",
        description: "Complete a habit for 30 days in a row",
        completed: false,
        reward: "monthly-badge.png",
        completedDate: null,
      },
      {
        title: "100-Day Hero",
        description: "Reach a 100-day streak on a habit",
        completed: false,
        reward: "100-day-hero-badge.png",
        completedDate: null,
      },
      {
        title: "Habit Marathoner",
        description: "Reach a 300-day streak on a habit",
        completed: false,
        reward: "habit-marathoner-badge.png",
        completedDate: null,
      },
    ],
  }),
  getters: {
    achievementsList: (state) => state.achievements,
  },

  mutations: {
    setAchievements(state, achievements) {
      state.achievements = achievements;
    },
  },
};
