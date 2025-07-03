    let seconds = 5;
        const timerElement = document.getElementById('timer');
        const redirectUrl = "/redirect/";

        const countdown = setInterval(() => {
            seconds--;
            if (seconds > 0) {
                timerElement.textContent = `Redirecting in ${seconds} seconds...`;
            } else {
                clearInterval(countdown);
                window.location.href = redirectUrl;
            }
        }, 1000);

        
