import { gsap } from "./gsap-config";

/**
 * Initialize infinite scroll marquee for brand logos
 */
export function initMarquee() {
  const marqueeContainers = document.querySelectorAll(".marquee-container");

  marqueeContainers.forEach((container) => {
    const track = container.querySelector<HTMLElement>(".marquee-track");
    if (!track) return;

    // Clone content for seamless loop
    const content = track.innerHTML;
    track.innerHTML = content + content;

    // Calculate animation duration based on content width
    const contentWidth = track.scrollWidth / 2;
    const duration = contentWidth / 50; // Speed: 50px per second

    // Create infinite scroll animation
    const animation = gsap.to(track, {
      x: -contentWidth,
      duration,
      ease: "none",
      repeat: -1,
    });

    // Pause on hover
    container.addEventListener("mouseenter", () => {
      gsap.to(animation, { timeScale: 0, duration: 0.5 });
    });

    container.addEventListener("mouseleave", () => {
      gsap.to(animation, { timeScale: 1, duration: 0.5 });
    });
  });
}

/**
 * Initialize reverse marquee (scrolls opposite direction)
 */
export function initReverseMarquee() {
  const marqueeContainers = document.querySelectorAll(
    ".marquee-container-reverse"
  );

  marqueeContainers.forEach((container) => {
    const track = container.querySelector<HTMLElement>(".marquee-track");
    if (!track) return;

    // Clone content for seamless loop
    const content = track.innerHTML;
    track.innerHTML = content + content;

    // Calculate animation
    const contentWidth = track.scrollWidth / 2;
    const duration = contentWidth / 50;

    // Start from negative position and scroll right
    gsap.set(track, { x: -contentWidth });

    const animation = gsap.to(track, {
      x: 0,
      duration,
      ease: "none",
      repeat: -1,
    });

    // Pause on hover
    container.addEventListener("mouseenter", () => {
      gsap.to(animation, { timeScale: 0, duration: 0.5 });
    });

    container.addEventListener("mouseleave", () => {
      gsap.to(animation, { timeScale: 1, duration: 0.5 });
    });
  });
}
