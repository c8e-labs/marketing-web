import { gsap, ScrollTrigger, prefersReducedMotion } from "./gsap-config";

/**
 * Initialize scroll progress indicator
 */
export function initScrollProgress() {
  const progressBar = document.querySelector<HTMLElement>(".scroll-progress");

  if (!progressBar) return;

  gsap.to(progressBar, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
    },
  });
}

/**
 * Initialize section reveal animations
 */
export function initSectionReveals() {
  const sections = document.querySelectorAll(".animate-section");

  sections.forEach((section) => {
    const children = section.querySelectorAll(".animate-child");

    gsap.from(section, {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 60,
      duration: prefersReducedMotion ? 0.1 : 0.8,
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    if (children.length > 0) {
      gsap.from(children, {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 40,
        duration: prefersReducedMotion ? 0.1 : 0.6,
        stagger: prefersReducedMotion ? 0 : 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    }
  });
}

/**
 * Initialize process/methodology timeline animation
 */
export function initProcessTimeline() {
  const processSection = document.querySelector(".process-section");
  const steps = document.querySelectorAll(".process-step");

  if (!processSection || steps.length === 0) return;

  steps.forEach((step, index) => {
    const number = step.querySelector(".step-number");
    const title = step.querySelector(".step-title");
    const description = step.querySelector(".step-description");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: step,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate step number
    if (number) {
      tl.from(number, {
        scale: 0,
        opacity: 0,
        duration: prefersReducedMotion ? 0.1 : 0.5,
        ease: "back.out(1.7)",
      });
    }

    // Animate title
    if (title) {
      tl.from(
        title,
        {
          x: prefersReducedMotion ? 0 : -30,
          opacity: 0,
          duration: prefersReducedMotion ? 0.1 : 0.5,
        },
        "-=0.3"
      );
    }

    // Animate description
    if (description) {
      tl.from(
        description,
        {
          y: prefersReducedMotion ? 0 : 20,
          opacity: 0,
          duration: prefersReducedMotion ? 0.1 : 0.5,
        },
        "-=0.3"
      );
    }

    // Add a connecting line animation between steps (except last)
    if (index < steps.length - 1) {
      const connector = step.querySelector(".step-connector");
      if (connector) {
        tl.from(
          connector,
          {
            scaleY: 0,
            transformOrigin: "top center",
            duration: prefersReducedMotion ? 0.1 : 0.4,
          },
          "-=0.2"
        );
      }
    }
  });
}

/**
 * Initialize parallax effects
 */
export function initParallax() {
  if (prefersReducedMotion) return;

  const parallaxElements = document.querySelectorAll("[data-parallax]");

  parallaxElements.forEach((el) => {
    const speed = parseFloat(el.getAttribute("data-parallax") || "0.5");

    gsap.to(el, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

/**
 * Initialize services cards animation
 */
export function initServicesAnimation() {
  const cards = document.querySelectorAll(".service-card");

  cards.forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 50,
      duration: prefersReducedMotion ? 0.1 : 0.7,
      delay: index * 0.15,
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
    });

    // Hover animation setup
    const cardEl = card as HTMLElement;
    cardEl.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    cardEl.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });
}

/**
 * Initialize footer reveal animation
 */
export function initFooterReveal() {
  const footer = document.querySelector(".footer-content");

  if (!footer) return;

  const footerElements = footer.querySelectorAll(".footer-animate");

  gsap.from(footerElements, {
    opacity: 0,
    y: prefersReducedMotion ? 0 : 30,
    duration: prefersReducedMotion ? 0.1 : 0.6,
    stagger: prefersReducedMotion ? 0 : 0.1,
    scrollTrigger: {
      trigger: footer,
      start: "top 90%",
    },
  });
}

/**
 * Refresh ScrollTrigger (call after dynamic content loads)
 */
export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}
