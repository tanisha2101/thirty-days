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

document.getElementById("startBtn").onclick=()=>{

document.querySelector(".hero").style.display="none";

document.getElementById("daySection").style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

}

const noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{

const x=Math.random()*250-125;

const y=Math.random()*120-60;

noBtn.style.transform=`translate(${x}px,${y}px)`;

});

document.getElementById("yesBtn").onclick=()=>{

document.getElementById("response").innerHTML=`

🥹

I knew you'd say yes.

Thank you for saying yes to another date...

Now promise you'll come back tomorrow too.

❤️

`;

};