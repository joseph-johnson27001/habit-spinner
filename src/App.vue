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
body {
  padding: 0;
  margin: 0;
}

#app {
  background-color: #f5f4f0;
  display: flex;
  flex-direction: column;
  font-family: "Nunito", sans-serif;
  min-height: 100vh;
  text-align: center;
  overflow-y: scroll;
}

/* Hide scrollbar for WebKit browsers */
::-webkit-scrollbar {
  display: none; /* Hides the scrollbar */
}

/* Hide scrollbar for Firefox */
body {
  scrollbar-width: none; /* Hides the scrollbar */
  -ms-overflow-style: none; /* IE and Edge */
}

.content-container {
  width: 100%;
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
