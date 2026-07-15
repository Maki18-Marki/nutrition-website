/* ==========================================
   GREEN BITE
   Created by:
   Prescilliano Marklien A. LIM
========================================== */

// =========================
// Loading Screen
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loading = document.getElementById("loading");

        if (loading) {

            loading.style.opacity = "0";

            loading.style.pointerEvents = "none";

            setTimeout(() => {

                loading.style.display = "none";

            },600);

        }

    },1200);

});

// =========================
// Dark Mode
// =========================

const themeButton = document.getElementById("themeButton");

themeButton.onclick = () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeButton.innerHTML="☀️";

    }

    else{

        themeButton.innerHTML="🌙";

    }

}

// =========================
// Quiz
// =========================

function correctAnswer(){

document.getElementById("quizResult").innerHTML=

"🎉 Excellent! A balanced meal supports your health and helps reduce food waste when planned properly.";

confetti();

}

function wrongAnswer(){

document.getElementById("quizResult").innerHTML=

"❌ Nice try! Think about the choice that benefits both people and the planet.";

}

// =========================
// Eco Mission Progress
// =========================

const checks = document.querySelectorAll(".check");

const progress = document.getElementById("progressFill");

checks.forEach(box=>{

box.addEventListener("change",updateProgress);

});

function updateProgress(){

let completed=0;

checks.forEach(box=>{

if(box.checked){

completed++;

}

});

let percent=(completed/checks.length)*100;

progress.style.width=percent+"%";

progress.innerHTML=Math.round(percent)+"%";

if(percent===100){

setTimeout(()=>{

alert("🏆 Congratulations!\n\nYou completed today's GREEN BITE Mission!");

confetti();

},300);

}

}

// =========================
// Confetti
// =========================

function confetti(){

for(let i=0;i<30;i++){

let leaf=document.createElement("div");

leaf.innerHTML=["🍃","🌿","✨","🍀"][Math.floor(Math.random()*4)];

leaf.style.position="fixed";

leaf.style.left=Math.random()*100+"vw";

leaf.style.top="-20px";

leaf.style.fontSize=(20+Math.random()*20)+"px";

leaf.style.transition="4s linear";

leaf.style.zIndex="9999";

document.body.appendChild(leaf);

setTimeout(()=>{

leaf.style.top="110vh";

leaf.style.transform="rotate(720deg)";

},100);

setTimeout(()=>{

leaf.remove();

},4200);

}

}/* ==========================================
   GREEN BITE PREMIUM EFFECTS
========================================== */

// =========================
// Fade In Animation
// =========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll("section,.card,.creatorCard,.quizCard").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// =========================
// Animated Number Counter
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

let target = Number(counter.dataset.target);

let count = 0;

let speed = target/80;

function update(){

count += speed;

if(count < target){

counter.innerHTML = Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerHTML = target;

}

}

update();

});

// =========================
// Button Ripple Effect
// =========================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

ripple.className="ripple";

const rect=button.getBoundingClientRect();

ripple.style.left=(e.clientX-rect.left)+"px";

ripple.style.top=(e.clientY-rect.top)+"px";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// =========================
// Floating Leaves
// =========================

function createLeaf(){

const leaf=document.createElement("div");

leaf.innerHTML=["🍃","🌿"][Math.floor(Math.random()*2)];

leaf.style.position="fixed";

leaf.style.left=Math.random()*100+"vw";

leaf.style.top="-40px";

leaf.style.fontSize=(18+Math.random()*18)+"px";

leaf.style.opacity=.8;

leaf.style.pointerEvents="none";

leaf.style.transition=(6+Math.random()*4)+"s linear";

leaf.style.zIndex="-1";

document.body.appendChild(leaf);

setTimeout(()=>{

leaf.style.top="110vh";

leaf.style.transform=`translateX(${Math.random()*200-100}px) rotate(${360+Math.random()*360}deg)`;

},100);

setTimeout(()=>{

leaf.remove();

},10000);

}

setInterval(createLeaf,1200);

// =========================
// Welcome Message
// =========================

setTimeout(()=>{

console.log("🌿 Welcome to GREEN BITE!");

},1000);
