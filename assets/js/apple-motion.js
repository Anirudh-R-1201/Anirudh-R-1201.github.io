(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const revealElements = () => {
    const items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10%", threshold: 0.12 });

    items.forEach((item) => observer.observe(item));
  };

  const enableCardDepth = () => {
    if (reducedMotion.matches || !window.matchMedia("(pointer: fine)").matches) return;

    document.querySelectorAll("[data-depth]").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width;
        const y = (event.clientY - bounds.top) / bounds.height;
        card.style.setProperty("--pointer-x", `${x * 100}%`);
        card.style.setProperty("--pointer-y", `${y * 100}%`);
        card.style.setProperty("--rotate-x", `${(0.5 - y) * 2.5}deg`);
        card.style.setProperty("--rotate-y", `${(x - 0.5) * 2.5}deg`);
      });

      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--rotate-x", "0deg");
        card.style.setProperty("--rotate-y", "0deg");
      });
    });
  };

  const enableNavState = () => {
    const masthead = document.querySelector(".masthead");
    if (!masthead) return;

    const update = () => masthead.classList.toggle("is-scrolled", window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
  };

  const enableThemeKeyboard = () => {
    const toggle = document.querySelector("#theme-toggle a");
    if (!toggle) return;

    toggle.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggle.click();
    });
  };

  const init = () => {
    document.documentElement.classList.add("motion-ready");
    revealElements();
    enableCardDepth();
    enableNavState();
    enableThemeKeyboard();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
