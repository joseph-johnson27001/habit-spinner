<template>
  <transition
    name="fade-slide"
    @after-enter="startTimer"
    @after-leave="clearTimer"
  >
    <div
      v-if="isVisible"
      class="toast-bar"
      :style="{ backgroundColor: bgColor }"
    >
      You Have Earned The Warrior Badge
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
      }, 4000); // Show for 4 seconds before hiding
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
  },
};
</script>

<style scoped>
.toast-bar {
  padding: 10px 20px;
  color: white;
  border-radius: 25px;
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 70vw;
  z-index: 1;
  text-align: center;
  background: #29292c;
  border-radius: 1rem;
  overflow: hidden;
}

/* Updated fade-in from the left */
.fade-slide-enter-active {
  animation: fade-slide-in 0.3s ease-out forwards;
}
.fade-slide-leave-active {
  animation: fade-shrink-out 0.3s ease-out forwards;
}

@keyframes fade-slide-in {
  from {
    opacity: 0;
    transform: translateX(-100%); /* Start from left off-screen */
  }
  to {
    opacity: 1;
    transform: translateX(-50%); /* End at centered position */
  }
}

@keyframes fade-shrink-out {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1); /* Stay centered */
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.8); /* Shrink and fade out */
  }
}
</style>
