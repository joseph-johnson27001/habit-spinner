<template>
  <div class="friend-list">
    <h3>Friends</h3>
    <ul>
      <li v-for="friend in friends" :key="friend">{{ friend }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FriendList",
  props: {
    friends: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.friend-list {
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
