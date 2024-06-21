let gameseq = [];
let userseq = [];
let btns = ["green","red","purple","yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }    
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {

    userseq = []
    level++;
    h2.innerText = `Level ${level}`;

    // Choosing any random value
    let randidx = Math.floor(Math.random() * 4); 
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
  
    gameFlash(randbtn);
}

function checkAns(idx){
    
    if(gameseq[idx] === userseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp, 1000)
        }
    }else{
        h2.innerHTML =`Your Game is Over! <br><b>Your Score was ${level}</b> <br> Press Any Key to restart the game`;
        reset();
        
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout (function(){
            document.querySelector("body").style.backgroundColor ="white";
        },150)
    }
}

function btnpress() {
    // console.log(this);
    let btn = this;
    userFlash(this)

    usercolor = btn.getAttribute("id");
    // console.log(usercolor)
    userseq.push(usercolor)
    // console.log(userseq)

    checkAns(userseq.length-1)
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) { 
    btn.addEventListener("click", btnpress); 
}

function reset(){
    started = false;
    gameseq = []
    userseq = []
    level =0;
}