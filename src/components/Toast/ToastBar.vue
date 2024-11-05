<template>
  <transition
    name="fade-slide"
    @after-enter="startTimer"
    @after-leave="clearTimer"
  >
    <div v-if="isVisible" class="toast-bar">
      <!-- Badge icon in top-right corner -->
      <img
        :src="`/images/badges/first-habit-badge.png`"
        alt="Achievement Badge"
        class="badge-image"
      />
      <div class="accent-bar"></div>
      <div class="toast-content">
        <h4 class="toast-heading">{{ title }}</h4>
        <p class="toast-message">{{ message }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ToastBar",
  props: {},
  data() {
    return {
      isVisible: false,
      timer: null,
      title: "Achievement Completed!",
      message: "You've Earned The Warrior Badge!",
    };
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
    }, 1000);
  },
  methods: {
    startTimer() {
      this.timer = setTimeout(() => {
        this.isVisible = false;
      }, 3000);
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
  },
};
</script>

<style scoped>
.toast-bar {
  display: flex;
  align-items: center;
  padding: 20px 15px;
  color: white;
  border-radius: 6px;
  position: fixed;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  width: 80vw;
  max-width: 600px;
  z-index: 1;
  background: #29292c;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  height: 30px;
  z-index: 2;
}

/* Accent bar on the left side */
.accent-bar {
  width: 3px;
  height: 60px; /* Match this height to the toast bar height */
  background: linear-gradient(to right, #4a90e2, #9a74d6);
  border-radius: 4px 0 4px 0;
  margin-right: 10px;
}

/* Content inside the toast */
.toast-content {
  text-align: left;
  font-weight: 100 !important;
}

.toast-heading {
  margin-top: 20px;
  margin-bottom: 0px;
}

.toast-message {
  margin-top: 5px;
}

.badge-image {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0px;
  right: 0px;
}

/* Fade-in and slide from the left */
.fade-slide-enter-active {
  animation: fade-slide-in 0.3s ease-out forwards;
}
.fade-slide-leave-active {
  animation: fade-shrink-out 0.3s ease-out forwards;
}

@keyframes fade-slide-in {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(-50%);
  }
}

@keyframes fade-shrink-out {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.8);
  }
}
</style>
