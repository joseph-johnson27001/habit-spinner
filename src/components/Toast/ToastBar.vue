<template>
  <transition
    name="fade-slide"
    @after-enter="startTimer"
    @after-leave="clearTimer"
    @click="navigate"
  >
    <div v-if="isVisible" class="toast-bar">
      <div class="accent-bar"></div>
      <div class="toast-content">
        <div>
          <h4 class="toast-heading">{{ title }}</h4>
          <p class="toast-message">{{ message }}</p>
        </div>

        <div v-if="levelUp" class="level-container">
          <div class="star-level">
            <img :src="badge" alt="Achievement Badge" class="badge-image" />
          </div>
        </div>
        <img v-else :src="badge" alt="Achievement Badge" class="badge-image" />
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "ToastBar",
  data() {
    return {
      isVisible: false,
      timer: null,
      title: "",
      message: "",
      badge: null,
      levelUp: false,
      // badge: `/images/badges/weekly-warrior-badge.png`,
      // NEED TO SET BADGE TO BADGE VALUE IF ACHIEVEMENT NOT LEVEL
    };
  },
  computed: {
    ...mapState("habits", ["newLevel", "level"]),
  },
  // mounted() {
  // FOR TESTING
  // this.showToast();
  // },
  watch: {
    newLevel(newVal) {
      if (newVal) {
        this.levelUp = true;
        this.badge = "/images/badges/level-up-badge.png";
        this.showToast();
      }
    },
  },
  methods: {
    ...mapMutations("habits", ["RESET_NEW_LEVEL"]),
    startTimer() {
      this.clearTimer();
      this.timer = setTimeout(() => {
        this.isVisible = false;
        this.resetNewLevel();
        this.levelUp = false;
      }, 3000);
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    navigate() {
      this.isVisible = false;
      this.$router.push({ path: "/achievements" });
    },
    showToast() {
      this.message = `You've reached Level ${this.level}!`;
      this.title = "Level Complete!";
      setTimeout(() => {
        this.isVisible = true;
        this.startTimer();
      }, 1000);
    },
    resetNewLevel() {
      this.RESET_NEW_LEVEL();
    },
  },
};
</script>

<style scoped>
.toast-bar {
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 15px;
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
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  min-height: 25px;
  z-index: 2;
  opacity: 0.9;
}

/* Accent bar on the left side */
.accent-bar {
  width: 6px;
  height: 60px; /* Match this height to the toast bar height */
  background: linear-gradient(to right, #4a90e2, #9a74d6);
  border-radius: 10px 0 10px 0;
  margin-right: 10px;
}

/* Content inside the toast */
.toast-content {
  text-align: left;
  font-weight: 100;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
}

.toast-heading {
  margin-top: 15px;
  margin-bottom: 0px;
}

.toast-message {
  margin-top: 5px;
  font-size: 1rem;
}

.badge-image {
  width: 60px;
  height: 60px;
  opacity: 0;
  animation: pop-in 0.6s 0.4s linear both;
  display: flex;
  align-self: center;
}

.level-container {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

/* Star icon container */
.star-level {
  position: relative;
  display: inline-block;
  animation: pop-in 0.6s 0.4s linear both;
}

.star-icon {
  color: #ffd700;
  font-size: 30px;
}

/* Level text on top of the star icon */
.level-text {
  position: absolute;
  font-family: "Baloo 2", sans-serif;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
}

/* Fade-in and slide from the left */
.fade-slide-enter-active {
  animation: fade-slide-in 0.4s ease-out forwards;
}
.fade-slide-leave-active {
  animation: fade-shrink-out 0.4s ease-out forwards;
}

@keyframes pop-in {
  0% {
    transform: scale(0.3); /* Start small */
    opacity: 0; /* Start invisible */
  }
  40% {
    transform: scale(1.4); /* Slight overshoot for a popping effect */
    opacity: 1;
  }
  60% {
    transform: scale(0.7); /* Slight overshoot for a popping effect */
    opacity: 1;
  }
  80% {
    transform: scale(1.2); /* Slight overshoot for a popping effect */
    opacity: 1;
  }
  100% {
    transform: scale(1); /* Settle at normal size */
    opacity: 1; /* Ensure it stays visible */
  }
}

@keyframes fade-slide-in {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 0.9;
    transform: translateX(-50%);
  }
}

@keyframes fade-shrink-out {
  from {
    opacity: 0.9;
    transform: translateX(-50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.8);
  }
}
</style>
