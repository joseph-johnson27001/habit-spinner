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
      this.isClicked = true;
      setTimeout(() => {
        this.isClicked = false; // Reset the animation state // Emit the event to open the modal
      }, 100); // Match this to the animation duration (200ms)
    },
  },
};
</script>
<style scoped>
.floating-button {
  position: fixed;
  bottom: 70px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(to right, #ff5f6d, #df982f);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
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

/* Animation feedback for button click */
.floating-button.clicked {
  transform: scale(0.9); /* Slightly shrink */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); /* Reduce shadow to create depth */
}
</style>
