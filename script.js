// Setting the scores and selecting HTML elements.
let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
// The randomClasses array contains the rock paper and scissor Icons.
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

// Game Functionality: Setting forEach function for the buttons.
const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
        // Random rock paper scissor for the computer and the player
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;

           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];
           // Game Score.

           // If it's a Tie .
           if(showIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               text.innerHTML = "It's a draw.";
               text.style.color = 'grey';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgba(87, 120, 250, 0.75);';
           } 
          // If it's not a Tie.
           else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "You Won!";
               text.style.color = 'green';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgba(87, 120, 250, 0.75);';
           }
            else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Lost!";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgba(87, 120, 250, 0.75);';
           }
           else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Lost!";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgba(87, 120, 250, 0.75);';
           }
           else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "You Won!";
               text.style.color = 'green';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgba(87, 120, 250, 0.75);';
           }
           else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Lost!";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgba(87, 120, 250, 0.75);';
           }
           else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "You Won!";
               text.style.color = 'green';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgba(87, 120, 250, 0.75);';
           }
        });
    });
}
// Calling the function.
game();