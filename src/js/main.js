const hamMenu = document.querySelector(".bx-menu-alt-right");
const mobileNav = document.querySelector(".mobile-nav");
hamMenu.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-nav-open");
  hamMenu.classList.toggle("bx-x");
});
