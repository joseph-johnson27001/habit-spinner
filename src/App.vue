<template>
  <div id="app">
    <TopBar />
    <div class="content-container">
      <router-view />
      <NavBar />
    </div>
  </div>
</template>

<script>
import TopBar from "./components/Navigation/TopBar.vue";
import NavBar from "./components/Navigation/NavBar.vue";

export default {
  name: "App",
  components: {
    TopBar,
    NavBar,
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: #e6f0ff;
  min-height: 100vh;
}

.content-container {
  max-width: 1000px;
  width: 100%;
  background-color: white;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  flex-grow: 1;
}
</style>
