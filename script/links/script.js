document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const siteLogo = document.getElementById("site-logo");

    function applyDarkMode() {
        body.classList.add("dark");
        body.classList.remove("light");
        siteLogo.src = "https://assets.thehtmlproject.com/img/logodark.png";
    }

    function applyLightMode() {
        body.classList.remove("dark");
        body.classList.add("light");
        siteLogo.src = "https://assets.thehtmlproject.com/icon.jpeg";
    }

    if (localStorage.getItem("darkMode") === "true") {
        applyDarkMode();
    } else {
        applyLightMode();
    }
});
