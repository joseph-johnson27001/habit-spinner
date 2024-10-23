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
  justify-content: center; /* Center the logo */
  align-items: center; /* Center vertically */
  background-color: #003366; /* Dark blue background */
  color: white; /* Text color */
  padding: 10px 0; /* Padding around the bar */
  width: 100%; /* Full width */
}

.logo {
  font-size: 1.5em; /* Adjust logo font size */
  font-weight: bold; /* Make logo text bold */
}
</style>
