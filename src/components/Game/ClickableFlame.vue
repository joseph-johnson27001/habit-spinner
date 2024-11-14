<template>
  <div class="clickable-flame" @click="handleClick">
    <img src="/images/fire-solid.svg" alt="Flame" class="flame-icon" />
  </div>
</template>

<script>
export default {
  emits: ["flame-click"],
  methods: {
    handleClick() {
      this.$emit("flame-click");
    },
  },
};
</script>

<style scoped>
.clickable-flame {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.flame-icon {
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: transform 0.2s;
}

.flame-icon:hover {
  transform: scale(1.1); /* slight zoom on hover */
}
</style>
