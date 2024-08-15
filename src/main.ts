import "./style.css";

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

function loadContent() {
  const contentElements = document.querySelectorAll(".js-content");
  contentElements.forEach(async (element) => {
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
}

onDOMReady(loadContent);
