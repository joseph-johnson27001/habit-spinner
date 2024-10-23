<template>
  <div class="top-bar">
    <div class="logo">Habit Spinner</div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style>
.top-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #003366;
  color: white;
  padding: 10px 0;
  width: 100%;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
