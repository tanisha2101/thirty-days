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
            "🎂 It's your birthday! 💜";

        return;
    }

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance %
            (1000 * 60 * 60)) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance %
            (1000 * 60)) /
            1000
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


/* HOME → LETTER */

openLetterBtn.addEventListener("click", () => {

    homePage.classList.add("hidden");

    letterPage.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* LETTER → QUESTION */

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
        `translate(${x}px,${y}px) rotate(${Math.random() * 12 - 6}deg)`;
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
        💜✨<br>
        Then I guess we're stuck with each other.<br>
        And honestly... I wouldn't have it any other way.
    `;

    yesBtn.innerHTML =
        "Always you 💜";

    yesBtn.disabled = true;

    addMemory();

    createPurpleHearts();
});


/* =========================
   MEMORY JAR
========================= */

const jarHearts =
    document.getElementById("jarHearts");

function loadMemories() {

    const memories =
        parseInt(
            localStorage.getItem(
                "nushiMemoryJar"
            ) || "0"
        );

    renderMemories(memories);
}

function renderMemories(count) {

    if (count === 0) {

        jarHearts.innerHTML = "♡";

        return;
    }

    jarHearts.innerHTML =
        "💜".repeat(
            Math.min(count, 30)
        );
}

function addMemory() {

    let memories =
        parseInt(
            localStorage.getItem(
                "nushiMemoryJar"
            ) || "0"
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
   PURPLE HEART CELEBRATION
========================= */

function createPurpleHearts() {

    for (let i = 0; i < 22; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML =
            ["💜", "✨", "♡", "✦"][
                Math.floor(
                    Math.random() * 4
                )
            ];

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "-30px";

        heart.style.fontSize =
            (17 + Math.random() * 18) + "px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex = "9999";

        heart.style.transition =
            "transform 3s ease, opacity 3s ease";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translateY(-${window.innerHeight + 100}px)
                 rotate(${Math.random() * 360}deg)`;

            heart.style.opacity = "0";

        }, 50 + i * 80);

        setTimeout(() => {

            heart.remove();

        }, 3500);
    }
}


/* =========================
   BACKGROUND SPARKLES
========================= */

const sparkleContainer =
    document.getElementById("sparkles");

function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML =
        ["✦", "✧", "✨", "♡"][
            Math.floor(
                Math.random() * 4
            )
        ];

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        (70 + Math.random() * 30) + "vh";

    sparkle.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    sparkleContainer.appendChild(
        sparkle
    );

    setTimeout(() => {

        sparkle.remove();

    }, 6000);
}

setInterval(
    createSparkle,
    650
);
