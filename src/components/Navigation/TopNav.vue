<template>
  <nav class="top-nav">
    <div class="top-nav-content">
      <!-- Left side: Daily habits completed -->
      <div class="habits-completed">
        <span> {{ habitsCompleted }} / {{ totalHabits }}</span>
      </div>

      <!-- Center: Heading -->
      <h2>habito</h2>

      <div class="streak-info">
        <span>{{ streak }} </span>
        <i class="fa fa-fire" aria-hidden="true"></i>
        <!-- Color can be adjusted -->
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
}

.top-nav-content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 5px 20px;
}

.habits-completed,
.streak-info {
  display: flex;
  align-items: center;
}

h2 {
  font-weight: 100;
}

i {
  font-size: 1.4rem;
  margin-left: 8px;
  color: #f76809;
}
</style>
