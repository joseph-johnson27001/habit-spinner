<template>
  <div class="profile-page">
    <ProfileHeader :user="user" @edit="editProfile" />
    <!-- <HabitStats :stats="userStats" />
    <AchievementSection :badges="userBadges" />
    <FriendList :friends="userFriends" />
    <ActivityFeed :activities="userActivities" /> -->
  </div>
</template>

<script>
import ProfileHeader from "@/components/Profile/ProfileHeader.vue";
// import HabitStats from "@/components/Profile/HabitStats.vue";
// import AchievementSection from "@/components/Profile/AchievementSection.vue";
// import FriendList from "@/components/Profile/FriendList.vue";
// import ActivityFeed from "@/components/Profile/ActivityFeed.vue";

export default {
  name: "ProfilePage",
  components: {
    ProfileHeader,
    // HabitStats,
    // AchievementSection,
    // FriendList,
    // ActivityFeed,
  },
  data() {
    return {
      user: {
        name: "Joe Johnson",
        bio: "Habit Person",
        profilePicture: "path/to/image.jpg",
      },
      userStats: {
        totalHabits: 100,
        completedHabits: 75,
        streak: 5,
        winPercentage: 80,
      },
      userBadges: ["badge1", "badge2"],
      userFriends: ["friend1", "friend2"],
      userActivities: [
        { habit: "Morning Exercise", date: "2024-10-23" },
        { habit: "Read 30 Minutes", date: "2024-10-22" },
      ],
    };
  },
  methods: {
    editProfile() {
      // Logic to handle profile editing
    },
  },
};
</script>

<style scoped>
.profile-page {
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding: 20px;
}
</style>
