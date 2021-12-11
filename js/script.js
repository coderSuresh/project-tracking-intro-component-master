var menu = document.getElementById("menu-icon");
var clicked = false;

var menuItem = document.getElementById("navigation");

menu.addEventListener("click", () => {
    if (!clicked) {
        menu.src = "https://github.com/coderSuresh/project-tracking-intro-component-master/blob/main/images/icon-close.svg";
        menuItem.style.display = "flex";
        clicked = true;
    }
    else {
        menu.src = "https://github.com/coderSuresh/project-tracking-intro-component-master/blob/main/images/icon-hamburger.svg";
        menuItem.style.display = "none";
        clicked = false;
    }
});
