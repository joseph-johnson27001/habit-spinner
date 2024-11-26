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
import { mapGetters, mapActions } from "vuex";
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
    };
  },
  computed: {
    ...mapGetters("achievements", ["achievementsList"]),
    achievements() {
      return this.achievementsList;
    },
  },
  methods: {
    ...mapActions("achievements", ["fetchAchievements"]),
    showAchievementModal(achievement) {
      this.selectedAchievement = achievement;
    },
  },
  mounted() {
    this.fetchAchievements();
  },
};
</script>

<style scoped>
.achievements-page {
  padding: 0px 10px 60px 10px;
  text-align: center;
}
</style>
