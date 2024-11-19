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
.profile-section {
  text-align: left;
  width: 100%;
}
</style>
