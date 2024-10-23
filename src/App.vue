<template>
  <div id="app">
    <TopNav />
    <div class="content-container">
      <router-view />
      <div class="footer-container">
        <FooterNav />
      </div>
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
}

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e6f0ff;
  min-height: 100vh;
  text-align: center;
}

.content-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  background-color: white;
  /* border: 1px solid #ccc; */
  border-top: none;
  border-bottom: none;
}
</style>
