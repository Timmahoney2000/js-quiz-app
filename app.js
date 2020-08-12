/**
 * Example store structure
 */
let questionCounter = 0;
let score = 0;
let questions = [

/*const store = {
   5 or more questions are required */
  /*questions: [ */
    {
      question: 'What is the most current version of JavaScript?',
      answers: [
        '4',
        '5',
        '6',
        '7'
      ],
      correctAnswer: '6'
    },
    {
      question: 'What is used for testing in JavaScript?',
      answers: [
        'console.log',
        'console.lag',
        'console.return',
        'return.log'
      ],
      correctAnswer: 'console.log'
    },
    {
      question: 'Which symbol is used to reference jQuery?',
      answers: [
        '$',
        '@',
        '%',
        '!'
      ],
      correctAnswer: '$'
    },
    {
      question: 'Who created JavaScript?',
      answers: [
        'James Gosling',
        'Al Gore',
        'Brendan Eich',
        'Steve Jobs'
      ],
      correctAnswer: 'Brendan Eich'
    },
    {
      question: 'What type of syntax is used in JavaScript?',
      answers: [
        'snake case',
        'camel case',
        'brief case',
        'donkey case'
      ],
      correctAnswer: 'camel case'
    }
  ];
  /* quizStarted: false,
  questionNumber: 0,
  score: 0 
}; */

let questionsCount = questions.length;

function handleClick(){
  $('.js-start-button').on('click'),function(evt){
    console.log("handleClick() ran");
    $('.progress-section').show();
    $('.start-section').hide();
    $('end-section').hide();
    $('quiz-box').fadeIn("slow");
    renderQuizBox();


  };
}

function renderQuizBox(){
  renderQuestionCount();
  renderQuestion();
  renderScore();
}
function renderScore(){
  $(".progress-section .question-count").text(`${score}/${questionsCount}`);
}
function renderQuestionCount(){
  $(".progress-section .question-count").text(1Question ${questionCounter+1} of ${questionsCount}1);
}

function renderQuestion(){
  $(".questions-form p").text(questions[questionCounter].question);
  $()
}

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