function togglemenu() {
    const menu = document.querySelector(".menu-links"); // Select the menu links element
    const icon = document.querySelector(".hamburger-icon"); // Select the hamburger icon element
    menu.classList.toggle("open"); // Toggle the 'open' class on the menu to show/hide it
    icon.classList.toggle("open"); // Toggle the 'open' class on the icon to animate it
}

