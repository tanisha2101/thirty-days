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
   OPEN TIME CAPSULE
========================= */

const startBtn =
    document.getElementById("startBtn");

const hero =
    document.querySelector(".hero");

const daySection =
    document.getElementById("daySection");


startBtn.onclick = () => {

    hero.style.opacity = "0";

    hero.style.transition = ".7s";

    setTimeout(() => {

        hero.style.display = "none";

        daySection.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 700);

};


/* =========================
   TIME CAPSULE
========================= */

const messages = {

    then: `
    There was a time when we didn't know each other this well.

    Two people simply existing in the same world,
    unaware of all the little things they would eventually learn about one another.

    Funny how time can turn strangers into someone who feels familiar.
    `,

    now: `
    Right now is made of all the little things time has taught us.

    The habits we know.
    The jokes we understand.
    The silences we recognize.

    Somehow, all those little moments became something much bigger than we expected.
    `,

    always: `
    And then there is everything time hasn't shown us yet.

    More mornings.
    More conversations.
    More growing.
    More learning.

    Some of the most beautiful chapters haven't happened yet.
    And perhaps that's the best thing about time.
    `

};


const capsuleButtons =
    document.querySelectorAll(".capsuleBtn");

const capsuleMessage =
    document.getElementById("capsuleMessage");

const finalMessage =
    document.getElementById("finalMessage");

let opened = new Set();


capsuleButtons.forEach(button => {

    button.addEventListener("click", () => {

        const type =
            button.dataset.type;

        capsuleMessage.innerHTML =
            messages[type];

        capsuleMessage.classList.remove("show");

        setTimeout(() => {

            capsuleMessage.classList.add("show");

        }, 50);

        button.classList.add("opened");

        opened.add(type);

        if (opened.size === 3) {

            setTimeout(() => {

                finalMessage.style.display = "block";

                finalMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 700);

        }

    });

});


/* =========================
   MAGIC CLOCK PARTICLES
========================= */

const stars =
    document.getElementById("stars");


function createStar() {

    const star =
        document.createElement("div");

    star.className = "star";

    star.innerHTML =
        ["✦", "✧", "·", "✨"][Math.floor(Math.random() * 4)];

    star.style.left =
        Math.random() * 100 + "vw";

    star.style.top =
        (60 + Math.random() * 40) + "vh";

    star.style.fontSize =
        (10 + Math.random() * 12) + "px";

    star.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    stars.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 6000);

}


setInterval(createStar, 700);


/* =========================
   YES BUTTON
========================= */

const yesBtn =
    document.getElementById("yesBtn");

const response =
    document.getElementById("response");


yesBtn.onclick = () => {

    response.innerHTML =
        "Then let's give the future all the time it deserves. ⏳❤️";

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.innerHTML =
                ["❤️", "✨", "⏳", "🌙"][
                    Math.floor(Math.random() * 4)
                ];

            heart.style.position = "fixed";

            heart.style.left =
                Math.random() * 100 + "vw";

            heart.style.top =
                "100vh";

            heart.style.fontSize =
                (18 + Math.random() * 15) + "px";

            heart.style.pointerEvents =
                "none";

            heart.style.transition =
                "3s ease";

            document.body.appendChild(heart);

            requestAnimationFrame(() => {

                heart.style.top = "-10vh";

                heart.style.opacity = "0";

            });

            setTimeout(() => {
                heart.remove();
            }, 3000);

        }, i * 70);

    }

};


/* =========================
   PLAYFUL NO BUTTON
========================= */

const noBtn =
    document.getElementById("noBtn");


noBtn.addEventListener("mouseover", () => {

    const x =
        Math.random() * 180 - 90;

    const y =
        Math.random() * 100 - 50;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;

});
