<template>
  <button class="floating-button" @click="onClick">+</button>
</template>

<script>
export default {
  name: "FloatingHabitButton",
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.floating-button {
  position: fixed;
  bottom: 75px;
  right: 15px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(145deg, #4a90e2, #9a74d6);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #fff;
  border: none;
  cursor: pointer;
  z-index: 1000;
  border: 2px solid #eee;
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transition for hover/active states */
}

.floating-button:focus {
  outline: none;
}
</style>
