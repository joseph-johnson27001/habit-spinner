<template>
  <div id="app">
    <TopNav />
    <div class="content-container">
      <router-view />
      <FooterNav />
    </div>
  </div>
</template>

<script>
import FooterNav from "./components/Navigation/FooterNav.vue";
import TopNav from "./components/Navigation/TopNav.vue";

export default {
  name: "App",
  components: {
    FooterNav,
    TopNav,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  background-color: #e6f0ff;
  min-height: 100vh;
  text-align: center;
}

.content-container {
  flex: 1;
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f3f2f2;
  border: 1px solid #ccc;
  border-top: none;
  display: flex;
  flex-direction: column;
}
</style>
