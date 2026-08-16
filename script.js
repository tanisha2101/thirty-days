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
            "It's Your Birthday ❤️";

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
        `${days} Days · ${hours} Hours · ${mins} Minutes · ${secs} Seconds`;
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   START / TELESCOPE
========================= */

const startBtn =
    document.getElementById("startBtn");

const hero =
    document.getElementById("hero");

const daySection =
    document.getElementById("daySection");


startBtn.onclick = () => {

    hero.style.transition = "1s ease";

    hero.style.opacity = "0";

    setTimeout(() => {

        hero.style.display = "none";

        daySection.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 900);
};


/* =========================
   LOOK AT THE SKY
========================= */

const skyBtn =
    document.getElementById("skyBtn");

const skyMessage =
    document.getElementById("skyMessage");


skyBtn.onclick = () => {

    skyMessage.classList.toggle("open");

    if (skyMessage.classList.contains("open")) {

        skyBtn.innerHTML =
            "🌙 Keep Looking";

    } else {

        skyBtn.innerHTML =
            "✨ Look At The Sky";
    }
};


/* =========================
   LETTER
========================= */

const letterBtn =
    document.getElementById("letterBtn");

const letter =
    document.getElementById("letter");


letterBtn.onclick = () => {

    letter.classList.remove("hidden");

    letterBtn.innerHTML =
        "💌 The Letter Is Yours";

    letter.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

};


/* =========================
   SHOW QUESTION
========================= */

const questionSection =
    document.getElementById("questionSection");


setTimeout(() => {

    if (!questionSection.classList.contains("hidden")) {
        return;
    }

}, 100);


/*
   The question appears after
   the letter has been opened.
*/

letterBtn.addEventListener("click", () => {

    setTimeout(() => {

        questionSection.classList.remove("hidden");

    }, 1200);

});


/* =========================
   NO BUTTON
========================= */

const noBtn =
    document.getElementById("noBtn");


noBtn.addEventListener("mouseover", () => {

    const x =
        Math.random() * 220 - 110;

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


yesBtn.onclick = () => {

    response.innerHTML = `
        ✨ Then let's keep finding
        our way back to the stars. ❤️
    `;

    createMagicBurst();

};


/* =========================
   MAGIC BURST
========================= */

const effects =
    document.getElementById("effects");


function createMagicBurst() {

    const symbols = [
        "❤️",
        "✨",
        "⭐",
        "🌙",
        "✦"
    ];

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            const element =
                document.createElement("div");

            element.className =
                "floating";

            element.innerHTML =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];

            element.style.left =
                Math.random() * 100 + "vw";

            element.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            effects.appendChild(element);

            setTimeout(() => {
                element.remove();
            }, 6000);

        }, i * 80);
    }
}


/* =========================
   STARS
========================= */

const stars =
    document.getElementById("stars");


function createStars() {

    for (let i = 0; i < 90; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            (2 + Math.random() * 4) + "s";

        const size =
            1 + Math.random() * 3;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        stars.appendChild(star);
    }
}


createStars();


/* =========================
   OCCASIONAL SHOOTING STAR
========================= */

function shootingStar() {

    const star =
        document.createElement("div");

    star.style.position = "fixed";
    star.style.width = "90px";
    star.style.height = "2px";

    star.style.background =
        "linear-gradient(90deg, transparent, #fff4c7)";

    star.style.top =
        Math.random() * 45 + "%";

    star.style.left =
        Math.random() * 80 + "%";

    star.style.transform =
        "rotate(-25deg)";

    star.style.zIndex = "2";

    star.style.pointerEvents = "none";

    star.style.transition =
        "1.2s ease";

    document.body.appendChild(star);

    requestAnimationFrame(() => {

        star.style.transform =
            "translate(-250px, 180px) rotate(-25deg)";

        star.style.opacity = "0";

    });

    setTimeout(() => {
        star.remove();
    }, 1400);
}


setInterval(shootingStar, 7000);
