let gameSeq=[];
let userSeq=[];


let started =false;
let level= 0;

document.addEventListener("keypress",function(){
    let h1=document.querySelector("h1");
    if (started==false) {
        h1.innerText="Game is started";
        started=true;

        levelUp();
    }
});

let h2=document.querySelector("h2");

let btns=["yellow","red","purple","green"];

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}



function gameFlash(btn){
    btn.classList.add("flash"); 
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

let highestScore=0;

function checkAns(idx){

if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
    if(highestScore<level){
        highestScore=level;
        
    }
        setTimeout(levelUp,1000);
    }
}else{
    h2.innerHTML=`Game over! Your Score Was <b>${level}</b> <br>Highest score :${highestScore} <br>Press any <b>key</b> to start `;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },200);
    reset();
}
}

function btnPress() {
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}


let allBtns =document.querySelectorAll(".btn");
for ( btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}