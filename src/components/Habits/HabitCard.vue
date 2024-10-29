<template>
  <label
    :class="['habit-card', { completed: isCompleted }]"
    @click="toggleCompletion"
  >
    <div class="habit-info">
      <span>{{ habitName }}</span>

      <!-- Info icon -->
      <div class="info-section" @click.stop="toggleDetails">
        <i class="fa fa-bars"></i>
      </div>

      <!-- Fire icon with streak count -->
      <div class="streak-section">
        <i class="fa fa-fire fire-icon"></i>
        <span class="streak-count">{{ streak }}</span>
      </div>
    </div>

    <!-- Dropdown for habit details -->
    <div v-if="showDetails" class="details-dropdown">
      <div class="detail-container">
        <p>Current Streak:</p>
        <p>{{ streak }}</p>
      </div>
      <div class="detail-container">
        <p>Best Streak:</p>
        <p>{{ bestStreak }}</p>
      </div>
      <div class="detail-container">
        <p>Completed This Week:</p>
        <p>{{ totalCompletions }}</p>
      </div>
      <div class="detail-container">
        <p>Completed This Month:</p>
        <p>{{ totalCompletions }}</p>
      </div>
      <div class="detail-container">
        <p>:Completed This Year</p>
        <p>{{ totalCompletions }}</p>
      </div>
      <div class="detail-container">
        <p>Total Completions:</p>
        <p>{{ totalCompletions }}</p>
      </div>
      <div class="detail-container">
        <p>First Completed:</p>
        <p>{{ firstCompletionDate }}</p>
      </div>
      <div class="detail-container">
        <p>Last Completed:</p>
        <p>{{ latestCompletedDate }}</p>
      </div>
      <button class="delete-button" @click.stop="deleteHabit">
        <i class="fas fa-trash"></i>
      </button>
    </div>
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
    bestStreak: {
      type: Number,
      default: 0,
    },
    totalCompletions: {
      type: Number,
      default: 0,
    },
    firstCompletionDate: {
      type: String,
      default: "n/a",
    },
    latestCompletedDate: {
      type: String,
      default: "n/a",
    },
    completedWeek: {
      type: Number,
      default: 0,
    },
    completedMonth: {
      type: Number,
      default: 0,
    },
    completedYear: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isCompleted: this.completed,
      showDetails: false,
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
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    playChime() {
      this.chimeSound.play();
    },
    deleteHabit() {
      this.$emit("delete", this.habitName);
    },
  },
};
</script>

<style scoped>
/* Your existing styles remain unchanged */
.habit-card {
  position: relative;
  background: linear-gradient(to right, #4a90e2, #9a74d6);
  padding: 40px 15px;
  margin: 10px 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 100;
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

.habit-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.info-section {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
}

.info-section i {
  font-size: 12px;
}

.streak-section {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.fire-icon {
  color: #f76809;
  font-size: 15px;
}

.streak-count {
  font-size: 15px;
  color: white;
  margin-left: 5px;
}

.details-dropdown {
  font-size: 14px;
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  z-index: 1;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0px;
  padding: 10px 15px 25px 15px;
}

.detail-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: 1px dashed white;
}

.detail-container p {
  margin-bottom: 10px;
  margin-top: 14px;
  color: white;
}

.habit-card.completed::before {
  left: 0;
}

.habit-card.completed {
  color: white;
}

.delete-button {
  position: absolute;
  bottom: 10px;
  left: 5px;
  color: white;
  font-weight: 100;
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>
