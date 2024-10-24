<template>
  <div class="activity-feed">
    <h3>Recent Activity</h3>
    <ul>
      <li v-for="activity in activities" :key="activity.date">
        {{ activity.habit }} on {{ activity.date }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ActivityFeed",
  props: {
    activities: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.activity-feed {
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
