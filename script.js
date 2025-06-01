function makeBubble(){
    var clutter="";

for(var i=0;i<=107;i++){
    var rn = Math.floor(Math.random()*10)
clutter +=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbottom").innerHTML= clutter;
};

document.querySelector("#pbottom").addEventListener("click",function(details){
var clickednum= Number(details.target.textContent);
if(clickednum=== hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}
})

var timer= 15;
function runTimer(){
  var timerint=  setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbottom").innerHTML=`<h1>GAME OVER</h1>`;
        }
    },1000);
}
var hitrn=0;
function getNewHit(){
   hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= hitrn;
}
var score = 0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent= score;

}

getNewHit();
runTimer();
makeBubble();

