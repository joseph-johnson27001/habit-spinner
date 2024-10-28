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
      />
      <div class="modal-actions">
        <button @click="addHabit">Add Habit</button>
        <button @click="cancel">Cancel</button>
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
        // Emit an event with the new habit name and reset input
        this.$emit("add-habit", this.newHabitName);
        this.newHabitName = "";
      }
    },
    cancel() {
      // Emit an event to close the modal without adding a habit
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
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}

.modal-actions {
  margin-top: 15px;
}

button {
  margin: 5px;
}
</style>
