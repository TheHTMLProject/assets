  const redirectURL = "https://discord.gg/DDkrC9brCM";
    let redirected = false;

    setTimeout(() => {
      window.location.href = redirectURL;
      redirected = true;
    }, 1500);

    setTimeout(() => {
      if (!redirected) {
        document.getElementById('fallback').style.display = 'inline-block';
      }
    }, 3000);
