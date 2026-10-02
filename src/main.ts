import "./style.css";
import {
  initHeroAnimations,
  initHighlightEffect,
  initScrollProgress,
  initSectionReveals,
  initProcessTimeline,
  initServicesAnimation,
  initFooterReveal,
  initParallax,
  CustomCursor,
  initMagneticButtons,
  initMarquee,
  refreshScrollTrigger,
  prefersReducedMotion,
} from "./animations";

// Pointer tracking (legacy - kept for compatibility)
document.querySelectorAll(".pointer-wrapper").forEach((node) => {
  const card = node as HTMLElement;
  card.addEventListener("mousemove", function (e: MouseEvent) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

function onDOMReady(callback: () => void) {
  if (document.readyState === "loading") {
    return document.addEventListener("DOMContentLoaded", callback);
  }
  callback();
}

async function loadContent() {
  const contentElements = document.querySelectorAll(".js-content");

  const loadPromises = Array.from(contentElements).map(async (element) => {
    const path = element.getAttribute("data-path");
    if (!path) return;
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load content from ${path}`);
      }
      const data = await response.text();
      element.innerHTML = data;
    } catch (error) {
      console.error("Error loading content:", error);
    }
  });

  await Promise.all(loadPromises);

  // Refresh ScrollTrigger after dynamic content loads
  refreshScrollTrigger();

  // Initialize marquee after brands content loads
  initMarquee();
}

function initAnimations() {
  // Initialize all animation modules
  initHeroAnimations();
  initHighlightEffect();
  initScrollProgress();
  initSectionReveals();
  initProcessTimeline();
  initServicesAnimation();
  initFooterReveal();
  initParallax();
  initMagneticButtons();

  // Initialize custom cursor (disabled on touch devices)
  if (!prefersReducedMotion && !("ontouchstart" in window)) {
    new CustomCursor();
  }
}

onDOMReady(() => {
  // Start animations
  initAnimations();

  // Load dynamic content
  loadContent();
});
