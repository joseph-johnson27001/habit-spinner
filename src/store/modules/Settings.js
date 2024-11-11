// store/modules/Settings.js

export default {
  namespaced: true,
  state: () => ({
    alertSounds: false,
  }),
  getters: {
    getAlertSettings: (state) => state.alertSounds,
  },
  mutations: {
    SET_ALERT_SOUNDS(state, value) {
      state.alertSounds = value;
    },
  },
  actions: {
    toggleAlertSounds({ commit }, value) {
      commit("SET_ALERT_SOUNDS", value);
    },
  },
};
