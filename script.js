/* =========================
   COUNTDOWN
========================= */

const targetDate =
    new Date("September 6, 2026 00:00:00").getTime();

const countdown =
    document.getElementById("countdown");


function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        targetDate - now;

    if (distance <= 0) {

        countdown.innerHTML =
            "🎂 It's your birthday! ❤️";

        return;
    }

    const days =
        Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60))
            / 1000
        );

    countdown.innerHTML =
        `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   PAGE NAVIGATION
========================= */

const homePage =
    document.getElementById("homePage");

const letterPage =
    document.getElementById("letterPage");

const finalPage =
    document.getElementById("finalPage");

const openLetterBtn =
    document.getElementById("openLetterBtn");

const continueBtn =
    document.getElementById("continueBtn");


openLetterBtn.addEventListener("click", () => {

    homePage.classList.add("hidden");

    letterPage.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


continueBtn.addEventListener("click", () => {

    letterPage.classList.add("hidden");

    finalPage.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   STAR FIELD
========================= */

const stars =
    document.getElementById("stars");

function createStar() {

    const star =
        document.createElement("div");

    star.className = "star";

    star.innerHTML =
        ["✦", "✧", "⋆", "·"][
            Math.floor(Math.random() * 4)
        ];

    star.style.left =
        Math.random() * 100 + "vw";

    star.style.top =
        Math.random() * 100 + "vh";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    star.style.fontSize =
        (5 + Math.random() * 8) + "px";

    stars.appendChild(star);
}


/* Create stars */

for (let i = 0; i < 90; i++) {
    createStar();
}
