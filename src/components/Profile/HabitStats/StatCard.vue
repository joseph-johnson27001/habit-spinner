<template>
  <div class="stat-card" :style="{ background: bg }">
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
    bg: {
      type: String,
      default: "#ffffff",
    },
  },
};
</script>

<style scoped>
.stat-card {
  border-radius: 10px;
  padding: 20px 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  color: white;
  font-weight: 100;
}

.stat-title {
  font-size: 1rem;
  text-align: left;
}

.stat-value {
  font-weight: 100;
}
</style>
