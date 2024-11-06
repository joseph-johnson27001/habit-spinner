export default {
  namespaced: true,
  state: () => ({
    coins: 150,
  }),
  getters: {
    getCoins: (state) => state.coins,
  },
};
