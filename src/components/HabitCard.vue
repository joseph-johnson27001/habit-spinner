<template>
  <label
    :class="['habit-card', { completed: isCompleted }]"
    @click="toggleCompletion"
  >
    <span>{{ habitName }}</span>
    <input
      type="checkbox"
      v-model="isCompleted"
      @change="toggleCompletion"
      class="custom-checkbox"
    />
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
      this.isCompleted = !this.isCompleted;
      this.$emit("update", this.isCompleted);
    },
  },
};
</script>

<style scoped>
.habit-card {
  position: relative;
  background-color: #4a90e2;
  padding: 40px 15px;
  margin: 10px 0;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  cursor: pointer;
  justify-content: space-between;
  transition: color 0.3s ease;
}

.habit-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #4caf50;
  transition: left 0.3s ease;
  z-index: 0;
}

.habit-card span {
  position: relative;
  z-index: 1;
}

input[type="checkbox"] {
  margin-left: 10px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #4a90e2;
  border-radius: 4px;
  background-color: white;
  transition: background-color 0.1s 0.2s ease, border-color 0.1s 0.2s ease;
}

input[type="checkbox"]:checked {
  background-color: #4caf50;
  border-color: #4caf50;
}

input[type="checkbox"]:checked::after {
  content: "✓";
  color: white;
  position: absolute;
  top: 0;
  left: 2px;
  font-size: 16px;
}

.habit-card.completed::before {
  left: 0;
}

.habit-card.completed {
  color: white;
}
</style>
