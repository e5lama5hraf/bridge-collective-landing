const ICONS = {
    open: "assets/images/icon-menu.svg",
    close: "assets/images/icon-close.svg",
};

const toggle = document.querySelector(".menu-toggle");
const toggleIcon = document.querySelector("img");
const menu = document.querySelector("#menu");
const overlay = document.querySelector(".overlay");

function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
}

function setMenu (open) {
    menu.classList.toggle("is-open", open);
    overlay.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);

    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggleIcon.src = open ? ICONS.close : ICONS.open;
}

toggle.addEventListener("click", () => setMenu(!isOpen()));

overlay.addEventListener("click", () => setMenu(false));

menu.addEventListener("click", () => {
    if (event.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
        setMenu(false);
        toggle.focus();
    }
});