<template>
  <nav class="top-nav">
    <div class="top-nav-content">
      <h2>Habit Spinner</h2>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style scoped>
.top-nav {
  width: 100%;
  background-color: #003366;
  position: relative;
  z-index: 100;
  position: fixed;
  top: 0;
}

.top-nav-content {
  max-width: 1200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
}
</style>
