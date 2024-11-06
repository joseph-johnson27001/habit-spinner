<template>
  <div v-if="show" class="modal-overlay" @click.self.stop="cancel">
    <div class="modal-content">
      <button class="close-button" @click.stop="cancel">×</button>
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this habit?</p>
      <div class="modal-actions">
        <button @click.stop="confirmDelete" class="modal-button delete-button">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteHabitModal",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    confirmDelete() {
      this.$emit("confirm-delete");
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
  background: #c0392b;
  padding: 30px;
  border-radius: 12px;
  width: 80%;
  max-width: 400px;
  text-align: left;
  color: white;
}

h2 {
  margin: 0 0 20px;
  font-weight: 100;
}

.modal-actions {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.modal-button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-family: inherit;
}

.delete-button {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
}
</style>
