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
   NO BUTTON
========================= */

const noBtn =
    document.getElementById("noBtn");

function moveNoButton() {

    const x =
        Math.random() * 180 - 90;

    const y =
        Math.random() * 120 - 60;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);

noBtn.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveNoButton();
    }
);


/* =========================
   YES BUTTON
========================= */

const yesBtn =
    document.getElementById("yesBtn");

const response =
    document.getElementById("response");

yesBtn.addEventListener("click", () => {

    response.innerHTML = `
        📖❤️<br>
        Then let's keep writing it.<br>
        One chapter at a time.
    `;

    yesBtn.innerHTML =
        "Chapter continues ❤️";

    yesBtn.disabled = true;

    addMemory();

    createBookCelebration();
});


/* =========================
   MEMORY JAR
========================= */

const jarHearts =
    document.getElementById("jarHearts");

function loadMemories() {

    const memories =
        parseInt(
            localStorage.getItem("nushiMemoryJar") || "0"
        );

    renderMemories(memories);
}

function renderMemories(count) {

    if (count === 0) {

        jarHearts.innerHTML = "♡";

        return;
    }

    jarHearts.innerHTML =
        "❤️".repeat(
            Math.min(count, 30)
        );
}

function addMemory() {

    let memories =
        parseInt(
            localStorage.getItem("nushiMemoryJar") || "0"
        );

    if (memories < 30) {
        memories++;
    }

    localStorage.setItem(
        "nushiMemoryJar",
        memories
    );

    renderMemories(memories);
}

loadMemories();


/* =========================
   BOOK PAGE EFFECT
========================= */

const particleContainer =
    document.getElementById("bookParticles");

function createParticle() {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    particle.innerHTML =
        ["✦", "✧", "♡", "•", "📖"][
            Math.floor(Math.random() * 5)
        ];

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.top =
        (70 + Math.random() * 30) + "vh";

    particle.style.fontSize =
        (10 + Math.random() * 13) + "px";

    particle.style.animationDuration =
        (4 + Math.random() * 3) + "s";

    particleContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 7000);
}

setInterval(createParticle, 700);


/* =========================
   YES CELEBRATION
========================= */

function createBookCelebration() {

    for (let i = 0; i < 25; i++) {

        const item =
            document.createElement("div");

        item.innerHTML =
            ["❤️", "📖", "✦", "✨", "♡"][
                Math.floor(Math.random() * 5)
            ];

        item.style.position = "fixed";

        item.style.left =
            Math.random() * 100 + "vw";

        item.style.bottom = "-30px";

        item.style.fontSize =
            (16 + Math.random() * 18) + "px";

        item.style.pointerEvents = "none";

        item.style.zIndex = "9999";

        item.style.transition =
            "transform 3s ease, opacity 3s ease";

        document.body.appendChild(item);

        setTimeout(() => {

            item.style.transform =
                `translateY(-${window.innerHeight + 100}px)
                 rotate(${Math.random() * 360}deg)`;

            item.style.opacity = "0";

        }, 50 + i * 70);

        setTimeout(() => {

            item.remove();

        }, 3500);
    }
}
