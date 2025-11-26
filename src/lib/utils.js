import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind classes
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Glass styling utility for consistent frosted glass effects
 * @param {string} variant - 'base' | 'elevated' | 'strong' | 'dark'
 * @param {object} options - Additional styling options
 */
export function getGlassStyle(variant = "base", options = {}) {
  const {
    rounded = true,
    hover = false,
    shadow = true,
    border = true,
  } = options;

  const baseClasses = {
    base: "bg-white/25 backdrop-blur-xl",
    elevated: "bg-white/30 backdrop-blur-2xl",
    strong: "bg-white/35 backdrop-blur-3xl",
    dark: "bg-gray-900/65 backdrop-blur-xl",
  };

  const borderClasses = border
    ? {
        base: "border border-white/35",
        elevated: "border border-white/40",
        strong: "border border-white/45",
        dark: "border border-white/10",
      }
    : {};

  const shadowClasses = shadow
    ? {
        base: "shadow-lg shadow-black/5",
        elevated: "shadow-xl shadow-black/10",
        strong: "shadow-2xl shadow-black/15",
        dark: "shadow-xl shadow-black/30",
      }
    : {};

  const roundedClass = rounded ? "rounded-3xl" : "";

  const hoverClasses = hover
    ? "transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20 hover:-translate-y-1"
    : "transition-all duration-200";

  return cn(
    baseClasses[variant],
    border && borderClasses[variant],
    shadow && shadowClasses[variant],
    roundedClass,
    hoverClasses
  );
}

/**
 * Generate pastel color for tags/categories
 */
export function getTagColor(tag) {
  const colors = {
    linkedin: "bg-blue-400/20 text-blue-700 border-blue-400/30",
    x: "bg-gray-400/20 text-gray-700 border-gray-400/30",
    twitter: "bg-sky-400/20 text-sky-700 border-sky-400/30",
    career: "bg-violet-400/20 text-violet-700 border-violet-400/30",
    tech: "bg-indigo-400/20 text-indigo-700 border-indigo-400/30",
    design: "bg-pink-400/20 text-pink-700 border-pink-400/30",
    ai: "bg-purple-400/20 text-purple-700 border-purple-400/30",
    startup: "bg-orange-400/20 text-orange-700 border-orange-400/30",
    marketing: "bg-green-400/20 text-green-700 border-green-400/30",
    inspiration: "bg-yellow-400/20 text-yellow-700 border-yellow-400/30",
  };

  // Normalize tag name
  const normalized = tag.toLowerCase().trim();

  // Return specific color or generate one
  return (
    colors[normalized] ||
    "bg-slate-400/20 text-slate-700 border-slate-400/30"
  );
}

/**
 * Format date for display
 */
export function formatDate(date) {
  const d = new Date(date);
  const now = new Date();
  const diffTime = Math.abs(now - d);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return "Today";
  if (diffDays === 2) return "Yesterday";
  if (diffDays <= 7) return `${diffDays} days ago`;
  if (diffDays <= 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays <= 365) return `${Math.floor(diffDays / 30)} months ago`;

  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text, length = 100) {
  if (!text) return "";
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
}

/**
 * Detect platform from URL
 */
export function detectPlatform(url) {
  if (!url) return "unknown";
  
  if (url.includes("linkedin.com")) return "linkedin";
  if (url.includes("twitter.com") || url.includes("x.com")) return "x";
  if (url.includes("github.com")) return "github";
  if (url.includes("medium.com")) return "medium";
  
  return "link";
}

