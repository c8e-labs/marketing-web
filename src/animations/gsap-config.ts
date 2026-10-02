import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Check for reduced motion preference
export const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Global GSAP defaults
gsap.defaults({
  ease: "power3.out",
  duration: 0.8,
});

// Configure ScrollTrigger defaults
ScrollTrigger.defaults({
  toggleActions: "play none none reverse",
});

// Disable animations if user prefers reduced motion
if (prefersReducedMotion) {
  gsap.globalTimeline.timeScale(20);
  ScrollTrigger.defaults({
    toggleActions: "play none none none",
  });
}

export { gsap, ScrollTrigger };
