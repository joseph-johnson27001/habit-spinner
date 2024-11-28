<template>
  <button
    class="floating-button"
    :class="{ clicked: isClicked }"
    @click="handleClick"
  >
    +
  </button>
</template>
<script>
export default {
  name: "FloatingHabitButton",
  data() {
    return {
      isClicked: false, // Tracks if the button is clicked
    };
  },
  methods: {
    handleClick() {
      // Trigger the click animation class
      this.isClicked = true;

      // Emit the click event to the parent component
      this.$emit("click");

      // Reset the `isClicked` state after the animation duration (100ms)
      setTimeout(() => {
        this.isClicked = false;
      }, 100); // Match the duration of the CSS transition
    },
  },
};
</script>
<style scoped>
.floating-button {
  position: fixed;
  bottom: 75px;
  right: 15px;
  width: 50px;
  height: 50px;
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
  transition: transform 0.1s linear, box-shadow 0.1s ease-in-out;
}

.floating-button:focus {
  outline: none;
}

/* Haptic-like feedback animation class */
.floating-button.clicked {
  transform: scale(0.9); /* Slightly shrink */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); /* Reduce shadow to create depth */
}
</style>
