<template>
  <div class="nav-bar">
    <router-link to="/" class="nav-button">Home</router-link>
    <router-link to="/habits" class="nav-button">Habits</router-link>
    <router-link to="/rewards" class="nav-button">Rewards</router-link>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "NavBar",
  components: {
    RouterLink,
  },
};
</script>

<style>
.nav-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #003366;
  color: white;
  padding: 10px 0;
  width: 100%;
  position: relative;
  margin-top: auto;
}

.nav-button {
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
