<template>
  <div class="achievement-modal-overlay" @click.self="close">
    <div :class="['achievement-modal', { greyscale: !completed }]">
      <button class="close-button" @click="close">X</button>
      <img
        :src="`/images/badges/${achievement.reward}`"
        alt="Achievement Badge"
        class="modal-badge-image"
      />
      <h2>{{ achievement.title }}</h2>
      <p>{{ achievement.description }}</p>

      <p v-if="completed" class="completed-date">
        Completed On: {{ achievement.completedDate }}
      </p>
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
  background: linear-gradient(to right, #4a90e2, #9a74d6);
  padding: 10px;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  text-align: center;
  position: relative;
  color: white;
  transition: filter 0.3s ease;
}

.achievement-modal.greyscale {
  background: #848388;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: white;
}

h2 {
  margin: 0px;
}

.modal-badge-image {
  width: 80px;
  height: 80px;
}

.status {
  font-weight: bold;
}

.completed {
  color: #f7d451;
}

.completed-date {
  color: #f7d451;
}

.in-progress {
  color: red;
}
</style>
