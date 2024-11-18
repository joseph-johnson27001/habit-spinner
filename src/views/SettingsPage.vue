<template>
  <div class="settings-page">
    <div class="profile-section">
      <h2>Profile</h2>

      <!-- Update Name -->
      <div class="setting-item">
        <label for="profile-name">Name:</label>
        <input
          type="text"
          id="profile-name"
          v-model="profile.name"
          placeholder="Enter your name"
        />
      </div>

      <!-- Select Title -->
      <div class="setting-item">
        <label for="profile-title">Title:</label>
        <select id="profile-title" v-model="profile.title">
          <option disabled value="">Select your title</option>
          <option v-for="title in titles" :key="title" :value="title">
            {{ title }}
          </option>
        </select>
      </div>

      <!-- Select Badge -->
      <div class="setting-item">
        <label for="profile-badge">Badge:</label>
        <select id="profile-badge" v-model="profile.badge">
          <option disabled value="">Choose your badge</option>
          <option v-for="badge in badges" :key="badge" :value="badge">
            {{ badge }}
          </option>
        </select>
      </div>
    </div>

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
import { mapMutations } from "vuex";

export default {
  name: "SettingsPage",
  data() {
    return {
      // Profile section data
      profile: {
        name: "",
        title: "",
        badge: "",
      },

      // Available options for titles and badges
      titles: ["Firestarter", "Trailblazer", "Achiever", "Pathfinder"],
      badges: ["Bronze", "Silver", "Gold", "Platinum"],

      // Alert sound setting (from Vuex state)
      alertSounds: this.$store.state.settings.alertSounds,
    };
  },
  methods: {
    ...mapMutations("settings", ["SET_ALERT_SOUNDS"]),

    toggleAlertSounds() {
      // Toggle the alert sounds setting in Vuex
      this.SET_ALERT_SOUNDS(!this.alertSounds);
    },
  },
};
</script>

<style scoped>
.settings-page {
  padding: 20px;
}

.profile-section {
  margin-bottom: 30px;
}

.profile-section h2 {
  margin-bottom: 15px;
}

.setting-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.setting-item label {
  margin-right: 10px;
  flex-shrink: 0;
}

.setting-item input,
.setting-item select {
  flex: 1;
  padding: 5px;
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
