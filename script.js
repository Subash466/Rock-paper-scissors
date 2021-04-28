'use-script'

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


let score=5;
userScore.textContent=score;
let computerAnswer="";
let userAns="";
function computerSuffle(){
  let computer=Math.floor(Math.random()*3);
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
  pic.style.width="155px";
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
  pic.src = "scissor.svg";
  pic.alt="scissor";
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
  pic.src = "paper.svg";
  pic.alt="paper";
  var add = document.getElementById("com-img");
  add.appendChild(pic);
}
}
function rockClick(){
   userAns="rock";
  computerSuffle();
  console.log(compare(userAns,computerAnswer));
  var addImage=document.getElementsByClassName("rock");
  addImage[0].style.borderTop="1rem solid hsl(349, 71%, 52%)";
  addImage[0].style.borderBottom="1rem solid hsl(349, 70%, 56%)";
  addImage[0].style.borderRight="1rem solid hsl(349, 71%, 52%)";
  addImage[0].style.borderLeft="1rem solid hsl(349, 70%, 56%)";
  addImage[0].innerHTML="<img src='rock.svg' alt='rock' width='65px' >";
 
 }
 function paperClick(){
  userAns="paper";
  computerSuffle();
  console.log(compare(userAns,computerAnswer));
  var addImage=document.getElementsByClassName("paper");
  addImage[0].style.borderTop="1rem solid hsl(230, 89%, 62%)";
  addImage[0].style.borderBottom="1rem solid hsl(230, 89%, 65%)";
  addImage[0].style.borderRight="1rem solid hsl(230, 89%, 62%)";
  addImage[0].style.borderLeft="1rem solid hsl(230, 89%, 65%)";
  addImage[0].innerHTML="<img src='paper.svg' alt='paper' width='60px'>";
 }
 function scissorClick(){
  userAns="scissor";
  computerSuffle();
  console.log(compare(userAns,computerAnswer));
  var addImage=document.getElementsByClassName("scissor");
  addImage[0].style.borderTop="1rem solid hsl(39, 89%, 49%)  ";
  addImage[0].style.borderBottom="1rem solid hsl(40, 84%, 53%) ";
  addImage[0].style.borderRight="1rem solid hsl(39, 89%, 49%)  ";
  addImage[0].style.borderLeft="1rem solid hsl(40, 84%, 53%) ";
  addImage[0].innerHTML="<img src='scissor.svg' alt='scissor' width='60px'>";
 }
 function compare(choice1,choice2){
  image.style.visibility="hidden";
  playAgain.innerHTML="<div class='again'> <button onclick='replay()'>Play again!</button></div>";
  hideUser.classList.remove('hidden');
  userChoice.classList.remove('hidden');
  computerChoice.classList.remove('hidden');
  hideRule.innerHTML=" ";
  showRule.innerHTML=" ";
 
  if(choice1==choice2){
        score++;
        userScore.textContent=score;
        result.textContent= "The result is a tie!";
  }else{
  if(choice1=="rock"){
      if(choice2=="scissor"){
          
          score+=2;
          userScore.textContent=score;
          result.textContent= "YOU WIN";
          
      }
      else{
         score--;
         userScore.textContent=score;
         result.textContent=  "YOU LOSE";
      }
  }
  if(choice1=="paper"){
      if(choice2=="rock"){
          
        score+=2;
        userScore.textContent=score;
        result.textContent=  "YOU WIN";
      }
      else{
        
        score--;
        userScore.textContent=score;
        result.textContent=  "YOU LOSE";
      }
  }
  if(choice1=="scissor"){
      if(choice2=="paper"){
          
        score+=2;
         userScore.textContent=score;
         result.textContent=  "YOU WIN";
      }
      else{
          
        score--;
        userScore.textContent=score;
        result.textContent=  "YOU LOSE";
      }
  }
}
 }
function show(){
    image.classList.add('hidden');
    hideRule.innerHTML=" &times;";
    showRule.innerHTML="<div class='deco'> <h2>Rules</h2>  <br> <img src='image-rules.svg' alt='Rule-img' width='230px'> </div>";
}

function closeRule(){
    image.classList.remove('hidden');
    showRule.innerHTML="<div class='click'><span class='rule-img'>Rules</span></div>";
    hideRule.innerHTML="";
}

showRule.addEventListener("click",show);
hideRule.addEventListener("click",closeRule);
document.addEventListener("mouseout",closeRule);

document.addEventListener('keydown',function(e){
  if (e.key=='Backspace' || e.key=='Escape'){
    closeRule();
  }
})

  function replay(){
    computerImage.innerHTML=" ";
    result.textContent=" ";
    playAgain.innerHTML=" ";
    userChoice.classList.add('hidden');
    computerChoice.classList.add('hidden');
    hideUser.classList.add('hidden');
    showRule.innerHTML="<div class='click'><span class='rule-img'>Rules</span></div>"
    image.style.visibility="visible";
  }