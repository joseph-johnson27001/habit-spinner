<template>
  <div class="settings-page">
    <!-- Navigation Bar -->
    <div class="navigation">
      <button
        :class="{ active: currentTab === 'profile' }"
        @click="currentTab = 'profile'"
      >
        <i class="fa fa-user"></i> Profile
      </button>
      <button
        :class="{ active: currentTab === 'alerts' }"
        @click="currentTab = 'alerts'"
      >
        <i class="fa fa-bell"></i> Alerts
      </button>
      <button
        :class="{ active: currentTab === 'account' }"
        @click="currentTab = 'account'"
      >
        <i class="fa fa-cogs"></i> Account
      </button>
    </div>

    <!-- Profile Section -->
    <div v-if="currentTab === 'profile'" class="profile-section">
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

    <!-- Alerts Section -->
    <div v-if="currentTab === 'alerts'" class="alerts-section">
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

    <!-- Account Section -->
    <div v-if="currentTab === 'account'" class="account-section">
      <p>Account settings will go here.</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "SettingsPage",
  data() {
    return {
      // Tab selection for navigation
      currentTab: "profile", // Default tab is 'profile'

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

/* Navigation Bar Styles */
.navigation {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: calc(100%); /* Full width minus 20px padding on both sides */
  max-width: 500px; /* Max width for the nav */
  margin: 0 auto; /* Center it horizontally */
  padding-bottom: 20px;
}

.navigation button {
  padding: 10px 0;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: color 0.3s ease;
  border-bottom: 2px solid #ccc; /* Default border bottom */
  flex: 1; /* Buttons will take up equal space */
  text-align: center;
}

.navigation button .fa {
  margin-right: 8px;
}

.navigation button.active {
  border-bottom: 2px solid #9a74d6; /* Active button purple border */
}

/* Remove space between the buttons */
.navigation button:not(:last-child) {
  margin-right: 0;
}

/* Profile Section */
.profile-section {
  margin-bottom: 30px;
}

/* Setting Items */
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
