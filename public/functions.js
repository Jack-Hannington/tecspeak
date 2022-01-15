// Navbar
const navButton = document.querySelector("button");
const navDismiss = document.querySelector("#nav-dismiss");
const menu = document.querySelector(".menu-container");
navDismiss.addEventListener("click", () => {
  menu.classList.remove("show-mobile-menu");
});
navButton.addEventListener("click", () => {
  menu.classList.add("show-mobile-menu");
});
