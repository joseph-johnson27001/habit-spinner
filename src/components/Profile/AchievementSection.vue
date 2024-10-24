<template>
  <div class="achievements">
    <h3>Achievements</h3>
    <ul>
      <li v-for="badge in badges" :key="badge">{{ badge }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AchievementsSection",
  props: {
    badges: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.achievements {
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
h3 {
  margin-bottom: 10px;
}
</style>
