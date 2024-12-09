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
        title: "Warming Up",
        description: "Maintain a 3-day streak on a habit",
        completed: true,
        reward: "starter-streak-badge.png",
        completedDate: "04-12-2024",
      },
      {
        title: "Weekly Warrior",
        description: "Complete a habit for 7 days in a row",
        completed: true,
        reward: "weekly-warrior-badge.png",
        completedDate: "09-12-2024",
      },
      {
        title: "Two-Week Titan",
        description: "Maintain a 14-day habit streak",
        completed: true,
        reward: "two-week-badge.png",
        completedDate: "12-12-2024",
      },
      {
        title: "Monthly Master",
        description: "Complete a habit for 30 days in a row",
        completed: true,
        reward: "monthly-badge.png",
        completedDate: "09-12-2024",
      },
      {
        title: "Centurion",
        description: "Reach a 100-day streak on a habit",
        completed: true,
        reward: "centurion-badge.png",
        completedDate: "09-12-2024",
      },
      {
        title: "Spartan",
        description: "Reach a 300-day streak on a habit",
        completed: true,
        reward: "spartan-badge.png",
        completedDate: "09-12-2024",
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
