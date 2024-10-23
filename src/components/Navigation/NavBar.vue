<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/habits">Habits</router-link>
    <router-link to="/rewards">Rewards</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
nav {
  margin-top: 20px;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #42b983; /* Change to your preferred color */
}

nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
