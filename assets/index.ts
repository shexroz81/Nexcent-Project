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

class Info {
  private icon: string;
  private num: number;
  private text: string;
  constructor(icon: string, num: number, text: string) {
    this.icon = icon;
    this.num = num;
    this.text = text;
  }
  render(): HTMLDivElement {
    const div = document.createElement("div") as HTMLDivElement;
    div.classList.add("info-stat");

    const iconEl = document.createElement("i") as HTMLElement;
    iconEl.className = this.icon;

    const innerDiv = document.createElement("div") as HTMLDivElement;
    innerDiv.innerHTML = `
    <strong>${this.num}</strong>
    <span>"${this.text}</span>
    `;

    div.appendChild(iconEl);
    div.appendChild(innerDiv);
    return div;
  }
}

async function load(): Promise<void> {
  try {
    const res = await fetch("../assets/app.json");
    const data = await res.json();
    data.forEach((item: any) => {
      const stat = new Info(item.icon, item.num, item.text);
      document.getElementById("info-stats")?.appendChild(stat.render());
    });
  } catch (err) {
    console.error(err);
  }
}

load();
