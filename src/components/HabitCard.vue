<template>
  <label
    :class="['habit-card', { completed: isCompleted }]"
    @click="toggleCompletion"
  >
    <span>{{ habitName }}</span>
    <input type="checkbox" v-model="isCompleted" @change="toggleCompletion" />
  </label>
</template>

<script>
export default {
  name: "HabitCard",
  props: {
    habitName: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isCompleted: this.completed,
    };
  },
  methods: {
    toggleCompletion() {
      this.isCompleted = !this.isCompleted; // Toggle the completion state
      this.$emit("update", this.isCompleted); // Emit the change to the parent
    },
  },
};
</script>

<style scoped>
.habit-card {
  background-color: #007bff; /* Initial blue */
  padding: 30px 15px;
  margin: 10px 0;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  font-size: 16px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  justify-content: space-between;
}

.habit-card.completed {
  background-color: #28a745;
}

.habit-label {
  display: flex;
  align-items: center;
  cursor: pointer;

  width: 100%;
}

input[type="checkbox"] {
  margin-right: 10px;
  cursor: pointer;
}
</style>
