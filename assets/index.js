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
class Info {
    constructor(icon, num, text) {
        this.icon = icon;
        this.num = num;
        this.text = text;
    }
    render() {
        const div = document.createElement("div");
        div.classList.add("info-stat");
        const iconEl = document.createElement("i");
        iconEl.className = this.icon;
        const innerDiv = document.createElement("div");
        innerDiv.innerHTML = `
    <strong>${this.num}</strong>
    <span>"${this.text}</span>
    `;
        div.appendChild(iconEl);
        div.appendChild(innerDiv);
        return div;
    }
}
const stats = [
    new Info("fa-solid fa-users", 2245341, "Members"),
    new Info("fa-solid fa-chart-line", 46328, "Growth"),
    new Info("fa-solid fa-building", 1200, "Clients"),
    new Info("fa-solid fa-calendar", 365, "Days"),
];
stats.forEach((stat) => {
    var _a;
    (_a = document.getElementById("info-stats")) === null || _a === void 0 ? void 0 : _a.appendChild(stat.render());
});
export {};
//# sourceMappingURL=index.js.map