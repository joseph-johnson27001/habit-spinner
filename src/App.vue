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
* {
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
}

html {
  height: 100vh;
}

body {
  padding: 0;
  height: 100vh;
  margin: 0;
}

#app {
  background-color: #f5f4f0;
  display: flex;
  flex-direction: column;
  font-family: "Nunito", sans-serif;
  height: 100%;
  text-align: center;
  margin-bottom: 80px;
}

/* Hide scrollbar for WebKit browsers */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for Firefox */
body {
  scrollbar-width: none;
  -ms-overflow-style: none;
  background-color: #f5f4f0;
}

.content-container {
  width: 100%;
  height: 100% !important;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  overflow-y: scroll;
}

@media only screen and (min-width: 1200px) {
  .content-container {
    width: 95%;
    border-top: none;
  }
}
</style>
