export default {
  namespaced: true,
  state: () => ({
    level: 1,
  }),
  getters: {
    getLevel: (state) => state.level,
  },
};
