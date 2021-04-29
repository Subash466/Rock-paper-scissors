'use-script'

const header=document.querySelector(".header");
const userChoice=document.querySelector(".user-choice");
const computerChoice=document.querySelector(".computer-choice");
const result=document.querySelector(".result");
const playAgain=document.querySelector(".play-again");
const user=document.getElementById('user-img');
const computerImage= document.getElementById("com-img");
const image=document.querySelector(".image");
const showRule=document.querySelector(".click");
const hideRule=document.querySelector(".icon-close");
const hideUser=document.querySelector(".paper");
const userScore=document.querySelector(".user-score");


let score=4;
userScore.textContent=score;
let computerAnswer="";
let userAns="";
function computerSuffle(){
  let computer=Math.floor(Math.random()*5);
  computerImage.innerHTML=" ";
if (computer==0){
  computerAnswer="rock";
  var pic = document.createElement("img");
  pic.style.backgroundColor=" rgb(216, 216, 216)";
  pic.style.borderTop="1rem solid hsl(349, 71%, 52%)";
  pic.style.borderBottom="1rem solid hsl(349, 70%, 56%)";
  pic.style.borderRight="1rem solid hsl(349, 71%, 52%)";
  pic.style.borderLeft="1rem solid hsl(349, 70%, 56%)";
  pic.style.marginTop="0.7rem";
  pic.style.borderRadius="10rem";
  pic.style.padding="2rem";
  pic.style.width="150px";
  pic.style.height="150px";
  pic.src = "rock.svg";
  pic.alt="rock";
  var add = document.getElementById("com-img");
  add.appendChild(pic);
}else if(computer==1){
  computerAnswer="scissor";
  var pic = document.createElement("img");
  pic.style.backgroundColor=" rgb(216, 216, 216)";
  pic.style.borderTop="1rem solid hsl(39, 89%, 49%)  ";
  pic.style.borderBottom="1rem solid hsl(40, 84%, 53%) ";
  pic.style.borderRight="1rem solid hsl(39, 89%, 49%)  ";
  pic.style.borderLeft="1rem solid hsl(40, 84%, 53%) ";
  pic.style.borderRadius="10rem";
  pic.style.marginTop="0.7rem";
  pic.style.padding="2rem";
  pic.style.width="150px";
  pic.style.height="150px";
  pic.src = "scissor.svg";
  pic.alt="scissor";
  var add = document.getElementById("com-img");
  add.appendChild(pic);
}
else if(computer==2){
  computerAnswer="spock";
  var pic = document.createElement("img");
  pic.style.backgroundColor=" rgb(216, 216, 216)";
  pic.style.borderTop="1rem solid hsl(189, 59%, 53%)  ";
  pic.style.borderBottom="1rem solid hsl(189, 58%, 57%) ";
  pic.style.borderRight="1rem solid hsl(189, 59%, 53%)  ";
  pic.style.borderLeft="1rem solid hsl(189, 58%, 57%) ";
  pic.style.borderRadius="8rem";
  pic.style.marginTop="0.7rem";
  pic.style.padding="2rem";
  pic.style.width="150px";
  pic.style.height="150px";
  pic.src = "spock.svg";
  pic.alt="spock";
  var add = document.getElementById("com-img");
  add.appendChild(pic);
}else if(computer==3){
  computerAnswer="lizard";
  var pic = document.createElement("img");
  pic.style.backgroundColor=" rgb(216, 216, 216)";
  pic.style.borderTop="1rem solid hsl(261, 73%, 60%)  ";
  pic.style.borderBottom="1rem solid hsl(261, 72%, 63%) ";
  pic.style.borderRight="1rem solid hsl(261, 73%, 60%)  ";
  pic.style.borderLeft="1rem solid hsl(261, 72%, 63%) ";
  pic.style.borderRadius="10rem";
  pic.style.marginTop="0.7rem";
  pic.style.padding="2rem";
  pic.style.width="155px";
  pic.style.height="155px";
  pic.src = "lizard.svg";
  pic.alt="lizard";
  var add = document.getElementById("com-img");
  add.appendChild(pic);
}
else{
  computerAnswer="paper";
  var pic= document.createElement("img");
  pic.style.backgroundColor=" rgb(216, 216, 216)";
  pic.style.borderTop="1rem solid hsl(230, 89%, 62%)";
  pic.style.borderBottom="1rem solid hsl(230, 89%, 65%)";
  pic.style.borderRight="1rem solid hsl(230, 89%, 62%)";
  pic.style.borderLeft="1rem solid hsl(230, 89%, 65%)";
  pic.style.borderRadius="10rem";
  pic.style.marginTop="0.7rem";
  pic.style.padding="2rem";
  pic.style.width="150px";
  pic.style.height="150px";
  pic.src = "paper.svg";
  pic.alt="paper";
  var add = document.getElementById("com-img");
  add.appendChild(pic);
}
}
function rockClick(){
   userAns="rock";
  computerSuffle();
  compare(userAns,computerAnswer);
  gameover(score);
  var addImage=document.getElementsByClassName("rock");
  addImage[0].style.borderTop="1rem solid hsl(349, 71%, 52%)";
  addImage[0].style.borderBottom="1rem solid hsl(349, 70%, 56%)";
  addImage[0].style.borderRight="1rem solid hsl(349, 71%, 52%)";
  addImage[0].style.borderLeft="1rem solid hsl(349, 70%, 56%)";
  addImage[0].innerHTML="<img src='rock.svg' alt='rock' width='65px' height='55px' >";
 
 }
 function lizardClick(){
  userAns="lizard";
 computerSuffle();
 compare(userAns,computerAnswer);
 gameover(score);
 var addImage=document.getElementsByClassName("lizard");
 addImage[0].style.borderTop="1rem solid  hsl(261, 73%, 60%)";
 addImage[0].style.borderBottom="1rem solid hsl(261, 72%, 63%)";
 addImage[0].style.borderRight="1rem solid  hsl(261, 73%, 60%)";
 addImage[0].style.borderLeft="1rem solid hsl(261, 72%, 63%)";
 addImage[0].innerHTML="<img src='lizard.svg' alt='lizard' width='65px' height='60px' >";

}
function spockClick(){
  userAns="spock";
 computerSuffle();
 compare(userAns,computerAnswer);
 gameover(score);
 var addImage=document.getElementsByClassName("spock");
 addImage[0].style.borderTop="1rem solid hsl(189, 59%, 53%)";
 addImage[0].style.borderBottom="1rem solid hsl(189, 58%, 57%)";
 addImage[0].style.borderRight="1rem solid hsl(189, 59%, 53%)";
 addImage[0].style.borderLeft="1rem solid hsl(189, 58%, 57%)";
 addImage[0].innerHTML="<img src='spock.svg' alt='spock' width='60px' height='60px'>";

}
 function paperClick(){
  userAns="paper";
  computerSuffle();
  compare(userAns,computerAnswer);
  gameover(score);
  var addImage=document.getElementsByClassName("paper");
  addImage[0].style.borderTop="1rem solid hsl(230, 89%, 62%)";
  addImage[0].style.borderBottom="1rem solid hsl(230, 89%, 65%)";
  addImage[0].style.borderRight="1rem solid hsl(230, 89%, 62%)";
  addImage[0].style.borderLeft="1rem solid hsl(230, 89%, 65%)";
  addImage[0].innerHTML="<img src='paper.svg' alt='paper' width='60px' height='60px'>";
 }
 function scissorClick(){
  userAns="scissor";
  computerSuffle();
  compare(userAns,computerAnswer);
  gameover(score);
  var addImage=document.getElementsByClassName("scissor");
  addImage[0].style.borderTop="1rem solid hsl(39, 89%, 49%)  ";
  addImage[0].style.borderBottom="1rem solid hsl(40, 84%, 53%) ";
  addImage[0].style.borderRight="1rem solid hsl(39, 89%, 49%)  ";
  addImage[0].style.borderLeft="1rem solid hsl(40, 84%, 53%) ";
  addImage[0].innerHTML="<img src='scissor.svg' alt='scissor' width='60px' height='60px'>";
 }
 
 function compare(choice1,choice2){
  image.style.visibility="hidden";
  playAgain.innerHTML="<div class='again'> <button onclick='replay()'>Next Turn!</button></div>";
  hideUser.classList.remove('hidden');
  userChoice.classList.remove('hidden');
  computerChoice.classList.remove('hidden');
  hideRule.innerHTML=" ";
  showRule.style.visibility="hidden";
   if(choice1==choice2){
        score++;
        userScore.textContent=score;
        result.textContent= "MATCH TIE";
  }else{
    if(choice1=="rock"){
      if(choice2=="lizard"){
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
  if(choice1=="spock"){
    if(choice2=="scissor"){
        score+=3;
        userScore.textContent=score;
        result.textContent= "YOU WIN!";
    }
    else{
       score-=2;
       userScore.textContent=score;
       result.textContent=  "YOU LOSE";
    }
  } if(choice1=="lizard"){
    if(choice2=="spock"){
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
  if(choice1=="paper"){
      if(choice2=="rock"){
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
  if(choice1=="scissor"){
      if(choice2=="paper"){
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
 
function show(){
    image.classList.add('hidden');
    hideRule.innerHTML=" &times;";
    showRule.innerHTML="<div class='deco'> <h2>Rules:</h2> <p>i) Initially You get 4 points.<br>ii) For every Won get 3 points,Draw get 1 point,Lose reduce 2 point.<br>iii)Score 8 points or above to won Game!.<br>iv) If points 0 (or) less than 0, your loss game!.<br><br> <img src='image-rules-bonus.svg'  alt='Rule-img' > </div>";
}

function closeRule(){
    image.classList.remove('hidden');
    showRule.innerHTML="<div class='click'><span class='rule-img'>Rules</span></div>";
    hideRule.innerHTML="";
}

showRule.addEventListener("click",show);
hideRule.addEventListener("click",closeRule);


document.addEventListener('keydown',function(e){
  if (e.key=='Backspace' || e.key=='Escape'){
    closeRule();
  }
})

  function replay(){
    result.textContent=" ";
    playAgain.innerHTML=" ";
    userChoice.classList.add('hidden');
    computerChoice.classList.add('hidden');
    hideUser.classList.add('hidden');
    showRule.style.visibility="visible";
    image.style.visibility="visible";
  }

 function gameover(point){
    if(score<=0){
    result.textContent="Game Over👎🏻";
    result.style.fontSize="4rem";
    score=0;
    userScore.textContent=score;
    document.body.style.background="rgb(167, 17, 17) url('gameover.gif') no-repeat  center"
    playAgain.innerHTML="<div class='again'> <button onclick='restart()'>Restart Game!</button></div> ";
    userChoice.classList.add('hidden');
    computerChoice.classList.add('hidden');
    showRule.innerHTML="";
    header.style.border="0";
    }
    if(score>=8){
      result.innerHTML="Congratulations 👏<br>You Won game!";
      result.style.fontSize="2.7rem";
      score=8;
      userScore.textContent=score;
      document.body.style.background="rgb(17, 128, 17) url('winner.gif') no-repeat center top";
      playAgain.innerHTML="<div class='again'> <button onclick='restart()'>Restart Game!</button></div> ";
      userChoice.classList.add('hidden');
      computerChoice.classList.add('hidden');
      showRule.innerHTML="";
      header.style.border="0";
    }
 }

 function restart(){
  result.textContent=" ";
  playAgain.innerHTML=" ";
  result.style.fontSize="2rem";
  score=5;
  userScore.textContent=score;
  showRule.style.visibility="visible";
  showRule.innerHTML="<div class='click'><span class='rule-img'>Rules</span></div>";
  document.body.style.background="linear-gradient(to right, hsl(214, 47%, 23%) , hsl(237, 49%, 15%))";
  userChoice.classList.add('hidden');
  computerChoice.classList.add('hidden');
  hideUser.classList.add('hidden');
  image.style.visibility="visible";
  header.style.border="0.5rem solid var(--headerOutline)";
 }