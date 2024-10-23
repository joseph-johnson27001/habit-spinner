<template>
  <div id="app">
    <TopNav />
    <div class="content-container">
      <router-view />
    </div>
    <FooterNav />
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
#app {
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  text-align: center;
}

.content-container {
  width: 100%;
  max-width: 1200px;
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
