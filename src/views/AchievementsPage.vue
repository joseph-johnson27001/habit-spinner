<template>
  <div class="achievements-page">
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
          reward: "first-habit-badge.png",
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
  padding: 0px 10px 60px 10px;
  text-align: center;
}
</style>
