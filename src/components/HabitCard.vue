<!-- HabitCard.vue -->
<template>
  <div :class="['habit-card', { completed: isCompleted }]">
    <label class="habit-label">
      <span>{{ habitName }}</span>
      <input type="checkbox" v-model="isCompleted" @change="toggleCompletion" />
    </label>
  </div>
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
  border-radius: 5px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  border: 1px solid white;
}

.habit-card.completed {
  background-color: #28a745; /* Green when completed */
}

.habit-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  width: 100%;
}

input[type="checkbox"] {
  margin-right: 10px;
}
</style>
