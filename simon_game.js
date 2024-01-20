let btns = ["red","green","blue","yellow"];
let gameSeq=[];
let userSeq=[];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let body = document.querySelector("body")
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game Started!");
        started = true;
        levelUp();
        
    }
});
function gameFlash(btn){
    
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 150);
}
function userFlash(btn){
    
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 150);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIndx = Math.floor((Math.random())* 3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);

}

function checkBtn(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);}
    }
    else{
        body.classList.add("over");
        setTimeout(function(){
            body.classList.remove("over");
        }, 500);
        h2.innerHTML = `Game Over! Your score is <b>${level}<b>. <br> Press any key to start.`;
        reset();
    }
    
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkBtn(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    
}