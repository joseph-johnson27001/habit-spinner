// store/modules/currency.js
export default {
  namespaced: true,
  state: () => ({
    coins: 150, // Initial coins count
  }),
  getters: {
    getCoins: (state) => state.coins,
  },
  mutations: {
    // Mutation to update the coins balance
    INCREASE_COINS(state, amount) {
      state.coins += amount;
    },
  },
  actions: {
    // Action to call the mutation and increase the coins
    increaseCoins({ commit }, amount) {
      commit("INCREASE_COINS", amount);
    },
  },
};
