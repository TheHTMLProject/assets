document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const siteLogo = document.getElementById("site-logo");

    function applyDarkMode() {
        body.classList.add("dark");
        body.classList.remove("light");
        siteLogo.src = "https://assets.greenrcode.com/img/logodark.png";
    }

    function applyLightMode() {
        body.classList.remove("dark");
        body.classList.add("light");
        siteLogo.src = "https://assets.greenrcode.com/icon.jpeg";
    }


    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');


    if (prefersDarkMode.matches) {
        applyDarkMode();
    } else {
        applyLightMode();
    }


    prefersDarkMode.addEventListener('change', (event) => {
        if (event.matches) {
            applyDarkMode();
        } else {
            applyLightMode();
        }
    });
});
