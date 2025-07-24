 var elem = document.getElementById("gm-area");
        function openFullscreen() {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) { 
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        }
        document.addEventListener("DOMContentLoaded", function() {
            const body = document.body;
            if (localStorage.getItem("darkMode") === "true") {
                body.classList.add("dark");
            }
        });
