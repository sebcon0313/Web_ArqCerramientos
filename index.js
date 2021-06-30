const navBars = document.querySelector(".nav__bars")
const links = document.querySelector(".links")

navBars.addEventListener("click", () => {
    links.classList.toggle("nav__menu_visible");
})

