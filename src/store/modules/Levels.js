export default {
  namespaced: true,
  state: () => ({
    level: 1,
    points: 0, // Track points for the current level
    levelRequirements: Array.from({ length: 100 }, (_, i) => (i + 1) * 25), // XP required for each level is 25 points higher than previous level
  }),
  getters: {
    getLevel: (state) => state.level,
    getPoints: (state) => state.points,
    getPointsToNextLevel: (state) => state.levelRequirements[state.level - 1], // Points required for the next level
  },
  mutations: {
    ADD_POINTS(state, points) {
      console.log("ADDING");
      state.points += points;
      const pointsToNextLevel = state.levelRequirements[state.level - 1];

      // Check if user has enough points to level up
      if (state.points >= pointsToNextLevel) {
        state.level += 1; // Increase level
        state.points = 0; // Reset points for the new level
      }
    },
  },
};
