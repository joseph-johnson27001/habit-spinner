<template>
  <div>
    <nav class="top-nav">
      <div class="top-nav-content">
        <!-- Center: Heading -->
        <div class="center-section heading">
          <router-link
            to="/"
            class="nav-button"
            :class="{ active: $route.path === '/' }"
          >
            <h2>Ember</h2>
          </router-link>
        </div>

        <!-- Right side: Hamburger Icon -->
        <div class="side-section">
          <i class="fas fa-bars hamburger-bars" @click="toggleSidebar"></i>
        </div>
      </div>
    </nav>

    <!-- SideNavigation component, style controlled by slideOpen -->
    <SideNavigation :slideOpen="slideOpen" @close="toggleSidebar" />

    <ToastBar />
  </div>
</template>

<script>
import ToastBar from "@/components/Toast/ToastBar.vue";
import SideNavigation from "@/components/Navigation/SideNavigation.vue";

export default {
  name: "TopNav",
  components: {
    ToastBar,
    SideNavigation,
  },
  data() {
    return {
      slideOpen: false, // Sidebar initially closed
    };
  },
  methods: {
    toggleSidebar(event) {
      this.slideOpen = !this.slideOpen; // Toggle the sidebar open/close
      if (event) {
        event.stopPropagation(); // Prevent the event from propagating to the document
      }
    },
  },
};
</script>

<style scoped>
.top-nav {
  width: 100%;
  background: transparent;
  position: fixed; /* Fix the nav to the top of the page */
  top: 0;
  left: 0; /* Ensure it takes the full width */
  z-index: 3; /* Ensure it stays on top of other content */
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #3a66d0, #6aafe6);
  border-bottom: 1px solid #2f4a92;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  height: 65px;
  text-align: center;
}

.top-nav-content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  color: white;
}

.nav-button {
  text-decoration: none;
  color: white;
}

h2 {
  font-family: "Baloo 2", sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
  text-align: center;
  margin: 0;
}

.side-section {
  display: flex;
  justify-content: flex-end;
  flex: 1;
  align-items: center;
}

.hamburger-bars {
  cursor: pointer;
  font-size: 18px;
}

@media only screen and (min-width: 1200px) {
  .top-nav-content {
    max-width: 1180px;
    width: 100%;
  }
}
</style>
