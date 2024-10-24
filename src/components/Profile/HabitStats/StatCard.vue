<template>
  <div class="stat-card" :style="{ backgroundColor: bgColor }">
    <div class="stat-title">{{ title }}</div>
    <div class="stat-value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "StatCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    bgColor: {
      type: String,
      default: "#ffffff", // Default to white if no color is provided
    },
  },
};
</script>

<style scoped>
.stat-card {
  border-radius: 10px;
  padding: 20px 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  transition: background-color 0.3s ease;
  color: white;
  font-weight: 100;
}

.stat-title {
  font-size: 1.2rem;
  text-align: left;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
