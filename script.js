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
            "It's finally your birthday. ❤️";

        return;
    }

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60)) /
            1000
        );

    countdown.innerHTML =
        `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   OPEN STORY
========================= */

const openBtn =
    document.getElementById("openBtn");

const hero =
    document.getElementById("hero");

const letterSection =
    document.getElementById("letterSection");


openBtn.addEventListener("click", () => {

    hero.style.transition =
        "opacity .8s ease, transform .8s ease";

    hero.style.opacity = "0";

    hero.style.transform =
        "scale(1.04)";

    setTimeout(() => {

        hero.style.display = "none";

        letterSection.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

    }, 800);

});


/* =========================
   TURN THE PAGE
========================= */

const continueBtn =
    document.getElementById("continueBtn");

const questionSection =
    document.getElementById("questionSection");


continueBtn.addEventListener("click", () => {

    letterSection.style.transition =
        "opacity .7s ease, transform .7s ease";

    letterSection.style.opacity = "0";

    letterSection.style.transform =
        "translateY(-40px)";

    setTimeout(() => {

        letterSection.style.display = "none";

        questionSection.classList.remove("hidden");

        questionSection.style.opacity = "0";

        questionSection.style.transform =
            "translateY(40px)";

        requestAnimationFrame(() => {

            questionSection.style.transition =
                "opacity .8s ease, transform .8s ease";

            questionSection.style.opacity = "1";

            questionSection.style.transform =
                "translateY(0)";
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);

});


/* =========================
   QUESTION BUTTONS
========================= */

const yesBtn =
    document.getElementById("yesBtn");

const foreverBtn =
    document.getElementById("foreverBtn");

const answer =
    document.getElementById("answer");


yesBtn.addEventListener("click", () => {

    answer.innerHTML =
        "Then I'd keep that evening forever. ❤️";

    createHearts();

});


foreverBtn.addEventListener("click", () => {

    answer.innerHTML =
        "Then perhaps some stories really are meant to last. ✨";

    createHearts();

});


/* =========================
   HEART EFFECT
========================= */

function createHearts() {

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.innerHTML =
                ["❤️", "✦", "🕷️", "✨"]
                [Math.floor(Math.random() * 4)];

            heart.style.position = "fixed";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.top = "100vh";

            heart.style.fontSize =
                (16 + Math.random() * 18) + "px";

            heart.style.pointerEvents =
                "none";

            heart.style.zIndex = "999";

            heart.style.transition =
                "transform 3s ease, opacity 3s ease";

            document.body.appendChild(heart);

            requestAnimationFrame(() => {

                heart.style.transform =
                    `translateY(-110vh) rotate(${Math.random() * 180}deg)`;

                heart.style.opacity = "0";

            });

            setTimeout(() => {
                heart.remove();
            }, 3000);

        }, i * 80);
    }
}


/* =========================
   MUSIC
========================= */

const musicBtn =
    document.getElementById("musicBtn");

const song =
    document.getElementById("song");


let playing = false;


musicBtn.addEventListener("click", () => {

    if (!playing) {

        song.play()
            .then(() => {

                musicBtn.innerHTML =
                    "⏸ Pause Our Song";

                playing = true;

            })
            .catch(() => {

                musicBtn.innerHTML =
                    "🎵 Add the song file first";

            });

    } else {

        song.pause();

        musicBtn.innerHTML =
            "🎵 Play Our Song";

        playing = false;
    }

});


/* =========================
   FLOATING PARTICLES
========================= */

const particleContainer =
    document.getElementById("particles");


function createParticle() {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.top =
        (70 + Math.random() * 30) + "vh";

    particle.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    particleContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 6000);
}

setInterval(createParticle, 700);
