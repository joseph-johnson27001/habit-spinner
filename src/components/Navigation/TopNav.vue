<template>
  <nav class="top-nav">
    <div class="top-nav-content">
      <!-- Left side: Daily habits completed -->
      <div class="habits-completed">
        <span> {{ habitsCompleted }} / {{ totalHabits }}</span>
      </div>

      <!-- Center: Heading -->
      <h1>HABIT SPINNER</h1>

      <div class="win-percentage">
        <span>{{ winPercentage }} %</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      totalHabits: 10,
      habitsCompleted: 0,
      winPercentage: 5,
    };
  },
};
</script>

<style scoped>
.top-nav {
  width: 100%;
  background: transparent;
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ccc;
}

.top-nav-content {
  max-width: 1200px;
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 5px 20px;
}

.habits-completed,
.win-percentage {
  font-size: 1rem;
}

h1 {
  font-weight: 100;
  color: #333333;
}
</style>
