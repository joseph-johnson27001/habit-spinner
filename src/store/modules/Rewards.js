export default {
  namespaced: true,
  state: () => ({
    rewards: [],
  }),
  getters: {
    allRewards: (state) => state.rewards,
  },
  mutations: {
    ADD_REWARD(state, reward) {
      const newReward = { ...reward, id: Date.now() };
      state.rewards.push(newReward);
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
    UPDATE_REWARD(state, updatedReward) {
      const index = state.rewards.findIndex((r) => r.id === updatedReward.id);
      if (index !== -1) {
        state.rewards.splice(index, 1, updatedReward);
      }
    },
    DELETE_REWARD(state, rewardId) {
      state.rewards = state.rewards.filter((reward) => reward.id !== rewardId);
    },
  },
  actions: {
    addReward({ commit }, reward) {
      commit("ADD_REWARD", reward);
    },
    redeemReward({ commit, rootState }, index) {
      commit("REDEEM_REWARD", { index, rootState });
    },
    updateReward({ commit }, updatedReward) {
      commit("UPDATE_REWARD", updatedReward);
    },
    deleteReward({ commit }, rewardId) {
      commit("DELETE_REWARD", rewardId);
    },
  },
};
