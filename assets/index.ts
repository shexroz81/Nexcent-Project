const bar = document.getElementById("closed-menu") as HTMLDivElement;
const menu = document.getElementById("nav") as HTMLElement;

bar?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("active");
  bar.setAttribute("aria-expanded", String(isOpen));
});

const register = document.getElementById("reg-btn") as HTMLButtonElement;
register?.addEventListener("click", () => {
  console.log("Regster Clicked");
});

const login = document.getElementById("login") as HTMLAnchorElement;
const signBtn = document.getElementById("sign-btn") as HTMLButtonElement;

login?.addEventListener("click", () => {
  console.log("Login Link Clicked");
});

signBtn?.addEventListener("click", () => {
  console.log("Sign in Button Clicked");
});
