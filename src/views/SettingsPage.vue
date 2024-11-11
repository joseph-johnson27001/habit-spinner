<template>
  <div class="settings-page">
    <!-- Toggle for Alert Sounds -->
    <div class="setting-item">
      <label for="alert-sounds-toggle">Enable Chime Sound:</label>
      <input
        type="checkbox"
        id="alert-sounds-toggle"
        :checked="alertSounds"
        @change="toggleAlertSounds"
      />
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
</style>
