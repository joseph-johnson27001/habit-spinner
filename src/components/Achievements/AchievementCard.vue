<template>
  <div class="achievement-card" @click="openModal">
    <img
      :src="`/images/badges/${achievement.reward}`"
      alt="Achievement Badge"
      class="badge-image"
    />
    <h3>{{ achievement.title }}</h3>
    <p v-if="achievement.completed" class="completed-status">Completed</p>
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
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.achievement-card:hover {
  transform: scale(1.05);
}

.badge-image {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.completed-status {
  color: green;
  font-weight: bold;
}
</style>
