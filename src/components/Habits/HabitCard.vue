<template>
  <label
    :class="['habit-card', { completed: isCompleted }]"
    @click="toggleCompletion"
  >
    <span>{{ habitName }}</span>

    <!-- Fire icon with streak count -->
    <div class="streak-section">
      <i class="fa fa-fire fire-icon"></i>
      <span class="streak-count">{{ streak }}</span>
    </div>

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
    streak: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isCompleted: this.completed,
      chimeSound: new Audio(require("@/assets/chime.mp3")),
    };
  },
  methods: {
    toggleCompletion() {
      const wasCompleted = this.isCompleted;
      this.isCompleted = !this.isCompleted;
      const streakChange = this.isCompleted ? 1 : wasCompleted ? -1 : 0;
      this.$emit("update", { isCompleted: this.isCompleted, streakChange });

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
  font-size: 16px;
  font-weight: 100;
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
  justify-content: space-between;
  transition: color 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
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

/* Streak section styling */
.streak-section {
  position: absolute;
  top: 10px;
  right: 10px;
}

.fire-icon {
  color: #f76809; /* Ember orange color when the habit is completed */
  font-size: 18px;
  margin-right: 5px;
}

.streak-count {
  font-size: 15px;
  color: white;
}

.habit-card.completed::before {
  left: 0;
}

.habit-card.completed {
  color: white;
}
</style>
