   const redirectURL = "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAATcuH4ZUN1owVTQ0RzBHMVJVUDlMVUc5MzdaNENHMi4u";
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
