'use-script'
// selectors
const header=document.querySelector(".header");
const userChoice=document.querySelector(".user-choice");
const computerChoice=document.querySelector(".computer-choice");
const result=document.querySelector(".result");
const playAgain=document.querySelector(".play-again");
const image=document.querySelector(".image");
const showRule=document.querySelector(".click");
const hideRule=document.querySelector(".icon-close");
const userScore=document.querySelector(".user-score");

//function for initial
function start(){
  result.textContent=" ";
  playAgain.innerHTML=" ";
  userScore.textContent=score;
  userChoice.classList.add('hidden');
  computerChoice.classList.add('hidden');
  showRule.style.visibility="visible";
  image.style.visibility="visible";
  result.style.fontSize="2rem";
}

let score=4;
start();
let computerAnswer="";
let userAns="";

//function for computer-choice
function computerSuffle(){
  let computerRandom=Math.floor(Math.random()*5);
  computer=['rock.svg','paper.svg','scissor.svg','spock.svg','lizard.svg'];
  computerAns=['rock','paper','scissor','spock','lizard'];
  computerAnswer=computerAns[computerRandom];
  computerBorder=['hsl(349, 71%, 52%)','hsl(230, 89%, 62%)',' hsl(39, 89%, 49%)','hsl(189, 59%, 53%)','hsl(261, 73%, 60%)'];//for differnt color border
  document.querySelector(`.${computerAns[computerRandom]}`).innerHTML=`<img src="${computer[computerRandom]}" >`;
  document.querySelector(`.${computerAns[computerRandom]}`).style.border=`1rem solid ${computerBorder[computerRandom]}`;
}
//function for user-choice
function Click(){
  computerSuffle();
  compare(userAns,computerAnswer);
  showResult(score);
 }
 //events
document.getElementById("rock").addEventListener("click",()=>{ //for rock-click
  userAns="rock";
  Click();
  document.querySelector(".user-img").style.border="1rem solid hsl(349, 71%, 52%)";
  document.querySelector(".user-img").innerHTML="<img src='rock.svg' alt='rock'  >";
 
})
document.getElementById("lizard").addEventListener("click",()=>{ //for lizard-click
  userAns="lizard";
  Click();
  document.querySelector(".user-img").style.border="1rem solid  hsl(261, 73%, 60%)";
  document.querySelector(".user-img").innerHTML="<img src='lizard.svg' alt='lizard' >";
})
document.getElementById("spock").addEventListener("click",()=>{ //for spock-click
  userAns="spock";
  Click();
  document.querySelector(".user-img").style.border="1rem solid hsl(189, 59%, 53%)";
  document.querySelector(".user-img").innerHTML="<img src='spock.svg' alt='spock'>";
})
 document.getElementById("paper").addEventListener("click",()=>{ //for paper-click
  userAns="paper";
  Click();
  document.querySelector(".user-img").style.border="1rem solid hsl(230, 89%, 62%)";
  document.querySelector(".user-img").innerHTML="<img src='paper.svg' alt='paper' >";
 })
 document.getElementById("scissor").addEventListener("click",()=>{ //for scissor-click
  userAns="scissor";
  Click();
  document.querySelector(".user-img").style.border="1rem solid hsl(39, 89%, 49%)  ";
  document.querySelector(".user-img").innerHTML="<img src='scissor.svg' alt='scissor'>";
 })
 
 //function for check-winner
 function compare(choice1,choice2){
  image.style.visibility="hidden";
  playAgain.innerHTML="<div class='again'> <button onclick='replay()'>Next Turn!</button></div>"; //To show next turn button
  userChoice.classList.remove('hidden');
  computerChoice.classList.remove('hidden');
  showRule.style.visibility="hidden";
   if(choice1===choice2){ //for match-draw
        score++;
        userScore.textContent=score;
        result.textContent= "MATCH TIE";
  }else{
    if(choice1==="rock"){
      if(choice2==="lizard"){
          score+=3;
          userScore.textContent=score;
          result.textContent= "YOU WIN!";
      }
      else{
         score-=2;
         userScore.textContent=score;
         result.textContent=  "YOU LOSE";
      }
  }
  if(choice1==="spock"){
    if(choice2==="scissor"){
        score+=3;
        userScore.textContent=score;
        result.textContent= "YOU WIN!";
    }
    else{
       score-=2;
       userScore.textContent=score;
       result.textContent=  "YOU LOSE";
    }
  } if(choice1==="lizard"){
    if(choice2==="spock"){
      score+=3;
      userScore.textContent=score;
      result.textContent= "YOU WIN!";
    }
    else{
     score-=2;
     userScore.textContent=score;
     result.textContent=  "YOU LOSE";
    }
  }
  if(choice1==="paper"){
      if(choice2==="rock"){
        score+=3;
        userScore.textContent=score;
        result.textContent=  "YOU WIN!";
      }
      else{
        score-=2;
        userScore.textContent=score;
        result.textContent=  "YOU LOSE";
      }
  }
  if(choice1==="scissor"){
      if(choice2==="paper"){
         score+=3;
         userScore.textContent=score;
         result.textContent=  "YOU WIN!";
      }
      else{
         score-=2;
        userScore.textContent=score;
        result.textContent=  "YOU LOSE";
      }
  }
}}
//function for show-rule
showRule.addEventListener("click",()=>{
  image.classList.add('hidden');
  hideRule.innerHTML=" &times;";
  showRule.innerHTML="<div class='deco'> <h2>Rules:</h2> <p>i) Initially You get 4 points.<br>ii) For every Won get 3 points,Draw get 1 point,Lose reduce 2 point.<br>iii)Score 8 points or above to won Game!.<br>iv) If points 0 (or) less than 0, your loss game!.<br><br> <img src='image-rules-bonus.svg'  alt='Rule-img' > </div>";
}
);
//funtion for hide-rule
hideRule.addEventListener("click",()=>{
  image.classList.remove('hidden');
  showRule.innerHTML="<div class='click'><span class='rule-img'>Rules</span></div>";
  hideRule.innerHTML="";
});
//funtion for next-turn 
  function replay(){
   start();
  }
//funtion for result-design
 function resultDesign(){
  userChoice.classList.add('hidden');
  computerChoice.classList.add('hidden');
  showRule.style.visibility="hidden";
  header.style.border="0";
  userScore.textContent=score;
  playAgain.innerHTML="<div class='again'> <button onclick='restart()'>Restart Game!</button></div> ";
 }
 //funtion for check-result
 function showResult(point){
    if(score<=0){                   //for game-lose
    result.textContent="Game Over👎🏻";
    result.style.fontSize="4rem";
    score=0;
    document.body.style.background="rgb(167, 17, 17) url('gameover.gif') no-repeat  center"
    resultDesign();
    }
    if(score>=8){                  //for game-win
      result.innerHTML="Congratulations 👏<br>You Won game!";
      result.style.fontSize="2.7rem";
      score=8;
      document.body.style.background="rgb(17, 128, 17) url('winner.gif') no-repeat center top";  
      resultDesign();
    }
 }
 function restart(){             //To restart game after win (or) lose
  score=4;
  start();
  document.body.style.background="linear-gradient(to right, hsl(214, 47%, 23%) , hsl(237, 49%, 15%))";
  header.style.border="0.5rem solid var(--headerOutline)";
 }