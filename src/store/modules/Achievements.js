// store/modules/Achievements.js

export default {
  namespaced: true,
  state: () => ({
    achievements: [
      // Habit Completion Badges
      {
        title: "Habit Newbie",
        description: "Complete your first habit",
        completed: true,
        reward: "first-habit-badge.png",
      },
      {
        title: "Starter Streak",
        description: "Maintain a 3-day streak on a habit",
        completed: false,
        reward: "starter-streak-badge.png",
      },
      {
        title: "Weekly Warrior",
        description: "Complete a habit for 7 days in a row",
        completed: false,
        reward: "weekly-warrior-badge.png",
      },
      {
        title: "Two-Week Titan",
        description: "Maintain a 14-day habit streak",
        completed: false,
        reward: "two-week-titan-badge.png",
      },
      {
        title: "Monthly Master",
        description: "Complete a habit for 30 days in a row",
        completed: false,
        reward: "monthly-master-badge.png",
      },
      {
        title: "100-Day Hero",
        description: "Reach a 100-day streak on a habit",
        completed: false,
        reward: "100-day-hero-badge.png",
      },
      {
        title: "Habit Marathoner",
        description: "Reach a 300-day streak on a habit",
        completed: false,
        reward: "habit-marathoner-badge.png",
      },

      // Frequency-Based Badges
      {
        title: "Daily Devotee",
        description: "Complete a habit daily for a week",
        completed: false,
        reward: "daily-devotee-badge.png",
      },
      {
        title: "Weekend Warrior",
        description: "Complete a habit only on weekends for a month",
        completed: false,
        reward: "weekend-warrior-badge.png",
      },
      {
        title: "Night Owl",
        description: "Check off a habit every night for 10 days",
        completed: false,
        reward: "night-owl-badge.png",
      },
      {
        title: "Early Bird",
        description: "Check off a habit every morning for 10 days",
        completed: false,
        reward: "early-bird-badge.png",
      },

      // Total Habit Check-Ins Badges
      {
        title: "Habit Apprentice",
        description: "Complete 10 total habit check-ins",
        completed: false,
        reward: "habit-apprentice-badge.png",
      },
      {
        title: "Habit Journeyman",
        description: "Complete 50 total habit check-ins",
        completed: false,
        reward: "habit-journeyman-badge.png",
      },
      {
        title: "Habit Expert",
        description: "Complete 100 total habit check-ins",
        completed: false,
        reward: "habit-expert-badge.png",
      },
      {
        title: "Habit Master",
        description: "Complete 500 total habit check-ins",
        completed: false,
        reward: "habit-master-badge.png",
      },
      {
        title: "Habit Grandmaster",
        description: "Complete 1,000 total habit check-ins",
        completed: false,
        reward: "habit-grandmaster-badge.png",
      },

      // Multi-Habit Badges
      {
        title: "Double Trouble",
        description: "Track and complete 2 habits for a week",
        completed: false,
        reward: "double-trouble-badge.png",
      },
      {
        title: "Triple Threat",
        description: "Track and complete 3 habits for a week",
        completed: false,
        reward: "triple-threat-badge.png",
      },
      {
        title: "Habit Collector",
        description: "Track and complete 5 habits for a week",
        completed: false,
        reward: "habit-collector-badge.png",
      },
      {
        title: "Routine Hero",
        description: "Complete 3 different habits for 30 days each",
        completed: false,
        reward: "routine-hero-badge.png",
      },
      {
        title: "Daily Dozen",
        description: "Track and complete 12 different habits in total",
        completed: false,
        reward: "daily-dozen-badge.png",
      },

      // Consistency Badges
      {
        title: "Never Missed a Day",
        description: "Complete at least one habit every day for 30 days",
        completed: false,
        reward: "never-missed-day-badge.png",
      },
      {
        title: "Weekend Breaker",
        description: "Keep up your streak through 5 weekends",
        completed: false,
        reward: "weekend-breaker-badge.png",
      },
      {
        title: "Daily Dependable",
        description: "Maintain a habit for every day in a month",
        completed: false,
        reward: "daily-dependable-badge.png",
      },
      {
        title: "Back on Track",
        description: "After missing a day, resume streak for 7 days",
        completed: false,
        reward: "back-on-track-badge.png",
      },

      // Streak-Saver Badges
      {
        title: "Comeback King/Queen",
        description:
          "Recover a lost streak by starting fresh and maintaining for 10 days",
        completed: false,
        reward: "comeback-king-queen-badge.png",
      },
      {
        title: "Never Give Up",
        description: "Resume a habit after a break of more than a week",
        completed: false,
        reward: "never-give-up-badge.png",
      },

      // Goal-Oriented Badges
      {
        title: "Goal Setter",
        description: "Set up your first reward goal",
        completed: false,
        reward: "goal-setter-badge.png",
      },
      {
        title: "Goal Achiever",
        description: "Reach your first reward goal",
        completed: false,
        reward: "goal-achiever-badge.png",
      },
      {
        title: "Goal Getter",
        description: "Achieve 5 reward goals",
        completed: false,
        reward: "goal-getter-badge.png",
      },
      {
        title: "Big Spender",
        description: "Spend a large number of in-app coins on a reward",
        completed: false,
        reward: "big-spender-badge.png",
      },

      // Game & Reward-Based Badges
      {
        title: "Prize Wheel Rookie",
        description: "Spin the reward wheel 5 times",
        completed: false,
        reward: "prize-wheel-rookie-badge.png",
      },
      {
        title: "Prize Wheel Champion",
        description: "Spin the reward wheel 50 times",
        completed: false,
        reward: "prize-wheel-champion-badge.png",
      },
      {
        title: "Ticket Collector",
        description: "Earn 100 tickets through prize games",
        completed: false,
        reward: "ticket-collector-badge.png",
      },
      {
        title: "Coin Hoarder",
        description: "Accumulate 1,000 in-app coins",
        completed: false,
        reward: "coin-hoarder-badge.png",
      },

      // Challenge-Based Badges
      {
        title: "Challenge Beginner",
        description: "Complete your first in-app challenge",
        completed: false,
        reward: "challenge-beginner-badge.png",
      },
      {
        title: "Challenge Pro",
        description: "Complete 10 in-app challenges",
        completed: false,
        reward: "challenge-pro-badge.png",
      },
      {
        title: "Monthly Challenge Winner",
        description: "Win a monthly challenge among friends",
        completed: false,
        reward: "monthly-challenge-winner-badge.png",
      },
      {
        title: "Challenge Master",
        description:
          "Complete all types of challenges (daily, weekly, monthly)",
        completed: false,
        reward: "challenge-master-badge.png",
      },

      // Social Interaction Badges
      {
        title: "Friend Finder",
        description: "Add your first friend in the app",
        completed: false,
        reward: "friend-finder-badge.png",
      },
      {
        title: "Group Challenger",
        description: "Join a group habit challenge",
        completed: false,
        reward: "group-challenger-badge.png",
      },
      {
        title: "Social Supporter",
        description: "Encourage friends by liking their streaks 10 times",
        completed: false,
        reward: "social-supporter-badge.png",
      },
      {
        title: "Friendly Rival",
        description: "Compete with a friend in a habit for a month",
        completed: false,
        reward: "friendly-rival-badge.png",
      },
      {
        title: "Leaderboard Legend",
        description: "Reach the top of a leaderboard",
        completed: false,
        reward: "leaderboard-legend-badge.png",
      },

      // Special Event Badges
      {
        title: "New Year’s Resolution Keeper",
        description: "Start and maintain a habit from January 1",
        completed: false,
        reward: "new-years-resolution-keeper-badge.png",
      },
      {
        title: "Holiday Hustler",
        description: "Keep a habit streak through a major holiday",
        completed: false,
        reward: "holiday-hustler-badge.png",
      },
      {
        title: "Summer Striver",
        description: "Complete a habit every day in June, July, and August",
        completed: false,
        reward: "summer-striver-badge.png",
      },

      // Customizable Badge Ideas
      {
        title: "Create-a-Streak",
        description:
          "User-created badge for tracking custom streaks (e.g., writing or meditating)",
        completed: false,
        reward: "create-a-streak-badge.png",
      },
      {
        title: "Milestone Marker",
        description:
          "Badge automatically awarded when user sets a new personal best",
        completed: false,
        reward: "milestone-marker-badge.png",
      },
      {
        title: "Achievement Collector",
        description: "Collect 10, 20, 50 different badges across the app",
        completed: false,
        reward: "achievement-collector-badge.png",
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
