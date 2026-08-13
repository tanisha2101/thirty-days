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
            "Happy Birthday, Mou! ❤️";

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

    const mins =
        Math.floor(
            (distance % (1000 * 60 * 60))
            / (1000 * 60)
        );

    const secs =
        Math.floor(
            (distance % (1000 * 60))
            / 1000
        );


    countdown.innerHTML =
        `${days} days · ${hours} hours · ${mins} minutes · ${secs} seconds`;
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   OPEN LETTER
========================= */

const startBtn =
    document.getElementById("startBtn");

const hero =
    document.getElementById("hero");

const daySection =
    document.getElementById("daySection");


startBtn.addEventListener("click", () => {

    hero.style.opacity = "0";

    hero.style.transition = "opacity .6s ease";


    setTimeout(() => {

        hero.style.display = "none";

        daySection.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 600);

});


/* =========================
   CONTINUE TO QUESTION
========================= */

const continueBtn =
    document.getElementById("continueBtn");

const questionSection =
    document.getElementById("questionSection");


continueBtn.addEventListener("click", () => {

    questionSection.style.display = "block";

    questionSection.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================
   RUNNING AWAY NO BUTTON
========================= */

const noBtn =
    document.getElementById("noBtn");


noBtn.addEventListener("mouseenter", () => {

    const x =
        Math.random() * 240 - 120;

    const y =
        Math.random() * 120 - 60;


    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;

});


/* =========================
   YES BUTTON
========================= */

const yesBtn =
    document.getElementById("yesBtn");

const response =
    document.getElementById("response");


yesBtn.addEventListener("click", () => {

    response.innerHTML = `
        🌤️ Maybe the rain can wait a little longer.<br>
        Somewhere, a sunset is waiting for us. ❤️
    `;


    createHearts();

});


/* =========================
   RAIN
========================= */

const rain =
    document.getElementById("rain");


function createRainDrop() {

    const drop =
        document.createElement("div");

    drop.className = "drop";

    drop.style.left =
        Math.random() * 100 + "vw";

    drop.style.animationDuration =
        (0.8 + Math.random() * 1.2) + "s";

    drop.style.opacity =
        0.15 + Math.random() * 0.35;


    rain.appendChild(drop);


    setTimeout(() => {
        drop.remove();
    }, 2500);
}


setInterval(createRainDrop, 90);


/* =========================
   SPARKLES
========================= */

const sparkles =
    document.getElementById("sparkles");


function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML =
        ["✦", "✧", "✨", "⋆"]
        [Math.floor(Math.random() * 4)];

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        (40 + Math.random() * 60) + "vh";

    sparkle.style.fontSize =
        (10 + Math.random() * 12) + "px";


    sparkles.appendChild(sparkle);


    setTimeout(() => {
        sparkle.remove();
    }, 4000);
}


setInterval(createSparkle, 700);


/* =========================
   HEARTS AFTER YES
========================= */

function createHearts() {

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.innerHTML =
                ["❤️", "🌸", "✨", "🌤️"]
                [Math.floor(Math.random() * 4)];

            heart.style.position = "fixed";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.bottom = "-30px";

            heart.style.fontSize =
                (18 + Math.random() * 18) + "px";

            heart.style.pointerEvents = "none";

            heart.style.zIndex = "9999";

            heart.style.transition =
                "transform 3s ease, opacity 3s ease";


            document.body.appendChild(heart);


            requestAnimationFrame(() => {

                heart.style.transform =
                    `translateY(-${window.innerHeight + 100}px)`;

                heart.style.opacity = "0";

            });


            setTimeout(() => {
                heart.remove();
            }, 3200);

        }, i * 100);

    }

}
