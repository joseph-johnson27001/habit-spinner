// store/index.js

import { createStore } from "vuex";
import habits from "./modules/Habits";

const store = createStore({
  modules: {
    habits,
  },
});

export default store;
