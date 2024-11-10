<template>
  <div class="overlay" @click.self="close">
    <div class="side-navigation">
      <button class="close-btn" @click="close">X</button>
      <!-- Add your navigation items here -->
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><router-link to="/settings">Settings</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNavigation",
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 40;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 200;
}

.side-navigation {
  width: 80%;
  max-width: 500px;
  background: #f2f2f2;
  height: 100%;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transform: translateX(100%);
  animation: slideIn 0.3s forwards;
}

.close-btn {
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
}

/* Keyframes for the slide-in animation */
@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
