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

      // Frequency-Based Badges

      // {
      //   title: "Daily Devotee",
      //   description: "Complete a habit daily for a week",
      //   completed: false,
      //   reward: "daily-devotee-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Weekend Warrior",
      //   description: "Complete a habit only on weekends for a month",
      //   completed: false,
      //   reward: "weekend-warrior-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Night Owl",
      //   description: "Check off a habit every night for 10 days",
      //   completed: false,
      //   reward: "night-owl-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Early Bird",
      //   description: "Check off a habit every morning for 10 days",
      //   completed: false,
      //   reward: "early-bird-badge.png",
      //   completedDate: null,
      // },

      // Total Habit Check-Ins Badges
      // {
      //   title: "Habit Apprentice",
      //   description: "Complete 10 total habit check-ins",
      //   completed: false,
      //   reward: "habit-apprentice-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Habit Journeyman",
      //   description: "Complete 50 total habit check-ins",
      //   completed: false,
      //   reward: "habit-journeyman-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Habit Expert",
      //   description: "Complete 100 total habit check-ins",
      //   completed: false,
      //   reward: "habit-expert-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Habit Master",
      //   description: "Complete 500 total habit check-ins",
      //   completed: false,
      //   reward: "habit-master-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Habit Grandmaster",
      //   description: "Complete 1,000 total habit check-ins",
      //   completed: false,
      //   reward: "habit-grandmaster-badge.png",
      //   completedDate: null,
      // },

      // Multi-Habit Badges
      // {
      //   title: "Double Trouble",
      //   description: "Track and complete 2 habits for a week",
      //   completed: false,
      //   reward: "double-trouble-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Triple Threat",
      //   description: "Track and complete 3 habits for a week",
      //   completed: false,
      //   reward: "triple-threat-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Habit Collector",
      //   description: "Track and complete 5 habits for a week",
      //   completed: false,
      //   reward: "habit-collector-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Routine Hero",
      //   description: "Complete 3 different habits for 30 days each",
      //   completed: false,
      //   reward: "routine-hero-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Daily Dozen",
      //   description: "Track and complete 12 different habits in total",
      //   completed: false,
      //   reward: "daily-dozen-badge.png",
      //   completedDate: null,
      // },

      // Consistency Badges
      // {
      //   title: "Never Missed a Day",
      //   description: "Complete at least one habit every day for 30 days",
      //   completed: false,
      //   reward: "never-missed-day-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Weekend Breaker",
      //   description: "Keep up your streak through 5 weekends",
      //   completed: false,
      //   reward: "weekend-breaker-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Daily Dependable",
      //   description: "Maintain a habit for every day in a month",
      //   completed: false,
      //   reward: "daily-dependable-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Back on Track",
      //   description: "After missing a day, resume streak for 7 days",
      //   completed: false,
      //   reward: "back-on-track-badge.png",
      //   completedDate: null,
      // },

      // Streak-Saver Badges
      // {
      //   title: "Comeback King/Queen",
      //   description:
      //     "Recover a lost streak by starting fresh and maintaining for 10 days",
      //   completed: false,
      //   reward: "comeback-king-queen-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Never Give Up",
      //   description: "Resume a habit after a break of more than a week",
      //   completed: false,
      //   reward: "never-give-up-badge.png",
      //   completedDate: null,
      // },

      // Goal-Oriented Badges
      // {
      //   title: "Goal Setter",
      //   description: "Set up your first reward goal",
      //   completed: false,
      //   reward: "goal-setter-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Goal Achiever",
      //   description: "Reach your first reward goal",
      //   completed: false,
      //   reward: "goal-achiever-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Goal Getter",
      //   description: "Achieve 5 reward goals",
      //   completed: false,
      //   reward: "goal-getter-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Big Spender",
      //   description: "Spend a large number of in-app coins on a reward",
      //   completed: false,
      //   reward: "big-spender-badge.png",
      //   completedDate: null,
      // },

      // Game & Reward-Based Badges
      // {
      //   title: "Prize Wheel Rookie",
      //   description: "Spin the reward wheel 5 times",
      //   completed: false,
      //   reward: "prize-wheel-rookie-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Prize Wheel Champion",
      //   description: "Spin the reward wheel 50 times",
      //   completed: false,
      //   reward: "prize-wheel-champion-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Ticket Collector",
      //   description: "Earn 100 tickets through prize games",
      //   completed: false,
      //   reward: "ticket-collector-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Coin Hoarder",
      //   description: "Accumulate 1,000 in-app coins",
      //   completed: false,
      //   reward: "coin-hoarder-badge.png",
      //   completedDate: null,
      // },

      // Challenge-Based Badges
      // {
      //   title: "Challenge Beginner",
      //   description: "Complete your first in-app challenge",
      //   completed: false,
      //   reward: "challenge-beginner-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Challenge Pro",
      //   description: "Complete 10 in-app challenges",
      //   completed: false,
      //   reward: "challenge-pro-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Monthly Challenge Winner",
      //   description: "Win a monthly challenge among friends",
      //   completed: false,
      //   reward: "monthly-challenge-winner-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Challenge Master",
      //   description:
      //     "Complete all types of challenges (daily, weekly, monthly)",
      //   completed: false,
      //   reward: "challenge-master-badge.png",
      //   completedDate: null,
      // },

      // Social Interaction Badges
      // {
      //   title: "Friend Finder",
      //   description: "Add your first friend in the app",
      //   completed: false,
      //   reward: "friend-finder-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Group Challenger",
      //   description: "Join a group habit challenge",
      //   completed: false,
      //   reward: "group-challenger-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Social Supporter",
      //   description: "Encourage friends by liking their streaks 10 times",
      //   completed: false,
      //   reward: "social-supporter-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Friendly Rival",
      //   description: "Compete with a friend in a habit for a month",
      //   completed: false,
      //   reward: "friendly-rival-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Leaderboard Legend",
      //   description: "Reach the top of a leaderboard",
      //   completed: false,
      //   reward: "leaderboard-legend-badge.png",
      //   completedDate: null,
      // },

      // Special Event Badges
      // {
      //   title: "New Year’s Resolution Keeper",
      //   description: "Start and maintain a habit from January 1",
      //   completed: false,
      //   reward: "new-years-resolution-keeper-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Holiday Hustler",
      //   description: "Keep a habit streak through a major holiday",
      //   completed: false,
      //   reward: "holiday-hustler-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Summer Striver",
      //   description: "Complete a habit every day in June, July, and August",
      //   completed: false,
      //   reward: "summer-striver-badge.png",
      //   completedDate: null,
      // },

      // Customizable Badge Ideas
      // {
      //   title: "Create-a-Streak",
      //   description:
      //     "User-created badge for tracking custom streaks (e.g., writing or meditating)",
      //   completed: false,
      //   reward: "create-a-streak-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Milestone Marker",
      //   description:
      //     "Badge automatically awarded when user sets a new personal best",
      //   completed: false,
      //   reward: "milestone-marker-badge.png",
      //   completedDate: null,
      // },
      // {
      //   title: "Achievement Collector",
      //   description: "Collect 10, 20, 50 different badges across the app",
      //   completed: false,
      //   reward: "achievement-collector-badge.png",
      //   completedDate: null,
      // },
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
