<template>
  <div
    :class="[
      'habit-card',
      { completed: completed, 'show-details-padding': shouldShowDetails },
    ]"
    @click="toggleCompletion"
    ref="habitCard"
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
    <div v-if="shouldShowDetails" class="details-dropdown">
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
        <p>{{ completedWeek }}</p>
      </div>
      <div class="detail-container">
        <p>Completed This Month:</p>
        <p>{{ completedMonth }}</p>
      </div>
      <div class="detail-container">
        <p>Completed This Year:</p>
        <p>{{ completedYear }}</p>
      </div>
      <div class="detail-container">
        <p>Total Completions:</p>
        <p>{{ totalCompletions }}</p>
      </div>
      <div class="detail-container">
        <p>First Completed:</p>
        <p v-if="firstCompletionDate">{{ firstCompletionDate }}</p>
        <p v-else>N/A</p>
      </div>
      <div class="detail-container">
        <p>Last Completed:</p>
        <p v-if="latestCompletedDate">{{ latestCompletedDate }}</p>
        <p v-else>N/A</p>
      </div>
      <button class="delete-button" @click.stop="showDeleteModal = true">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    <DeleteHabitModal
      v-if="showDeleteModal"
      :show="showDeleteModal"
      @confirm-delete="confirmDeleteHabit"
      @close="showDeleteModal = false"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DeleteHabitModal from "@/components/Habits/DeleteHabitModal.vue";

export default {
  name: "HabitCard",
  props: {
    habitName: String,
    completed: Boolean,
    streak: Number,
    bestStreak: Number,
    totalCompletions: Number,
    firstCompletionDate: String,
    latestCompletedDate: String,
    completedWeek: Number,
    completedMonth: Number,
    completedYear: Number,
    habitIndex: Number,
    showDetailsIndex: Number,
  },
  components: {
    DeleteHabitModal,
  },
  data() {
    return {
      chimeSound: new Audio(require("@/assets/chime.mp3")),
      showDeleteModal: false,
    };
  },
  computed: {
    shouldShowDetails() {
      return this.habitIndex === this.showDetailsIndex;
    },
    ...mapGetters("settings", ["getAlertSettings"]), // Mapping Vuex getter
  },
  methods: {
    ...mapActions("habits", [
      "completeHabit",
      "uncompleteHabit",
      "deleteHabitAction",
    ]),

    toggleCompletion() {
      if (!this.completed) {
        // Only play chime if alert sounds are enabled
        if (this.getAlertSettings) {
          this.playChime();
        }
        this.completeHabit(this.habitIndex);
      } else {
        this.uncompleteHabit(this.habitIndex);
      }
    },

    async confirmDeleteHabit() {
      this.deleteHabitAction(this.habitIndex);
      this.showDeleteModal = false;
      this.toggleDetails();
    },
    toggleDetails() {
      this.$emit("setShowDetailsIndex", this.habitIndex);
      this.scrollToCard();
    },
    scrollToCard() {
      this.$nextTick(() => {
        if (this.$refs.habitCard) {
          const cardPosition =
            this.$refs.habitCard.getBoundingClientRect().top +
            window.scrollY -
            74; // Offset
          window.scrollTo({
            top: cardPosition,
            behavior: "smooth",
          });
        }
      });
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
  flex-direction: column;
  font-size: 16px;
  font-weight: 100;
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

/* Extra padding when details are shown */
.habit-card.show-details-padding {
  padding-top: 30px;
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
