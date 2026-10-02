import { gsap } from "./gsap-config";

/**
 * Split text into individual word/character spans for animation
 */
export function splitText(
  element: HTMLElement,
  type: "words" | "chars" = "words"
): HTMLSpanElement[] {
  const text = element.textContent || "";
  element.innerHTML = "";

  if (type === "words") {
    const words = text.split(/\s+/);
    return words.map((word, index) => {
      const span = document.createElement("span");
      span.className = "inline-block";
      span.textContent = word + (index < words.length - 1 ? "\u00A0" : "");
      element.appendChild(span);
      return span;
    });
  } else {
    const chars = text.split("");
    return chars.map((char) => {
      const span = document.createElement("span");
      span.className = "inline-block";
      span.textContent = char === " " ? "\u00A0" : char;
      element.appendChild(span);
      return span;
    });
  }
}

/**
 * Create a reveal animation for text elements
 */
export function createTextReveal(
  elements: HTMLElement[] | NodeListOf<Element>,
  options: {
    y?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
  } = {}
) {
  const { y = 50, duration = 0.8, stagger = 0.02, delay = 0 } = options;

  return gsap.from(elements, {
    y,
    opacity: 0,
    duration,
    stagger,
    delay,
    ease: "power4.out",
  });
}

/**
 * Create a fade-in animation
 */
export function createFadeIn(
  element: HTMLElement | Element,
  options: {
    y?: number;
    duration?: number;
    delay?: number;
  } = {}
) {
  const { y = 30, duration = 0.8, delay = 0 } = options;

  return gsap.from(element, {
    y,
    opacity: 0,
    duration,
    delay,
    ease: "power3.out",
  });
}

/**
 * Create a scale-in animation
 */
export function createScaleIn(
  element: HTMLElement | Element,
  options: {
    scale?: number;
    duration?: number;
    delay?: number;
  } = {}
) {
  const { scale = 0.95, duration = 0.6, delay = 0 } = options;

  return gsap.from(element, {
    scale,
    opacity: 0,
    duration,
    delay,
    ease: "back.out(1.7)",
  });
}

/**
 * Animate a counter number
 */
export function animateCounter(
  element: HTMLElement,
  endValue: number,
  options: {
    duration?: number;
    delay?: number;
  } = {}
) {
  const { duration = 2, delay = 0 } = options;

  return gsap.to(element, {
    textContent: endValue,
    duration,
    delay,
    ease: "power2.out",
    snap: { textContent: 1 },
    onUpdate: function () {
      element.textContent = Math.round(
        parseFloat(element.textContent || "0")
      ).toString();
    },
  });
}

/**
 * Create a line drawing animation for SVG paths
 */
export function createLineReveal(
  path: SVGPathElement,
  options: {
    duration?: number;
    delay?: number;
  } = {}
) {
  const { duration = 1.5, delay = 0 } = options;
  const length = path.getTotalLength();

  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });

  return gsap.to(path, {
    strokeDashoffset: 0,
    duration,
    delay,
    ease: "power2.inOut",
  });
}
