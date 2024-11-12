// store/index.js

import { createStore } from "vuex";
import habits from "./modules/Habits";
import rewards from "./modules/Rewards";
import currency from "./modules/Currency";
import levels from "./modules/Levels";
import achievements from "./modules/Achievements";
import settings from "./modules/Settings";

// LocalStorage plugin to persist specific state modules
const localStoragePlugin = (store) => {
  // Load state from localStorage when the store is initialized
  const storedState = localStorage.getItem("vuexState");
  if (storedState) {
    store.replaceState({
      ...store.state,
      ...JSON.parse(storedState),
    });
  }

  // Subscribe to mutations to save only specific modules' state to localStorage
  store.subscribe((mutation, state) => {
    const { habits, rewards, currency, levels, achievements, settings } = state; // Select only necessary modules to persist
    localStorage.setItem(
      "vuexState",
      JSON.stringify({
        habits,
        rewards,
        currency,
        levels,
        achievements,
        settings,
      })
    );
  });
};

const store = createStore({
  modules: {
    habits,
    rewards,
    currency,
    levels,
    achievements,
    settings,
  },
  plugins: [localStoragePlugin],
});

export default store;
