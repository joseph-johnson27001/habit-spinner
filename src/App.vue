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
/* Ensure html and body take up full viewport height */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%; /* Inherit full viewport height */
  background-color: #f5f4f0;
  font-family: "Nunito", sans-serif;
  text-align: center;
  overflow-y: scroll; /* Enable scrolling only within the content area */
}

.content-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 70px; /* To ensure content doesn't overlap with TopNav */
  flex: 1; /* Allows content-container to grow and fill available space */
}

@media only screen and (min-width: 1200px) {
  .content-container {
    width: 95%;
    border-top: none;
  }
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
  padding-top: 70px;
}

@media only screen and (min-width: 1200px) {
  .content-container {
    width: 95%;
    border-top: none;
  }
}
</style>
