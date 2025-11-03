// === NAV MOBILE ===
const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const iconMenuOpen = document.getElementById("icon-menu-open");
const iconMenuClose = document.getElementById("icon-menu-close");

navToggle?.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    const isOpen = !isHidden;
    navToggle.setAttribute("aria-expanded", String(isOpen));
    iconMenuOpen.classList.toggle("hidden", isOpen);
    iconMenuClose.classList.toggle("hidden", !isOpen);
});

mobileMenu?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        navToggle.setAttribute("aria-expanded", "false");
        iconMenuOpen.classList.remove("hidden");
        iconMenuClose.classList.add("hidden");
    });
});

// theme (desktop + mobile)
const themeBtnDesktop = document.getElementById("theme-toggle");
const themeBtnMobile = document.getElementById("theme-toggle-mobile");

const iconSunDesk = document.getElementById("icon-sun");
const iconMoonDesk = document.getElementById("icon-moon");
const iconSunMob = document.getElementById("icon-sun-m");
const iconMoonMob = document.getElementById("icon-moon-m");

function applyThemeIcons(isDark) {
    // desktop
    iconSunDesk?.classList.toggle("hidden", !isDark);
    iconMoonDesk?.classList.toggle("hidden", isDark);
    // mobile
    iconSunMob?.classList.toggle("hidden", !isDark);
    iconMoonMob?.classList.toggle("hidden", isDark);
}

// Tema inicial
let saved = localStorage.getItem("theme");
if (!saved) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    saved = prefersDark ? "dark" : "light";
}
document.documentElement.classList.toggle("dark", saved === "dark");
applyThemeIcons(saved === "dark");

// Clicks
function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    applyThemeIcons(isDark);
}
themeBtnDesktop?.addEventListener("click", toggleTheme);
themeBtnMobile?.addEventListener("click", toggleTheme);

