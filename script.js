/* =========================
   COUNTDOWN
========================= */

const targetDate =
    new Date("September 6, 2026 00:00:00").getTime();

const countdown =
    document.getElementById("countdown");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

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

const questionPage =
    document.getElementById("questionPage");

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

    questionPage.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   YES
========================= */

const yesBtn =
    document.getElementById("yesBtn");

const response =
    document.getElementById("response");

yesBtn.addEventListener("click", () => {

    response.innerHTML = `
        🌹<br>
        Then we'll take it one day at a time.<br>
        No matter how difficult the day gets,
        you don't have to face it alone. ❤️
    `;

    yesBtn.innerHTML =
        "I'm here too. ❤️";

    yesBtn.disabled = true;

    createRoseCelebration();
});


/* =========================
   FALLING ROSE PETALS
========================= */

const petalContainer =
    document.getElementById("rosePetals");

function createPetal() {

    const petal =
        document.createElement("div");

    petal.className = "petal";

    petal.innerHTML =
        ["🌸", "♡", "✿", "❀"][
            Math.floor(Math.random() * 4)
        ];

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.top = "-30px";

    petal.style.fontSize =
        (10 + Math.random() * 12) + "px";

    petal.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    petalContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 10000);
}

setInterval(createPetal, 900);


/* =========================
   ROSE CELEBRATION
========================= */

function createRoseCelebration() {

    for (let i = 0; i < 25; i++) {

        const rose =
            document.createElement("div");

        rose.innerHTML =
            ["🌹", "🌸", "♡", "✦"][
                Math.floor(Math.random() * 4)
            ];

        rose.style.position = "fixed";

        rose.style.left =
            Math.random() * 100 + "vw";

        rose.style.bottom = "-30px";

        rose.style.fontSize =
            (17 + Math.random() * 16) + "px";

        rose.style.pointerEvents = "none";

        rose.style.zIndex = "9999";

        rose.style.transition =
            "transform 3s ease, opacity 3s ease";

        document.body.appendChild(rose);

        setTimeout(() => {

            rose.style.transform =
                `translateY(-${window.innerHeight + 100}px)
                 rotate(${Math.random() * 360}deg)`;

            rose.style.opacity = "0";

        }, 50 + i * 70);

        setTimeout(() => {

            rose.remove();

        }, 3500);
    }
}
