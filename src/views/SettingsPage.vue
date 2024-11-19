<template>
  <div class="settings-page">
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

    <ProfileSettings v-if="currentTab === 'profile'" />

    <div v-if="currentTab === 'alerts'" class="alerts-section">
      <AlertSettings />
    </div>

    <div v-if="currentTab === 'account'" class="account-section">
      <AccountSettings />
    </div>
  </div>
</template>

<script>
import ProfileSettings from "@/components/Settings/ProfileSettings.vue";
import AccountSettings from "@/components/Settings/AccountSettings.vue";
import AlertSettings from "@/components/Settings/AlertSettings.vue";

export default {
  name: "SettingsPage",
  components: {
    ProfileSettings,
    AccountSettings,
    AlertSettings,
  },
  data() {
    return {
      currentTab: "profile",
    };
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
  width: calc(100%);
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 20px;
}

.navigation button {
  font-family: "Baloo 2", sans-serif;
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
  border-bottom: 2px solid #ccc;
  flex: 1;
  text-align: center;
}

.navigation button .fa {
  margin-right: 8px;
}

.navigation button.active {
  border-bottom: 2px solid #24b2da;
}

.navigation button:not(:last-child) {
  margin-right: 0;
}
</style>
