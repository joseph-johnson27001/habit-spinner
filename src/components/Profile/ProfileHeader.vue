<template>
  <div class="profile-header">
    <div class="profile-info">
      <img :src="defaultProfilePic" alt="Profile Picture" class="profile-pic" />
      <div>
        <h2>{{ user.name }}</h2>
        <div class="tagline-container">
          <p class="tagline">
            {{ user.bio }}
            <i class="fa fa-pencil-alt edit-icon" @click="editProfile"></i>
          </p>
        </div>
      </div>
      <!-- Pencil icon -->
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
  margin-bottom: 20px;
  flex-direction: column;
  width: 100%;
}

.profile-info {
  align-items: center;
  display: flex;
  flex-direction: row;
}

.profile-pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
  border: 1px solid #ccc;
}

.profile-info {
  text-align: left;
  flex-grow: 1;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
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
