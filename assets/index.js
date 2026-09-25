const bar = document.getElementById("closed-menu");
const menu = document.getElementById("nav");
bar === null || bar === void 0
  ? void 0
  : bar.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("active");
      bar.setAttribute("aria-expanded", String(isOpen));
    });
export {};
//# sourceMappingURL=index.js.map
