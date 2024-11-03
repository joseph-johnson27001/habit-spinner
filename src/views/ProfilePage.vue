<template>
  <div class="profile-page">
    <ProfileHeader :user="user" @edit="editProfile" />
    <HabitStats :stats="userStats" />
  </div>
</template>

<script>
import ProfileHeader from "@/components/Profile/ProfileHeader.vue";
import HabitStats from "@/components/Profile/HabitStats/HabitStats.vue";

export default {
  name: "ProfilePage",
  components: {
    ProfileHeader,
    HabitStats,
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
        bestStreak: 10, // Add best streak
        weeklyCompleted: 10, // Add weekly completed
        monthlyCompleted: 30, // Add monthly completed
        yearlyCompleted: 200, // Add yearly completed
        winPercentage: 80,
      },

      userBadges: ["badge1", "badge2"],
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
  padding: 10px 10px 80px 10px;
}
</style>
