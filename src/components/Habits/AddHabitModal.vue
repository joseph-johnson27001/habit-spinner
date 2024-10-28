<!-- AddHabitModal.vue -->
<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal-content">
      <h2>Add New Habit</h2>
      <input
        v-model="newHabitName"
        type="text"
        placeholder="Enter habit name"
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
  background: linear-gradient(to right, #4a90e2, #9a74d6);
  padding: 30px;
  border-radius: 12px;
  width: 300px;
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
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  margin-bottom: 20px;
  background: white;
  color: #333;
  font-family: inherit;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
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
  background: #4caf50;
  color: white;
}

.add-button:hover {
  background: #45a049;
}
</style>
