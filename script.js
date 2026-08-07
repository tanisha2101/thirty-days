const targetDate = new Date("September 6, 2026 00:00:00").getTime();

const countdown = document.getElementById("countdown");

setInterval(()=>{

const now=new Date().getTime();

const distance=targetDate-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const mins=Math.floor((distance%(1000*60*60))/(1000*60));

const secs=Math.floor((distance%(1000*60))/1000);

countdown.innerHTML=`
${days} Days ❤️ ${hours} Hours ❤️ ${mins} Minutes ❤️ ${secs} Seconds
`;

},1000);

const hero = document.querySelector(".hero");
const letterPage = document.getElementById("daySection");

document.getElementById("startBtn").onclick = () => {

    hero.style.opacity = "0";

    setTimeout(() => {

        hero.style.display = "none";

        letterPage.classList.remove("hidden");

        letterPage.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 500);

};

const noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseenter",()=>{

    const x = Math.random()*300 - 150;
    const y = Math.random()*160 - 80;

    noBtn.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random()*20-10}deg)`;

});

document.getElementById("yesBtn").onclick=()=>{

document.getElementById("response").innerHTML = `
🦉✨

Your ticket has been accepted.

Two seats are now waiting for us on the Hogwarts Express.

Destination:

A lifetime of adventures together.

Until tomorrow...

Love,

Your Bui ❤️
`;
};
/* ==========================
   ✨ MAGIC EFFECTS
========================== */

// Floating Sparkles
const sparkleContainer = document.getElementById("sparkles");

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = ["✨","⭐","✦","✧"][Math.floor(Math.random()*4)];

    sparkle.style.left = Math.random()*100 + "vw";

    sparkle.style.top = (70 + Math.random()*30) + "vh";

    sparkle.style.animationDuration = (3 + Math.random()*3) + "s";

    sparkleContainer.appendChild(sparkle);

    setTimeout(()=>{
        sparkle.remove();
    },6000);

}

setInterval(createSparkle,500);


/* ==========================
   🪄 MAGIC CURSOR
========================== */

document.addEventListener("mousemove",(e)=>{

    const trail = document.createElement("div");

    trail.className="trail";

    trail.style.left=e.pageX+"px";

    trail.style.top=e.pageY+"px";

    document.body.appendChild(trail);

    setTimeout(()=>{
        trail.remove();
    },700);

});


/* ==========================
   🚂 HOGWARTS EXPRESS
========================== */

const train = document.getElementById("train");

window.addEventListener("scroll",()=>{

    const scrollable =
        document.documentElement.scrollHeight-window.innerHeight;

    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

    train.style.left=(progress*100)+"%";

});


/* ==========================
   ⚡ RANDOM MAGIC FLASH
========================== */

setInterval(()=>{

    document.body.style.boxShadow=
        "inset 0 0 200px rgba(255,255,255,.18)";

    setTimeout(()=>{

        document.body.style.boxShadow="";

    },150);

},12000);


/* ==========================
   💖 MAGIC YES EFFECT
========================== */

const oldYes = document.getElementById("yesBtn").onclick;

document.getElementById("yesBtn").onclick = ()=>{

    oldYes();

    for(let i=0;i<40;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.innerHTML=["❤️","✨","⭐","🦉"][Math.floor(Math.random()*4)];

            heart.style.position="fixed";

            heart.style.left=Math.random()*100+"vw";

            heart.style.top="100vh";

            heart.style.fontSize=(18+Math.random()*18)+"px";

            heart.style.pointerEvents="none";

            heart.style.transition="3s";

            document.body.appendChild(heart);

            requestAnimationFrame(()=>{

                heart.style.top="-10vh";

                heart.style.opacity="0";

            });

            setTimeout(()=>heart.remove(),3000);

        },i*60);

    }

};
const questionPage = document.getElementById("questionPage");

document.getElementById("nextScroll").onclick = () => {

    letterPage.style.display = "none";

    questionPage.classList.remove("hidden");

    questionPage.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};
