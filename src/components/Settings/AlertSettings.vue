<template>
  <!-- Toggle for Alert Sounds -->
  <div class="settings-container">
    <div class="setting-item">
      <label for="alert-sounds-toggle">Enable Chime Sound:</label>
      <div @click="toggleAlertSounds" class="toggle-switch">
        <input
          type="checkbox"
          id="alert-sounds-toggle"
          :checked="alertSounds"
        />
        <span class="slider"></span>
      </div>
    </div>

    <div class="setting-item">
      <label for="alert-sounds-toggle">Show Streaks / Totals:</label>
      <div @click="toggleStreaksTotals" class="toggle-switch">
        <input
          type="checkbox"
          id="alert-sounds-toggle"
          :checked="alertSounds"
        />
        <span class="slider"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      alertSounds: this.$store.state.settings.alertSounds,
    };
  },
  methods: {
    ...mapMutations("settings", ["SET_ALERT_SOUNDS"]),
    toggleAlertSounds() {
      this.SET_ALERT_SOUNDS(!this.alertSounds);
    },
    toggleStreaksTotals() {
      // ADD LOGIC HERE
    },
  },
};
</script>

<style scoped>
/* Setting Items */

.settings-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
}

.setting-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: space-between;
}

.setting-item label {
  margin-right: 10px;
  flex-shrink: 0;
  color: #2f4a92;
}

.setting-item input,
.setting-item select {
  flex: 1;
  padding: 5px;
}

/* Toggle Switch Styling */
.toggle-switch {
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;
}

.toggle-switch input {
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
}

.toggle-switch .slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px;
  z-index: 1;
}

.toggle-switch input:checked + .slider {
  background-color: #9a74d6;
}

.toggle-switch .slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

.toggle-switch input:checked + .slider:before {
  transform: translateX(14px);
}
</style>
