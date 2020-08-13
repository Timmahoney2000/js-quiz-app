
/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

/**
 * Example store structure
 */

/////////////////////////////////////////////////////////////////MY PLAN/////////////////////////////////////////

//Step 1- Display Start Page- when the page loads the renderStartPage function will execute and display the name of the Quiz along with the "Start the Quiz" button.

//Step 2- an EVENT-LISTENER will detect Once the user clicks on the "Take the Quiz" button, then the first question will display in a new rendered page "renderQuestion". The page will
//display the question along with radio buttons to select from multiple answers. =>>> .on('click')

//Step 3- Once the user selects an answer a [SUBMIT] button will appear an EVENT-LISTENER will detect the user has submitted an answer, a function will iterate through our 'question' 
//array using a loop and verify whether the selected answer matches the "correctAnswer" by using a conditional if statement in our array of objects. =>>> .on('click) loop through 
//===>>> for in (question array) if(selectedAnswer == correctAnswer){ score++; }

//Step 4- If the answer matches the "correctAnswer", the page will display a message saying "Correct Answer" and add one to the "SCORE" and a [NEXT] button will appear 
//otherwise will display "Wrong Answer" and display correctAnswer and [NEXT] button will appear.

//Step 5- Once the user clicks the [NEXT] button, the next page with the following question will be displayed. ==> .on('click') questionCounter

//Step 6- Repeat Step 3 through 5 until the user is in the last question

//Step 7- When the user is in the last question and submitted and answer a [RESULTS] button will appear and display the score. ==>> when questionCounter == questions.length -1 

let questionCounter = 0;
let score = 0;

function renderStartPage() {
  let pageContent = `
    <div class="start-page">
      <h1>Gauge your JavaScript Knowledge</h1>
      <h3>Click the button below to get started</h3>
      <button type="button" class= "start-button">Take the Quiz!</button>
    </div>`;

  $('main').html(pageContent);
}

//Keep in mind that certain elements will not 'exists' at the beginning so you must use selectors that do exist and add the .classes as a parameter of listener

//Group listeners together so that they all exist once the page load.

$(function () {

  renderStartPage();

  startListener();

  submitAnswer();

  startOver();
})

function startListener() {
  $('.start-button').on('click', function () {
    $('.start-page').hide();
    renderQuestion();
  })
}

function submitAnswer() {
  $('main').on('click', '.submit-button', function () {
    //console.log('purple dragon majesty hello');
    //check if the user's selected answer matches the correctAnswer.
    //we need the selected answer =>$('input[type=radio]:checked').val()
    console.log($('input[type=radio]:checked').val());//value of checked radio
    console.log(questions[questionCounter].correctAnswer);//value of correct answer
    if ($('input[type=radio]:checked').val() ==
      //we need the correct answer
      questions[questionCounter].correctAnswer) {
      score++;
      console.log(score);
    }
    questionCounter++; //updates the current question by going up one.

    if (questionCounter <= 4) {
      renderQuestion();
    } else {
      renderScore(score);
    }
  })
}

function renderQuestion() {
  //to render the first question I will access the first object in my array 'questions' by referencing the index in the array

  let pageContent = `
  <div class="question-page">
    <p class="current-question">${questions[questionCounter].question}</p>
    <div class="multiple-choice-button"></div>
    <div class="submit-answer-button"><button type="button" class="submit-button">Submit</button>
    </div>
  </div>`

  $('main').html(pageContent);

  for (let i = 0; i < questions[questionCounter].answers.length; i++) {
    $('.multiple-choice-button').append(`<input type="radio" name ="multiple-choice-answer" value="${questions[questionCounter].answers[i]}"><label>${questions[questionCounter].answers[i]}</label>`);
  }

}

function renderScore(score) {
  let pageContent = `
  <div class="score-page">
    <p class="score-prompt">${score}</p>
    
    <div class="start-over-button"><button type="button" class="start-over-button">Start over</button>
    </div>
  </div>`

  $('main').html(pageContent);
}

function startOver() {
  $('main').on('click', '.start-over-button', function () {
    $('.score-page').hide();
    renderStartPage();
  })
}
//Keep in mind that certain elements will not 'exists' at the beginning of the page so you must use selectors that do exist (such as the main element)and add the .classes as a parameter of listener









