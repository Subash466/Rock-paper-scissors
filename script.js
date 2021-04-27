'use-script'

const user=document.getElementById('user-img');
const obj = document.getElementById("com-img");
const image=document.querySelector(".image");
const showRule=document.querySelector(".click");
const hideRule=document.querySelector(".icon-close");
const match=document.querySelector(".match");
const ans=document.querySelector(".ans");
const again=document.querySelector(".again");
const paper=document.querySelector(".paper");
const userScore=document.querySelector(".user-score");
const picked=document.querySelector(".you");
const picked1=document.querySelector(".comp");

let score=5;
userScore.textContent=score;
let computer1="";
let userAns="";
function computerSuffle(){
  let computer=Math.floor(Math.random()*3);
  obj.innerHTML=" ";
if (computer==0){
   computer1="rock";
  var pic = document.createElement("img");
  pic.style.backgroundColor=" rgb(216, 216, 216)";
  pic.style.borderTop="1rem solid hsl(349, 71%, 52%)";
  pic.style.borderBottom="1rem solid hsl(349, 70%, 56%)";
  pic.style.borderRight="1rem solid hsl(349, 71%, 52%)";
  pic.style.borderLeft="1rem solid hsl(349, 70%, 56%)";
  pic.style.borderRadius="10rem";
  pic.style.padding="2rem";
  pic.style.width="170px";
  pic.src = "rock.svg";
  pic.alt="rock";
  var add = document.getElementById("com-img");
  add.appendChild(pic);
}else if(computer==1){
  computer1="scissor";
  var pic = document.createElement("img");
  pic.style.backgroundColor=" rgb(216, 216, 216)";
  pic.style.borderTop="1rem solid hsl(39, 89%, 49%)  ";
  pic.style.borderBottom="1rem solid hsl(40, 84%, 53%) ";
  pic.style.borderRight="1rem solid hsl(39, 89%, 49%)  ";
  pic.style.borderLeft="1rem solid hsl(40, 84%, 53%) ";
  pic.style.borderRadius="10rem";
  pic.style.padding="2rem";
  pic.style.width="170px";
  pic.src = "scissor.svg";
  pic.alt="scissor";
  var add = document.getElementById("com-img");
  add.appendChild(pic);
}
else{
  computer1="paper";
  var pic= document.createElement("img");
  pic.style.backgroundColor=" rgb(216, 216, 216)";
  pic.style.borderTop="1rem solid hsl(230, 89%, 62%)";
  pic.style.borderBottom="1rem solid hsl(230, 89%, 65%)";
  pic.style.borderRight="1rem solid hsl(230, 89%, 62%)";
  pic.style.borderLeft="1rem solid hsl(230, 89%, 65%)";
  pic.style.borderRadius="10rem";
  pic.style.padding="2rem";
  pic.style.width="170px";
  pic.src = "paper.svg";
  pic.alt="paper";
  var add = document.getElementById("com-img");
  add.appendChild(pic);
}
}
function rockClick(){
  image.style.visibility="hidden";
   userAns="rock";
  computerSuffle();
  console.log(compare(userAns,computer1));
  var addImage=document.getElementsByClassName("rock");
  addImage[0].style.borderTop="1rem solid hsl(349, 71%, 52%)";
  addImage[0].style.borderBottom="1rem solid hsl(349, 70%, 56%)";
  addImage[0].style.borderRight="1rem solid hsl(349, 71%, 52%)";
  addImage[0].style.borderLeft="1rem solid hsl(349, 70%, 56%)";
  addImage[0].style.borderRadius="10rem";
  addImage[0].style.padding="2rem";
  addImage[0].style.backgroundColor="rgb(216, 216, 216)";
  addImage[0].innerHTML="<img src='rock.svg' alt='rock' width='80px'>";
 
 }
 function paperClick(){
  image.style.visibility="hidden";
  userAns="paper";
  computerSuffle();
  console.log(compare(userAns,computer1));
  var addImage=document.getElementsByClassName("paper");
  addImage[0].style.borderTop="1rem solid hsl(230, 89%, 62%)";
  addImage[0].style.borderBottom="1rem solid hsl(230, 89%, 65%)";
  addImage[0].style.borderRight="1rem solid hsl(230, 89%, 62%)";
  addImage[0].style.borderLeft="1rem solid hsl(230, 89%, 65%)";
  addImage[0].style.borderRadius="10rem";
  addImage[0].style.padding="2rem";
  addImage[0].style.backgroundColor="rgb(216, 216, 216)";
  addImage[0].innerHTML="<img src='paper.svg' alt='paper' width='75px'>";
 }
 function scissorClick(){
 image.style.visibility="hidden";
  userAns="scissor";
  computerSuffle();
  console.log(compare(userAns,computer1));
  var addImage=document.getElementsByClassName("scissor");
  addImage[0].style.borderTop="1rem solid hsl(39, 89%, 49%)  ";
  addImage[0].style.borderBottom="1rem solid hsl(40, 84%, 53%) ";
  addImage[0].style.borderRight="1rem solid hsl(39, 89%, 49%)  ";
  addImage[0].style.borderLeft="1rem solid hsl(40, 84%, 53%) ";
  addImage[0].style.borderRadius="10rem";
  addImage[0].style.padding="2rem";
  addImage[0].style.backgroundColor="rgb(216, 216, 216)";
  addImage[0].innerHTML="<img src='scissor.svg' alt='scissor' width='75px'>";
 }
 function compare(choice1,choice2){
  again.innerHTML="<div class='again'> <button onclick='replay()'>Play again!</button></div>";
  paper.classList.remove('hidden');
  picked.classList.remove('hidden');
  picked1.classList.remove('hidden');
  if(choice1==choice2){
        score++;
        userScore.textContent=score;
      ans.textContent= "The result is a tie!";
  }else{
  if(choice1=="rock"){
      if(choice2=="scissor"){
          
          score+=2;
          userScore.textContent=score;
          ans.textContent= "YOU WIN";
          
      }
      else{
         score--;
         userScore.textContent=score;
         ans.textContent=  "YOU LOSE";
      }
  }
  if(choice1=="paper"){
      if(choice2=="rock"){
          
        score+=2;
        userScore.textContent=score;
        ans.textContent=  "YOU WIN";
      }
      else{
        
        score--;
        userScore.textContent=score;
       ans.textContent=  "YOU LOSE";
      }
  }
  if(choice1=="scissor"){
      if(choice2=="paper"){
          
        score+=2;
         userScore.textContent=score;
        ans.textContent=  "YOU WIN";
      }
      else{
          
        score--;
        userScore.textContent=score;
          ans.textContent=  "YOU LOSE";
      }
  }
}
 }
function show(){
    match.classList.add('hidden');
    image.classList.add('hidden');
    hideRule.innerHTML=" <img src='icon-close.svg' alt='close-icon-img'>";
    showRule.innerHTML="<div class='deco'> <h2>Rules</h2>  <br> <img src='image-rules.svg' alt='Rule-img'> </div>";
    
    
}

function closeRule(){
    match.classList.remove('hidden');
    image.classList.remove('hidden');
    showRule.innerHTML="<div class='click'><span class='click1'>Rules</span></div>";
    hideRule.innerHTML="";
}

showRule.addEventListener("click",show);
hideRule.addEventListener("click",closeRule);

document.addEventListener('keydown',function(e){
    if (e.key=='Escape'){
      closeRule();
    }
  })

  function replay(){
    obj.innerHTML=" ";
    ans.textContent=" ";
    again.innerHTML=" ";
    picked.classList.add('hidden');
    picked1.classList.add('hidden');
    paper.classList.add('hidden');
    image.style.visibility="visible";
  }