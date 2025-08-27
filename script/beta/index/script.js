 document.addEventListener("DOMContentLoaded", function () {
      const siteLogo = document.getElementById("site-logo");
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        siteLogo.src = "https://assets.thehtmlproject.com/img/logodark.png";
      }

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
          siteLogo.src = "https://assets.thehtmlproject.com/img/logodark.png";
        } else {
          siteLogo.src = "https://assets.thehtmlproject.com/icon.jpeg";
        }
      });
    });
