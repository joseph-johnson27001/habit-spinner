<template>
  <div
    :class="[
      'achievement-card',
      { completed: achievement.completed, grayscale: !achievement.completed },
    ]"
    @click="openModal"
    ref="achievementCard"
  >
    <div class="achievement-info">
      <span>{{ achievement.title }}</span>
      <!-- Badge icon in top-right corner -->
      <img
        :src="`/images/badges/${achievement.reward}`"
        alt="Achievement Badge"
        class="badge-image"
      />
    </div>

    <!-- Description below title -->
    <p
      v-if="achievement.completed"
      class="achievement-description completed-status"
    >
      {{ achievement.description }}
    </p>
    <p v-else class="achievement-description">
      {{ achievement.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AchievementCard",
  props: {
    achievement: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openModal() {
      this.$emit("showModal", this.achievement);
    },
  },
};
</script>

<style scoped>
.achievement-card {
  position: relative;
  background: linear-gradient(to right, #4a90e2, #9a74d6);
  padding: 20px 15px;
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
  transition: color 0.3s ease, transform 0.2s;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

.achievement-card.completed {
  color: white;
}

.achievement-card.grayscale {
  filter: grayscale(100%);
}

.badge-image {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0px;
  right: 0px;
}

.achievement-description {
  font-size: 14px;
  color: #f0f0f0;
  margin-top: 10px;
}

.completed-status {
  font-weight: bold;
  color: #f7d451;
}
</style>
