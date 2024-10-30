// store/index.js

import { createStore } from "vuex";
import habits from "./modules/Habits";

// LocalStorage plugin
const localStoragePlugin = (store) => {
  // Load state from localStorage when the store is initialized
  const storedState = localStorage.getItem("vuexState");
  if (storedState) {
    store.replaceState(JSON.parse(storedState));
  }

  // Subscribe to mutations to save the state to localStorage
  store.subscribe((mutation, state) => {
    localStorage.setItem("vuexState", JSON.stringify(state));
  });
};

const store = createStore({
  modules: {
    habits,
  },
  plugins: [localStoragePlugin], // Add the local storage plugin here
});

export default store;
