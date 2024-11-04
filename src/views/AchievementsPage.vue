<template>
  <div class="achievements-page">
    <h1>Achievements</h1>
    <div class="achievements-grid">
      <AchievementCard
        v-for="(achievement, index) in achievements"
        :key="index"
        :achievement="achievement"
        @showModal="showAchievementModal"
      />
    </div>

    <!-- Achievement Modal -->
    <AchievementModal
      v-if="selectedAchievement"
      :achievement="selectedAchievement"
      :completed="selectedAchievement.completed"
      @close="selectedAchievement = null"
    />
  </div>
</template>

<script>
import AchievementCard from "@/components/Achievements/AchievementCard.vue";
import AchievementModal from "@/components/Achievements/AchievementModal.vue";

export default {
  name: "AchievementsPage",
  components: {
    AchievementCard,
    AchievementModal,
  },
  data() {
    return {
      selectedAchievement: null,
      achievements: [
        {
          title: "Habit Newbie",
          description: "Complete your first habit",
          completed: true,
          reward: "first-habit-badge.png",
        },
        {
          title: "Starter Streak",
          description: "Maintain a 3-day streak on a habit",
          completed: false,
          reward: "starter-streak-badge.png",
        },
        // Additional achievements can be added here
      ],
    };
  },
  methods: {
    showAchievementModal(achievement) {
      this.selectedAchievement = achievement;
    },
  },
};
</script>

<style scoped>
.achievements-page {
  padding: 20px;
  text-align: center;
}

.achievements-grid {
  display: grid;
  gap: 20px;
  margin-top: 20px;
}
</style>
