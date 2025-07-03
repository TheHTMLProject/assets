           document.addEventListener("DOMContentLoaded", function () {
    const currentMessage = "This website is just an embedded preview of the real thing. Fullscreening games will not work. If you would like to see my website at its full functionality, please visit https://thehtmlproject.com"; 

    if (localStorage.getItem("popupMessage") !== currentMessage) {
        alert(currentMessage);
        localStorage.setItem("popupMessage", currentMessage);
    }
});
