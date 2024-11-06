<template>
  <div v-if="show" class="modal-overlay" @click.self="cancel">
    <div class="modal-content">
      <button class="close-button" @click="cancel">×</button>

      <h2>Add New Habit</h2>
      <input
        ref="habitInput"
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
  mounted() {
    if (this.show) {
      this.focusInput();
    }
  },
  watch: {
    show(newValue) {
      if (newValue) {
        this.focusInput();
      }
    },
  },
  methods: {
    focusInput() {
      this.$refs.habitInput.focus();
    },
    addHabit() {
      const trimmedHabitName = this.newHabitName.trim();
      if (trimmedHabitName === "") return;
      this.$emit("add-habit", trimmedHabitName);
      this.newHabitName = "";
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
  margin-bottom: 40vh;
  position: relative;
  background: linear-gradient(to right, #4a90e2, #9a74d6);
  padding: 30px;
  border-radius: 12px;
  width: 80%;
  max-width: 500px;
  max-height: 300px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  color: white;
}

h2 {
  margin: 0 0 20px;
  font-weight: 100;
  font-family: "Baloo 2", sans-serif;
}

.habit-input {
  width: 90%;
  padding: 10px 20px;
  border: 1px solid #4a90e2;
  border-radius: 8px;
  font-size: 18px;
  outline: none;
  background: linear-gradient(to right, #ffffff, #f4f6f8);
  color: #2f4a92;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, border 0.3s ease;
  font-family: "Baloo 2", sans-serif;
  font-weight: 600;
  margin-bottom: 20px;
}

.habit-input::placeholder {
  color: #6a80a1;
  opacity: 1;
  font-weight: 400;
}

.habit-input:focus {
  border: 1px solid #4a90e2;
  background: linear-gradient(to right, #ffffff, #f0f4ff);
  color: #2f4a92;
}

.habit-input:hover {
  border: 1px solid #9a74d6;
  box-shadow: 0 4px 15px rgba(154, 116, 214, 0.3),
    inset 0 0 8px rgba(154, 116, 214, 0.15);
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
