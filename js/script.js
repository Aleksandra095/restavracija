function toggleMenu() {

    const menu = document.getElementById("menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

}

// При зміні розміру вікна повертаємо меню до нормального стану
window.addEventListener("resize", function () {

    const menu = document.getElementById("menu");

    if (window.innerWidth > 768) {
        menu.style.display = "";
    }

});