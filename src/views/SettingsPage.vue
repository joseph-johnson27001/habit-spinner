<template>
  <div class="settings-page">
    <!-- Toggle for Alert Sounds -->
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
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "SettingsPage",
  computed: {
    ...mapGetters("settings", ["getAlertSettings"]),

    // Computed property to reflect the current alert sound setting
    alertSounds() {
      return this.$store.state.settings.alertSounds;
    },
  },
  methods: {
    ...mapMutations("settings", ["SET_ALERT_SOUNDS"]),

    toggleAlertSounds() {
      this.SET_ALERT_SOUNDS(!this.alertSounds);
      console.log(this.$store.state.settings.alertSounds);
    },
  },
};
</script>

<style scoped>
.settings-page {
  padding: 20px;
}

.setting-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.setting-item label {
  margin-right: 10px;
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
  background-color: #4caf50;
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
