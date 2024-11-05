<template>
  <div class="profile-header">
    <div class="profile-info">
      <div class="left-container">
        <img
          :src="defaultProfilePic"
          alt="Profile Picture"
          class="profile-pic"
        />
        <div>
          <h2>{{ user.name }}</h2>
          <div class="tagline-container">
            <p class="tagline">
              {{ user.bio }}
            </p>
          </div>
        </div>
      </div>
      <!-- Badge Display -->
      <div class="badge-container">
        <img :src="badgeImage" alt="User Badge" class="badge" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileHeader",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      defaultProfilePic: "/images/Joe_Taj.jpg",
    };
  },
  computed: {
    badgeImage() {
      return "/images/badges/first-habit-badge.png";
    },
  },
  methods: {
    editProfile() {
      this.$emit("edit");
    },
  },
};
</script>

<style scoped>
.profile-header {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0 20px 0px;
  padding: 0 10px;
}

.profile-info {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.left-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid #ccc;
}

h2 {
  margin: 0;
  font-size: 1.6rem;
  font-weight: 100;
}

p {
  margin: 5px 0;
}

.tagline {
  font-style: italic;
}

.tagline-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.badge-container {
  display: flex;
  align-items: center;
}

.badge {
  width: 80px;
  height: 80px;
}

.edit-icon {
  font-size: 15px;
  color: #007bff;
  cursor: pointer;
  margin-left: 8px;
}

.edit-icon:hover {
  color: #0056b3;
}
</style>
