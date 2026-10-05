const bar = document.getElementById("closed-menu");
const menu = document.getElementById("nav");
bar === null || bar === void 0 ? void 0 : bar.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");
    bar.setAttribute("aria-expanded", String(isOpen));
});
const register = document.getElementById("reg-btn");
register === null || register === void 0 ? void 0 : register.addEventListener("click", () => {
    console.log("Regster Clicked");
});
const login = document.getElementById("login");
const signBtn = document.getElementById("sign-btn");
login === null || login === void 0 ? void 0 : login.addEventListener("click", () => {
    console.log("Login Link Clicked");
});
signBtn === null || signBtn === void 0 ? void 0 : signBtn.addEventListener("click", () => {
    console.log("Sign in Button Clicked");
});
export {};
//# sourceMappingURL=index.js.map