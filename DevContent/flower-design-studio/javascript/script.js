const lightDarkMode = document.getElementById("light-dark-mode");
const popUpMenu = document.getElementById("hamburger-menu");

lightDarkMode.addEventListener("click", () => {
    document.getElementById("light-dark-mode-switch").style.left = "24px";
    document.querySelector("body").style.backgroundColor = "#000";

    if (document.getElementById("light-dark-mode-switch").style.left = "24px") {
        lightDarkMode.addEventListener("click", () => {
            document.getElementById("light-dark-mode-switch").style.left = "3px";
            document.querySelector("body").style.backgroundColor = "#ffe4e4";
        });
    }
});

popUpMenu.addEventListener("click", () => {
    document.getElementById("flower-pop-up-container").style.bottom = "0";
    document.querySelector("span:nth-child(1)").style.rotate = "25deg";
    document.querySelector("span:nth-child(1)").style.width = "30px";
    document.querySelector("span:nth-child(1)").style.top = "6px";
    document.querySelector("span:nth-child(1)").style.position = "relative";
    document.querySelector("span:nth-child(2)").style.opacity = "0";
    document.querySelector("span:nth-child(3)").style.bottom = "6px";
    document.querySelector("span:nth-child(3)").style.position = "relative";
    document.querySelector("span:nth-child(3)").style.rotate = "-25deg";
    document.querySelector("span:nth-child(3)").style.width = "30px";

    if (document.getElementById("flower-pop-up-container").style.bottom = "0") {
        popUpMenu.addEventListener("click", () => {
        document.getElementById("flower-pop-up-container").style.bottom = "-100%";
        document.querySelector("span:nth-child(1)").style.rotate = "0deg";
        document.querySelector("span:nth-child(1)").style.width = "15px";
        document.querySelector("span:nth-child(1)").style.position = "unset";
        document.querySelector("span:nth-child(2)").style.opacity = "100%";
        document.querySelector("span:nth-child(3)").style.position = "unset";
        document.querySelector("span:nth-child(3)").style.rotate = "0deg";
        document.querySelector("span:nth-child(3)").style.width = "18px";
        });
    }
});

