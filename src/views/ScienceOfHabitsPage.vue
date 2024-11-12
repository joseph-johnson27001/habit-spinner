<template>
  <div class="science-of-habits-page">
    <h1>{{ title }}</h1>
    <p>{{ introduction }}</p>

    <!-- Loop through all sections -->
    <section
      v-for="(section, index) in sections"
      :key="index"
      class="habit-section"
    >
      <h2>{{ section.title }}</h2>
      <p>{{ section.content }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "ScienceOfHabits",
  data() {
    return {
      title: "The Science of Making Habits",
      introduction:
        "Building good habits is more than just motivation. It involves understanding the science behind habit formation. In this section, we’ll explore how habits form, how you can make them stick, and how our app helps you along the way.",
      sections: [
        {
          title: "How Habits Are Formed",
          content:
            "Habits are behaviors that become automatic through repetition. They start with a cue, followed by a routine, and end with a reward. Over time, this loop strengthens, making the behavior easier to repeat without conscious thought. Neuroscience shows that the brain forms habits through a process called 'chunking'—essentially grouping a series of behaviors into a single action to make them easier to execute.",
        },
        {
          title: "The Habit Loop",
          content:
            "The habit loop consists of three components: cue, routine, and reward. A cue triggers the behavior, which is the routine, and finally, the reward reinforces it, creating a positive feedback loop. Over time, your brain becomes wired to expect the reward when the cue appears, making the habit automatic. It’s the reason why we often engage in habits without thinking about them.",
        },
        {
          title: "How Our App Helps You Build Habits",
          content:
            "Our app is designed to help you form good habits by providing tools to track your progress, set goals, and reward yourself along the way. With customizable habit tracking, reminders, and a reward system to celebrate milestones, you’ll have everything you need to stay on track. Visual cues, such as progress bars and streaks, also keep you motivated, reinforcing the habit loop.",
        },
        {
          title: "The Importance of Consistency",
          content:
            "Consistency is key to habit formation. Studies show that it takes, on average, 66 days for a new behavior to become automatic. With our app, you can track your daily progress and see how your consistency pays off. Small wins over time build the momentum needed to make your habits stick, turning them into lasting routines.",
        },
      ],

      // Get started section
      getStartedTitle: "Get Started Today",
      getStartedContent:
        "Now that you know the science behind habit formation, it’s time to take action. Start building your habits today by choosing one you want to focus on. Our app will help you track your progress and stay motivated every step of the way.",
      getStartedText: "Get Started",
      getStartedLink: "/habit-tracking", // link to the habit tracking page
    };
  },
};
</script>

<style scoped>
.science-of-habits-page {
  font-family: "Baloo 2", sans-serif;
  color: #333;
  text-align: justify;
  padding: 0px 10px 60px 10px;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  text-align: left;
  margin-bottom: 20px;
  padding-top: 0px;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.habit-section {
  margin-bottom: 40px;
}

.habit-section h2 {
  text-align: left;
  font-size: 1.8rem;
  color: #4a90e2; /* Accent color for section titles */
  margin-bottom: 15px;
}

.habit-section p {
  color: #555;
}
</style>
