<template>
  <div>
    <nav class="top-nav">
      <div class="top-nav-content">
        <!-- Center: Heading -->
        <div class="center-section heading">
          <h2>Ember</h2>
        </div>

        <!-- Right side: Hamburger Icon -->
        <div class="side-section">
          <i class="fas fa-bars hamburger-bars" @click="toggleSidebar"></i>
        </div>
      </div>
    </nav>

    <!-- Conditionally render the SideNavigation component -->
    <SideNavigation v-if="slideOpen" @close="toggleSidebar" />

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
    toggleSidebar() {
      this.slideOpen = !this.slideOpen; // Toggle the sidebar open/close
    },
  },
};
</script>

<style scoped>
.top-nav {
  width: 100%;
  background: transparent;
  position: relative;
  z-index: 100;
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
  padding: 5px 20px;
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
