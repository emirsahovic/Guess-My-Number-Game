'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Kada se ne unese broj 
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
  //Kada se unese broj koji nije u rasponu (1-20)
  else if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent = 'Number not in range!';
  }
  //Kada igrac pogodi broj
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').classList.add('anim');
    document.querySelector('.message').style.width = '215px';
    document.querySelector('.message').style.backgroundColor = 'darkgreen';
    document.querySelector('.message').style.textAlign = 'left';


    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //Kada igrac ne pogodi broj
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').style.width = '150px';
      document.querySelector('.message').style.textAlign = 'center';
      document.querySelector('.message').style.backgroundColor = 'red';
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#555';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').classList.remove('anim');
});