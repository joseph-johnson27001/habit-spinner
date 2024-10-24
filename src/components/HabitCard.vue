<template>
  <label
    :class="['habit-card', { completed: isCompleted }]"
    @click="toggleCompletion"
  >
    <span>{{ habitName }}</span>
    <span v-if="isCompleted" class="checkmark">✓</span>
  </label>
</template>

<script>
export default {
  name: "HabitCard",
  props: {
    habitName: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isCompleted: this.completed,
      chimeSound: new Audio(require("@/assets/chime.mp3")), // Adjust the path as necessary
    };
  },
  methods: {
    toggleCompletion() {
      this.isCompleted = !this.isCompleted;
      this.$emit("update", this.isCompleted);
      if (this.isCompleted) {
        this.playChime();
      }
    },
    playChime() {
      this.chimeSound.play();
    },
  },
};
</script>

<style scoped>
.habit-card {
  position: relative;
  background: linear-gradient(to right, #4a90e2, #9a74d6);
  padding: 40px 15px;
  margin: 10px 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  /* border: 1px solid #ccc; */
  font-size: 16px;
  font-weight: 100;
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
  justify-content: space-between;
  transition: color 0.3s ease;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
}

.habit-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #4caf50;
  transition: left 0.2s linear;
  z-index: 0;
}

.habit-card span {
  position: relative;
  z-index: 1;
}

.checkmark {
  color: white;
  font-size: 15px;
}

.habit-card.completed::before {
  left: 0;
}

.habit-card.completed {
  color: white;
}
</style>
