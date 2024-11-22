function toggleMenu() {
    console.log("Menu toggle function called")
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".humberger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}