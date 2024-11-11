export default {
  namespaced: true,
  state: () => ({
    alertSounds: false,
  }),
  getters: {
    getAlertSettings: (state) => state.alertSounds,
  },
};
