<template>
  <nav class="top-nav">
    <div class="top-nav-content">
      <!-- Left side: Daily habits completed -->
      <div class="side-section habits-completed">
        <span> {{ habitsCompleted }} / {{ totalHabits }}</span>
      </div>

      <!-- Center: Heading -->
      <div class="center-section">
        <h2>Ember</h2>
      </div>

      <!-- Right side: Streak info -->
      <div class="side-section streak-info">
        <span>{{ streak }} </span>
        <i class="fa fa-fire" aria-hidden="true"></i>
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
      streak: 5,
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
  background: linear-gradient(135deg, #3a66d0, #6aafe6);
  border-bottom: 1px solid #2f4a92;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  height: 60px;
  text-align: center;
}

.top-nav-content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  color: white;
}

.habits-completed,
.streak-info {
  display: flex;
  align-items: center;
}

.side-section {
  flex: 1;
  display: flex;
  justify-content: start;
}

.streak-info {
  justify-content: end;
}

.center-section {
  flex-shrink: 0;
}

h2 {
  font-family: "Baloo 2", sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
  text-align: center;
  font-size: 2rem;
  margin: 0;
}

i {
  font-size: 1.4rem;
  margin-left: 8px;
  color: #f76809;
}
</style>
