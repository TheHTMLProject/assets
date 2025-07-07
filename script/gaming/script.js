document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const categories = document.querySelectorAll(".category");

  if (searchInput) {
    searchInput.addEventListener("input", function() {
      const query = searchInput.value.toLowerCase();
      categories.forEach(category => {
        const links = category.querySelectorAll("a");
        let hasMatch = false;
        links.forEach(link => {
          if (link.textContent.toLowerCase().includes(query)) {
            link.style.display = "block";
            hasMatch = true;
          } else {
            link.style.display = "none";
          }
        });
        category.style.display = hasMatch ? "block" : "none";
      });
    });
  }

  const logo = document.getElementById("logo");

  function updateLogo() {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    logo.src = darkMode
      ? "https://assets.thehtmlproject.com/img/logodark.png"
      : "https://assets.thehtmlproject.com/icon.jpeg";
  }

  updateLogo();

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    updateLogo();
  });
});
