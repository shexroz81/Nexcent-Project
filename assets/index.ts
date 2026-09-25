const bar = document.getElementById("closed-menu") as HTMLDivElement;
const menu = document.getElementById("nav") as HTMLElement;

bar?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("active");
  bar.setAttribute("aria-expanded", String(isOpen));
});
