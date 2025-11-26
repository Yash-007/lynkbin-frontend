/**
 * Application Constants and Configuration
 */

// Navigation Items
export const NAV_ITEMS = [
  {
    id: "home",
    label: "All Links",
    path: "/",
    icon: "Home",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    path: "/linkedin",
    icon: "Linkedin",
  },
  {
    id: "x",
    label: "X / Twitter",
    path: "/x",
    icon: "Twitter",
  },
  {
    id: "paste",
    label: "Add Link",
    path: "/paste",
    icon: "Plus",
    highlight: true,
  },
  {
    id: "settings",
    label: "Settings",
    path: "/settings",
    icon: "Settings",
    divider: true,
  },
];

// Filter Options
export const FILTER_OPTIONS = {
  timeRange: [
    { value: "all", label: "All Time" },
    { value: "today", label: "Today" },
    { value: "week", label: "This Week" },
    { value: "month", label: "This Month" },
    { value: "year", label: "This Year" },
  ],
  platforms: [
    { value: "all", label: "All Platforms" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "x", label: "X / Twitter" },
    { value: "github", label: "GitHub" },
    { value: "medium", label: "Medium" },
  ],
  sortBy: [
    { value: "recent", label: "Most Recent" },
    { value: "oldest", label: "Oldest First" },
    { value: "starred", label: "Starred" },
    { value: "title", label: "Title A-Z" },
  ],
};

// Tag Colors
export const TAG_COLORS = [
  { name: "Blue", value: "blue" },
  { name: "Violet", value: "violet" },
  { name: "Pink", value: "pink" },
  { name: "Green", value: "green" },
  { name: "Yellow", value: "yellow" },
  { name: "Orange", value: "orange" },
  { name: "Gray", value: "gray" },
];

// Popular Tags
export const POPULAR_TAGS = [
  "linkedin",
  "career",
  "tech",
  "ai",
  "design",
  "startup",
  "marketing",
  "inspiration",
  "tutorial",
  "news",
];

// Settings Sections
export const SETTINGS_SECTIONS = [
  {
    id: "profile",
    label: "Profile",
    icon: "User",
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: "Palette",
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: "Bell",
  },
  {
    id: "privacy",
    label: "Privacy & Security",
    icon: "Shield",
  },
  {
    id: "data",
    label: "Data & Export",
    icon: "Database",
  },
  {
    id: "about",
    label: "About",
    icon: "Info",
  },
];

// Mock Data - Sample Posts
export const MOCK_POSTS = [
  {
    id: "1",
    title: "The Future of AI in Software Development",
    description: "Exploring how AI tools are transforming the way we write code and build applications.",
    url: "https://linkedin.com/posts/example-1",
    platform: "linkedin",
    tags: ["ai", "tech", "career"],
    date: new Date("2024-01-15"),
    starred: true,
    image: null,
  },
  {
    id: "2",
    title: "10 UI Design Principles Every Developer Should Know",
    description: "A comprehensive guide to creating beautiful and functional user interfaces.",
    url: "https://x.com/designpro/status/12345",
    platform: "x",
    tags: ["design", "ui", "tutorial"],
    date: new Date("2024-01-14"),
    starred: false,
    image: null,
  },
  {
    id: "3",
    title: "Startup Lessons: Year One in Review",
    description: "Reflections on building a startup from scratch - the good, the bad, and the lessons learned.",
    url: "https://linkedin.com/posts/founder-story",
    platform: "linkedin",
    tags: ["startup", "inspiration", "career"],
    date: new Date("2024-01-12"),
    starred: true,
    image: null,
  },
  {
    id: "4",
    title: "The Art of Technical Writing",
    description: "How to write documentation that developers actually want to read.",
    url: "https://medium.com/@techwriter/art-of-docs",
    platform: "medium",
    tags: ["tech", "tutorial", "career"],
    date: new Date("2024-01-10"),
    starred: false,
    image: null,
  },
  {
    id: "5",
    title: "Marketing Strategies for B2B SaaS in 2024",
    description: "Proven tactics to grow your SaaS business in a competitive market.",
    url: "https://linkedin.com/posts/marketing-guru",
    platform: "linkedin",
    tags: ["marketing", "startup", "saas"],
    date: new Date("2024-01-08"),
    starred: false,
    image: null,
  },
  {
    id: "6",
    title: "Building in Public: Month 3 Update",
    description: "Sharing our journey, metrics, and learnings from building our product in public.",
    url: "https://x.com/buildinpublic/status/67890",
    platform: "x",
    tags: ["startup", "inspiration", "transparency"],
    date: new Date("2024-01-05"),
    starred: true,
    image: null,
  },
];

// Animation Variants (for Framer Motion)
export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

// Export all as default
export default {
  NAV_ITEMS,
  FILTER_OPTIONS,
  TAG_COLORS,
  POPULAR_TAGS,
  SETTINGS_SECTIONS,
  MOCK_POSTS,
  ANIMATION_VARIANTS,
};

