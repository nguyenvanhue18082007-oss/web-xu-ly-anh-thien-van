const menuToggle = document.querySelector(".menu-toggle");
const mainNavigation = document.querySelector(".site-header nav.home");

if (menuToggle && mainNavigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNavigation.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    mainNavigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mainNavigation.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}
