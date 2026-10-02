import { gsap, prefersReducedMotion } from "./gsap-config";
import { splitText } from "./utils";

/**
 * Initialize hero section animations
 */
export function initHeroAnimations() {
  const heroTitle = document.querySelector<HTMLElement>(".hero-title");
  const heroDescription = document.querySelector(".hero-description");
  const heroAccent = document.querySelector(".hero-accent");
  const heroSubtext = document.querySelector(".hero-subtext");

  if (!heroTitle) return;

  // Create master timeline for hero animations
  const tl = gsap.timeline({
    defaults: {
      ease: "power4.out",
    },
  });

  // Split and animate hero title
  const words = splitText(heroTitle, "words");

  // Set initial state
  gsap.set(words, { y: 120, opacity: 0 });
  gsap.set([heroDescription, heroSubtext], { y: 40, opacity: 0 });
  gsap.set(heroAccent, { scaleX: 0, transformOrigin: "left center" });

  // Build animation sequence
  tl.to(words, {
    y: 0,
    opacity: 1,
    duration: prefersReducedMotion ? 0.1 : 1,
    stagger: prefersReducedMotion ? 0 : 0.08,
  })
    .to(
      heroAccent,
      {
        scaleX: 1,
        duration: prefersReducedMotion ? 0.1 : 0.8,
        ease: "power2.inOut",
      },
      "-=0.4"
    )
    .to(
      heroDescription,
      {
        y: 0,
        opacity: 1,
        duration: prefersReducedMotion ? 0.1 : 0.8,
      },
      "-=0.4"
    )
    .to(
      heroSubtext,
      {
        y: 0,
        opacity: 1,
        duration: prefersReducedMotion ? 0.1 : 0.8,
      },
      "-=0.6"
    );

  return tl;
}

/**
 * Initialize the "Applied Innovation" highlight effect
 */
export function initHighlightEffect() {
  const highlight = document.querySelector(".text-highlight");

  if (!highlight) return;

  // Create a subtle glow/pulse effect
  gsap.to(highlight, {
    textShadow: "0 0 20px rgba(97, 222, 180, 0.5)",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
}

/**
 * Initialize floating/breathing effect for hero elements
 */
export function initFloatingEffect() {
  const floatingElements = document.querySelectorAll(".hero-floating");

  floatingElements.forEach((el, index) => {
    gsap.to(el, {
      y: -10,
      duration: 2 + index * 0.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.2,
    });
  });
}
