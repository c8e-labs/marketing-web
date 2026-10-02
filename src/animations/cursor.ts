import { gsap } from "./gsap-config";

/**
 * Custom cursor follower
 */
export class CustomCursor {
  private cursor: HTMLElement | null = null;
  private cursorInner: HTMLElement | null = null;
  private mouseX = 0;
  private mouseY = 0;
  private cursorX = 0;
  private cursorY = 0;
  private isVisible = false;
  private isHovering = false;

  constructor() {
    // Don't initialize on touch devices
    if ("ontouchstart" in window) return;

    this.createCursor();
    this.addEventListeners();
    this.animate();
  }

  private createCursor() {
    // Create outer cursor (follower)
    this.cursor = document.createElement("div");
    this.cursor.className = "custom-cursor";
    this.cursor.innerHTML = `
      <div class="cursor-outer"></div>
      <div class="cursor-inner"></div>
    `;
    document.body.appendChild(this.cursor);

    this.cursorInner = this.cursor.querySelector(".cursor-inner");

    // Hide default cursor on interactive elements
    const style = document.createElement("style");
    style.textContent = `
      .cursor-hover { cursor: none !important; }
      .cursor-hover * { cursor: none !important; }
    `;
    document.head.appendChild(style);
  }

  private addEventListeners() {
    // Track mouse position
    document.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      if (!this.isVisible) {
        this.isVisible = true;
        gsap.to(this.cursor, { opacity: 1, duration: 0.3 });
      }
    });

    // Hide cursor when leaving window
    document.addEventListener("mouseleave", () => {
      this.isVisible = false;
      gsap.to(this.cursor, { opacity: 0, duration: 0.3 });
    });

    // Handle hover states
    const hoverTargets = document.querySelectorAll(
      'a, button, [role="button"], .cursor-hover'
    );

    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => this.onHoverEnter());
      target.addEventListener("mouseleave", () => this.onHoverLeave());
    });

    // Handle click feedback
    document.addEventListener("mousedown", () => this.onClick());
    document.addEventListener("mouseup", () => this.onRelease());
  }

  private animate() {
    // Smooth follow with lerp
    const ease = 0.15;

    const loop = () => {
      this.cursorX += (this.mouseX - this.cursorX) * ease;
      this.cursorY += (this.mouseY - this.cursorY) * ease;

      if (this.cursor) {
        this.cursor.style.transform = `translate(${this.cursorX}px, ${this.cursorY}px)`;
      }

      requestAnimationFrame(loop);
    };

    loop();
  }

  private onHoverEnter() {
    this.isHovering = true;
    gsap.to(this.cursor?.querySelector(".cursor-outer"), {
      scale: 1.5,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(this.cursorInner, {
      scale: 0.5,
      duration: 0.3,
      ease: "power2.out",
    });
  }

  private onHoverLeave() {
    this.isHovering = false;
    gsap.to(this.cursor?.querySelector(".cursor-outer"), {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(this.cursorInner, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }

  private onClick() {
    gsap.to(this.cursor?.querySelector(".cursor-outer"), {
      scale: 0.8,
      duration: 0.1,
    });
  }

  private onRelease() {
    gsap.to(this.cursor?.querySelector(".cursor-outer"), {
      scale: this.isHovering ? 1.5 : 1,
      duration: 0.2,
    });
  }

  // Public method to update hover targets after dynamic content loads
  public refreshHoverTargets() {
    const hoverTargets = document.querySelectorAll(
      'a, button, [role="button"], .cursor-hover'
    );

    hoverTargets.forEach((target) => {
      target.removeEventListener("mouseenter", () => this.onHoverEnter());
      target.removeEventListener("mouseleave", () => this.onHoverLeave());
      target.addEventListener("mouseenter", () => this.onHoverEnter());
      target.addEventListener("mouseleave", () => this.onHoverLeave());
    });
  }
}

/**
 * Magnetic button effect
 */
export function initMagneticButtons() {
  const magneticElements = document.querySelectorAll(".magnetic");

  magneticElements.forEach((el) => {
    const element = el as HTMLElement;

    element.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      });
    });
  });
}
