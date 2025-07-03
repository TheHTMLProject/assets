    let seconds = 5;
        const timerElement = document.getElementById('timer');
        const redirectUrl = "/home/redirect/";

        const countdown = setInterval(() => {
            seconds--;
            if (seconds > 0) {
                timerElement.textContent = `Redirecting in ${seconds} seconds...`;
            } else {
                clearInterval(countdown);
                window.location.href = redirectUrl;
            }
        }, 1000);

        
