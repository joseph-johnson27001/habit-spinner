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
input[type="text"],
select {
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
  position: relative;
  background: linear-gradient(to right, #ff5e87, #fca066);
  padding: 40px 15px;
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
