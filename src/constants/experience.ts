interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  dateRange: string;
  points: string[];
  icon: string;
  color: string;
}

export const experiences: ExperienceItem[] = [
  {
    title: "Software Development Engineer Intern",
    company: "Koinx",
    location: "Bhubaneswar, India",
    period: "May 2025 - July 2025",
    dateRange: "May 2025 - July 2025",
    points: [
      "Developed a scalable, modular frontend for a crypto tax platform, reducing feature rollout time by 40%.",
      "Implemented BlurHash for image placeholders, improving load speed and perceived performance by 25%.",
      "Integrated modern formats (WebP, AVIF) reducing total image size by 30% and increasing Lighthouse score by 20%.",
      "Built affiliate onboarding system via admin dashboard, boosting user acquisition by 15%."
    ],
    icon: "💼",
    color: "from-secondary to-secondary/50"
  },
  {
    title: "Software Development Engineer Intern",
    company: "Electrohire",
    location: "Remote",
    period: "July 2024 - September 2024",
    dateRange: "July 2024 - Sep 2024",
    points: [
      "Enhanced a large-scale production web app by adding 10+ features and resolving 50+ high-priority bugs.",
      "Integrated Stripe API for seamless global payments in 20+ countries.",
      "Collaborated across time zones in Agile sprints, contributing to a 30% increase in user base.",
      "Optimized backend infrastructure, reducing server response times by 20% for 10,000+ concurrent users."
    ],
    icon: "🔧",
    color: "from-secondary to-secondary/50"
  },
  {
    title: "Freelance Web Developer",
    company: "Luco Homes",
    location: "Remote",
    period: "March 2024",
    dateRange: "March 2024",
    points: [
      "Developed a responsive website for a pre-engineered housing startup using React and Node.js.",
      "Reduced server response time by 40% through performance optimization and lazy loading.",
      "Built flexible content modules for dynamic blog posts, testimonials, and FAQs to streamline admin control."
    ],
    icon: "🧑‍🎨",
    color: "from-secondary to-secondary/50"
  }
];