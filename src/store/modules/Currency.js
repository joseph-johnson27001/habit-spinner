export default {
  namespaced: true,
  state: () => ({
    coins: 150,
    tickets: 1,
  }),
  getters: {
    getCoins: (state) => state.coins,
    getTickets: (state) => state.tickets,
  },
};
