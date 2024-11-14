<template>
  <div class="flame-intensity-bar">
    <div class="intensity-fill" :style="{ width: `${intensity}%` }"></div>
  </div>
</template>

<script>
export default {
  props: {
    intensity: {
      type: Number,
      required: true,
      default: 0,
    },
  },
};
</script>

<style scoped>
.flame-intensity-bar {
  width: 100%;
  height: 20px;
  border-radius: 10px;
  background-color: #f5c6a5;
  overflow: hidden;
  margin-top: 10px;
}

.intensity-fill {
  height: 100%;
  border-radius: 10px;
  background: linear-gradient(90deg, #ff7e33, #ff4b1f);
  transition: width 0.3s ease-in-out;
}
</style>
