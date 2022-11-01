import { Router } from "./router.js";

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

const hamburguer = document.querySelector(".galaxy");
const navmenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navmenu.classList.toggle("active");
});

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (hamburguer.classList.contains("active")) {
      hamburguer.classList.remove("active");
      navmenu.classList.remove("active");
    }
  });
});
