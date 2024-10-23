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
  color: white;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #001f3f, #2ecc71);
  min-height: 100vh;
  text-align: center;
}

.content-container {
  width: 100%;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 1200px) {
  .content-container {
    width: 95%;
    border-top: none;
  }
}
</style>
