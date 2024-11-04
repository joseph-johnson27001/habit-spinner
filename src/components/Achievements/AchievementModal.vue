<template>
  <div class="achievement-modal-overlay" @click.self="close">
    <div class="achievement-modal">
      <button class="close-button" @click="close">X</button>
      <img
        :src="`/images/badges/${achievement.reward}`"
        alt="Achievement Badge"
        class="modal-badge-image"
      />
      <h2>{{ achievement.title }}</h2>
      <p>{{ achievement.description }}</p>
      <p v-if="completed" class="status completed">Status: Completed</p>
      <p v-else class="status in-progress">Status: In Progress</p>
      <p v-if="completed">Completed On: {{ achievement.completedDate }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AchievementModal",
  props: {
    achievement: {
      type: Object,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    completedDate: {
      type: String,
      default: null,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.achievement-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.achievement-modal {
  background: white;
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.modal-badge-image {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

.status {
  font-weight: bold;
}

.completed {
  color: green;
}

.in-progress {
  color: red;
}
</style>
