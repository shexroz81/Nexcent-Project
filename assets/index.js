var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function load() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch("../assets/app.json");
            const data = yield res.json();
            data.forEach((item) => {
                var _a;
                const stat = new Info(item.icon, item.num, item.text);
                (_a = document.getElementById("info-stats")) === null || _a === void 0 ? void 0 : _a.appendChild(stat.render());
            });
        }
        catch (err) {
            console.error(err);
        }
    });
}
load();
export {};
//# sourceMappingURL=index.js.map