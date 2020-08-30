'use strict';

const store = {
  questions: [
  {
    question: 'What is the most current version of JavaScript?',
    answers: [
      '4',
      '5',
      '6',
      '7',
    ],
    correctAnswer: 'c',
    correctAnswerChoice: '6'
  },
  {
    question: 'What is used for testing in JavaScript?',
    answers: [
      'console.log',
      'console.lag',
      'console.return',
      'return.log'
    ],
    correctAnswer: 'a',
    correctAnswerChoice: 'console.log'
  },
  {
    question: 'Which symbol is used to reference jQuery?',
    answers: [
      '$',
      '@',
      '%',
      '!'
    ],
    correctAnswer: 'a',
    correctAnswerChoice: '$'
  },
  {
    question: 'Who created JavaScript?',
    answers: [
      'James Gosling',
      'Al Gore',
      'Brendan Eich',
      'Steve Jobs'
    ],
      correctAnswer: 'c',
    correctAnswerChoice: 'Brendan Eich'
  },
  {
    question: 'What type of syntax is used in JavaScript?',
    answers: [
      'snake case',
      'camel case',
      'brief case',
      'donkey case'
    ],
    correctAnswer: 'b',
    correctAnswerChoice: 'camelCase'
  },
],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  feedback: false,
  feedbackScreen: false
};

function introView(){
return `
<div class="introView">
    <h2>Score ${Math.round(store['questions'].length/2)}</h2> 
    <button id="start">START</button>
  </div>
`;
}

function questionView(){
let questions = store['questions'];
return `
<div class="questionView">
    <h1>Question ${store['questionNumber'] + 1} of 5</h1>
    <div class="questionContainer">
      <form action="/">
        <fieldset>
          <legend>
            <p>${questions[store['questionNumber']]['question']}</p>
          </legend>
          <input type="radio" name="selection" id="a" value="a">
          <label for="a">A. ${questions[store['questionNumber']]['answers'][0]}</label>
          <br>
          <input type="radio" name="selection" id="b" value="b" >
          <label for="b">B. ${questions[store['questionNumber']]['answers'][1]}</label>
          <br>
          <input type="radio" name="selection" id="c" value="c" >
          <label for="c">C. ${questions[store['questionNumber']]['answers'][2]}</label>
          <br>
          <input type="radio" name="selection" id="d" value="d" >
          <label for="d">D. ${questions[store['questionNumber']]['answers'][3]}</label>
        </fieldset>
        ${store['questionNumber'] === 4 ? `<input type="submit" name="final-submit" id="final" value="SUBMIT FINAL RESULTS">` : `<input type="submit" name="next-submit" id="next" value="SUBMIT">`}
      </form>
    </div>
    <h1>Correct answers: ${store['score']} of ${store['questions'].length}</h1>
  </div>
`;
}

function feedbackView(){
let correctAnswer = store['questions'][store['questionNumber'] - 1]['correctAnswer'].toUpperCase();
let correctAnswerChoice = store['questions'][store['questionNumber'] - 1]['correctAnswerChoice'];
return `
<div class="feedbackView">
  <h2>${store['feedback'] ? 'Correct!': 'Incorrect!'}</h2>
  <p>${!store['feedback'] ? `The correct answer was: <br>${correctAnswer}. ${correctAnswerChoice}`: 'Good Job!'}</p>
 
  <h2>Correct answers: ${store['score']} of ${store['questions'].length}</h2>
  <button id="continue">CONTINUE</button>
</div>
`;
}

function resultsView(){
let winMessage = 'Nice job!';
let loseMessage = 'Try again after a little more studying!';


return `
<div class="resultsView">
    <div class="resultsContainer">
      <h2>END OF GAME</h2>
      <h3>Score: </h3>
      <ul>
        <li>
          <p>Correct: ${store['score']}</p>
        </li>
        <li>
          <p>Incorret: ${Math.abs(store['score'] - store['questions'].length)}</p>
        </li>
      </ul>
    </div>
    <p>${store['score'] >= 3 ? winMessage : loseMessage}</p>
    <p>Click here to begin!</p>
    <button id="new">TRY AGAIN</button>
  </div>
`;
}

function renderModel(){
if(store['quizStarted'] === false){
  $('main').html(introView);
}
else if(store['questionNumber'] === 5 && store['feedbackScreen'] === false){
  $('main').html(resultsView);
}
else if(store['feedbackScreen'] === true){
  $('main').html(feedbackView);
}
else{
  $('main').html(questionView);
}
}

function submitAnswer(){
if($('input:radio[name=selection]:checked')['length'] > 0){
  if($('input[name=selection]:checked').val() === store['questions'][store['questionNumber']]['correctAnswer']){
    store['feedback'] = true;
    store['questionNumber']++;
    store['score']++;
  }
  else{
    store['feedback'] = false;
    store['questionNumber']++;
  }
  store['feedbackScreen'] = true;
}
else{
  alert('You must answer before continuing.');
}
}

function handleStart(){
$('main').on('click', '#start', function(event){
  store['quizStarted'] = true;
  renderModel();
});
}

function handleNext(){
$('main').on('click', '#next', function(event){
  submitAnswer();
  renderModel();
});
}

function handleContinue(){
$('main').on('click', '#continue', function(event){
  store['feedbackScreen'] = false;
  renderModel();
});
}

function handleSubmit(){
$('main').on('click', '#final', function(event){
  submitAnswer();
  renderModel();
});
}

function handleNewGame(){
$('main').on('click', '#new', function(event){
  store['score'] = 0;
  store['questionNumber'] = 0;
  store['feedbackScreen'] = false;
  store['quizStarted'] = false;
  renderModel();
});
}

function main(){
renderModel();
handleStart();
handleNext();
handleContinue();
handleSubmit();
handleNewGame();
}

$(main);
