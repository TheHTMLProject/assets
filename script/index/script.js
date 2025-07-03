document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("darkModeToggle");
  const toggleIcon = document.getElementById("modeIcon");
  const body = document.body;

  function enableDarkMode() {
    body.classList.add("dark");
    body.classList.remove("light");
    toggleIcon.textContent = "light_mode";
    document.getElementById("site-logo").src = "https://assets.thehtmlproject.com/img/logodark.png";
    localStorage.setItem("darkMode", "true");
  }

  function disableDarkMode() {
    body.classList.remove("dark");
    body.classList.add("light");
    toggleIcon.textContent = "dark_mode";
    document.getElementById("site-logo").src = "https://assets.thehtmlproject.com/icon.jpeg";
    localStorage.setItem("darkMode", "false");
  }

  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "true") enableDarkMode();
  else if (savedMode === "false") disableDarkMode();
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) enableDarkMode();

  toggleButton.addEventListener("click", () => {
    body.classList.contains("dark") ? disableDarkMode() : enableDarkMode();
  });

  const joinBtn = document.getElementById("discordJoinBtn");
  const checkIcon = document.getElementById("discordCheck");
  const text = document.getElementById("discordText");

  if (localStorage.getItem("joinedDiscord") === "true") {
    joinBtn.style.display = "none";
  }

  let waitingForReturn = false;

  joinBtn.addEventListener("click", () => {
    window.open("https://discord.thehtmlproject.com", "_blank");
    waitingForReturn = true;
    joinBtn.classList.add("blur");
  });

  window.addEventListener("focus", () => {
    if (waitingForReturn) {
      waitingForReturn = false;

      setTimeout(() => {
        text.style.display = "none";
        checkIcon.style.display = "inline-block";
      }, 800);

      setTimeout(() => {
        joinBtn.classList.add("fadeOut");
      }, 1800);

      setTimeout(() => {
        joinBtn.style.display = "none";
        localStorage.setItem("joinedDiscord", "true");
      }, 3000);
    }
  });
});
