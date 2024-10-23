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
  display: flex;
  justify-content: center;
}

.top-nav-content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
