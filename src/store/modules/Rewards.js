export default {
  namespaced: true,
  state: () => ({
    rewards: [
      { name: "Spa Day", redeemed: false, cost: 50 },
      { name: "Movie Ticket", redeemed: false, cost: 20 },
      { name: "Dinner at a Restaurant", redeemed: false, cost: 80 },
      { name: "New Book", redeemed: false, cost: 30 },
    ],
  }),
  getters: {
    allRewards: (state) => state.rewards,
  },
  mutations: {
    ADD_REWARD(state, reward) {
      state.rewards.push(reward);
    },
    REDEEM_REWARD(state, { index, rootState }) {
      if (
        state.rewards[index] &&
        rootState.currency.coins >= state.rewards[index].cost
      ) {
        state.rewards[index].redeemed = true;
        rootState.currency.coins -= state.rewards[index].cost;
      }
    },
  },
  actions: {
    addReward({ commit }, reward) {
      commit("ADD_REWARD", reward);
    },
    redeemReward({ commit, rootState }, index) {
      commit("REDEEM_REWARD", { index, rootState });
    },
  },
};
