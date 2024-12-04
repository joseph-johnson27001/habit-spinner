// store/modules/Achievements.js

export default {
  namespaced: true,
  state: () => ({
    achievements: [
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
        completed: true,
        reward: "starter-streak-badge.png",
        completedDate: "01-12-2024",
      },
      {
        title: "Weekly Warrior",
        description: "Complete a habit for 7 days in a row",
        completed: true,
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
        title: "Centurion",
        description: "Reach a 100-day streak on a habit",
        completed: false,
        reward: "centurion-badge.png",
        completedDate: null,
      },
      {
        title: "Spartan",
        description: "Reach a 300-day streak on a habit",
        completed: false,
        reward: "spartan-badge.png",
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
