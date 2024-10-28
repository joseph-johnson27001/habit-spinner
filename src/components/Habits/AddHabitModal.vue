<!-- AddHabitModal.vue -->
<template>
  <div v-if="show" class="modal-overlay" @click.self="cancel">
    <div class="modal-content">
      <!-- Close Button (X) -->
      <button class="close-button" @click="cancel">×</button>

      <h2>Add New Habit</h2>
      <input
        v-model="newHabitName"
        type="text"
        placeholder="Enter Habit Name"
        @keyup.enter="addHabit"
        class="habit-input"
      />
      <div class="modal-actions">
        <button @click="addHabit" class="modal-button add-button">
          Add Habit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddHabitModal",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      newHabitName: "",
    };
  },
  methods: {
    addHabit() {
      if (this.newHabitName.trim()) {
        this.$emit("add-habit", this.newHabitName);
        this.newHabitName = "";
      }
    },
    cancel() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: linear-gradient(to right, #4a90e2, #9a74d6);
  padding: 30px;
  border-radius: 12px;
  width: 80%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  color: white;
  font-family: Arial, sans-serif;
}

h2 {
  margin: 0 0 20px;
  font-weight: 100;
}

.habit-input {
  width: 100%;
  padding: 15px;
  border: 1px solid #2f4a92;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  margin-bottom: 20px;
  background: white;
  color: #333;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.habit-input::placeholder {
  color: #999;
}

.modal-actions {
  display: flex;
  justify-content: center;
}

.modal-button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: inherit;
}

.add-button {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 15px 15px;
  border-radius: 10px;
  transition: transform 0.2s ease, background-color 0.3s ease;
}

.add-button:hover {
  transform: scale(1.03); /* Slight size increase on hover */
}

/* Close Button Styling */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #ccc;
}
</style>
