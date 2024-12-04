<template>
  <div class="profile-section">
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
      <div class="custom-dropdown">
        <div class="dropdown-header" @click="toggleTitleDropdown">
          <span>{{ profile.title || "Select your title" }}</span>
          <span class="arrow" :class="{ rotate: isTitleOpen }"></span>
        </div>
        <div v-if="isTitleOpen" class="dropdown-list">
          <div
            v-for="title in titles"
            :key="title"
            class="dropdown-item"
            @click="selectTitle(title)"
          >
            <span>{{ title }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Select Badge -->
    <div class="setting-item">
      <label for="profile-badge">Badge:</label>
      <div class="custom-dropdown">
        <div class="dropdown-header" @click="toggleBadgeDropdown">
          <span>{{ profile.badge || "Choose your badge" }}</span>
          <span class="arrow" :class="{ rotate: isBadgeOpen }"></span>
        </div>
        <div v-if="isBadgeOpen" class="dropdown-list">
          <div
            v-for="badge in badges"
            :key="badge.title"
            class="dropdown-item"
            @click="selectBadge(badge)"
          >
            <div class="dropdown-item-content">
              <img :src="`/images/badges/${badge.reward}`" alt="badge" />
              <span>{{ badge.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Example Save Button -->
    <div class="setting-item">
      <button class="save-button" @click="saveChanges">Save Changes</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProfileSettings",
  data() {
    return {
      profile: {
        name: "",
        title: "",
        badge: "",
      },
      titles: ["Firestarter", "Trailblazer", "Achiever", "Pathfinder"],
      isTitleOpen: false,
      isBadgeOpen: false,
    };
  },
  computed: {
    ...mapGetters({
      achievements: "achievements/achievementsList",
    }),
    badges() {
      return this.achievements.filter((achievement) => achievement.completed);
    },
  },
  methods: {
    toggleTitleDropdown() {
      this.isTitleOpen = !this.isTitleOpen;
      this.isBadgeOpen = false; // Close badge dropdown if it's open
    },
    toggleBadgeDropdown() {
      this.isBadgeOpen = !this.isBadgeOpen;
      this.isTitleOpen = false; // Close title dropdown if it's open
    },
    selectTitle(title) {
      this.profile.title = title;
      this.isTitleOpen = false;
    },
    selectBadge(badge) {
      this.profile.badge = badge.title;
      this.isBadgeOpen = false;
    },
    saveChanges() {
      console.log("Profile changes saved:", this.profile);
      // Implement save logic here
    },
  },
};
</script>

<style scoped>
/* Font Style */
body {
  font-family: "Baloo 2", sans-serif;
}

.profile-section {
  text-align: left;
  width: 100%;
}

.setting-item {
  margin-bottom: 10px;
}

/* Label Styling */
label {
  font-weight: 500;
  font-size: 16px;
  color: #2f4a92;
}

/* Input and Select Styling */
input[type="text"] {
  width: 100%;
  padding: 15px 10px;
  border-radius: 6px;
  border: 1px solid #2f4a92;
  font-size: 16px;
  outline: none;
  color: #2f4a92;
  margin-top: 5px;
  margin-bottom: 10px;
}

input[type="text"] {
  padding-left: 15px;
}

/* Placeholder Text Style */
input::placeholder {
  color: #6a80a1;
  opacity: 1;
  font-weight: 400;
  font-size: 16px;
}

/* Custom Dropdown Styling */
.custom-dropdown {
  position: relative;
  width: 100%;
}

.dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #2f4a92;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
}

.arrow {
  border: solid #2f4a92;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  transition: transform 0.3s;
}

.arrow.rotate {
  transform: rotate(-135deg);
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.dropdown-item-content {
  display: flex;
  align-items: center;
}

.dropdown-item img {
  width: 20px;
  height: 20px;
  object-fit: contain;
  margin-right: 10px;
}

.dropdown-item span {
  font-size: 16px;
  color: #2f4a92;
}

/* Save Button Styling */
.save-button {
  position: relative;
  background: linear-gradient(to right, #ff5e87, #fca066);
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 10px;
  border: none;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-size: 16px;
  text-transform: capitalize;
  color: #fff;
  cursor: pointer;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  width: 100%;
}
</style>
