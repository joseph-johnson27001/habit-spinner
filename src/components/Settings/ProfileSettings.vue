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

    <!-- Example Save Button -->
    <div class="setting-item">
      <button class="save-button">Save Changes</button>
    </div>
  </div>
</template>

<script>
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
      badges: ["Bronze", "Silver", "Gold", "Platinum"],
    };
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
  padding: 20px;
}

.setting-item {
  margin-bottom: 20px;
}

/* Label Styling */
label {
  font-weight: 500;
  font-size: 16px;
  color: #2f4a92;
}

/* Input and Select Styling */
input[type="text"],
select {
  width: 100%;
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid #2f4a92;
  font-size: 16px;
  outline: none;
  color: #2f4a92;
  margin-top: 5px;
  margin-bottom: 10px;
}

/* Placeholder Text Style */
input::placeholder {
  color: #6a80a1;
  opacity: 1;
  font-weight: 400;
  font-size: 16px;
}

/* Select Styling */
select {
  background-color: #fff;
  cursor: pointer;
}

select option {
  font-size: 14px;
}

/* Save Button Styling */
.save-button {
  font-size: 18px;
  padding: 10px 20px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.save-button:hover {
  background-color: #2f4a92;
}

/* Responsive Styles */
@media (max-width: 600px) {
  .profile-section {
    padding: 15px;
  }

  input[type="text"],
  select {
    padding: 10px 12px;
  }

  .save-button {
    width: 100%;
  }
}
</style>
