
  //DEPENDENCIES
var begin = document.querySelector(".begin");
var homepage = document.querySelector(".homepage");
var main = document.querySelector("main");
var questions = document.querySelector(".questions");
var timeEl = document.querySelector(".timer");
var displayAnswers = document.querySelector(".displayAnswers");
var enterInitials = document.querySelector("#initialInput");
var submit = document.querySelector("#submit");
var warningMessage = document.querySelector("#warningMessage");
var highscore = document.querySelector(".highscore");
var highscoreList = document.querySelector(".highscoreList");
var li = document.createElement("li");
var clearHighscore = document.querySelector("#clearHighscore");
var returnHome = document.querySelector("#returnHome");
var highscoreButton = document.querySelector(".highscoreButtons");

// add questions
var questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "High Tension Markup Language",
      "Helpful Text Machine Learning",
      
    ]
  },
    {
    numb: 2,
    question: "What movie were the inventors of the internet most inspired by?",
    answer: "Star Wars",
    options: [
      "iRobot",
      "Star Wars",
     "The Matrix",
     "Inception",
    ]
  },
    {
    numb: 3,
    question: "Arrays in Javascript can be used to store _____",
    answer: "All of the above",
    options: [
      "Numbers and Strings",
      "Other Arrays",
      "Booleans",
      "All of the above",
    ]
  },
  ];
  // FUNCTIONS
// Once begin is pressed, timer also begins
function beginQuiz() {
    var timeInterval = setInterval(function () {
      timeLeft--;
      timeEl.textContent = timeLeft + "s left";
      if (timeLeft < 0 || i === questionDisplay.length) {
        clearInterval(timeInterval);
        timeEl.textContent = "";
        InputYourName();
      }
    }, 1000);
    highscore.style.display = "none";
    homepage.style.display = "none";
    questionDisplay.style.display = "";
    quizQuestions();
  }
  // Check answers once questions are complete
  function quizQuestions() {
    if (i < questionDisplay.length) {
      generateQuestion();
      checkAnswer();
    } else {
      return;
    }
  }

  // Place questions in array to show up on page
var questionDisplay = [ 1, 2, 3];

// Loading questions and options
function generateQuestion() {
    questions.children[0].textContent = questionDisplay[i].question;
    questions.children[1].children[0].textContent =
    questionDisplay[i].option["Hyper Text Markup Language"];
    questions.children[2].children[0].textContent =
    questionDisplay[i].option["Star Wars"];
    questions.children[3].children[0].textContent =
    questionDisplay[i].option["All of the above"];
  }
  // Check if answer is correct
    function checkAnswer() {
    questions.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      if (
        event.target.matches("button") &&
        questionDisplay[i].correctAnswer === event.target.textContent
      ) {
        i++;
        quizQuestions();
        displayAnswers.style.display = "";
        displayAnswers.children[1].textContent = "Correct Answer!";
        quizQuestions();
      } else if (
        event.target.matches("button") &&
        questionDisplay[i].correctAnswer !== event.target.textContent
      ) {
        i++;
        quizQuestions();
        displayAnswers.style.display = "";
        displayAnswers.children[1].textContent = "Incorrect Anwswer!";
        displayAnswers();
      }
    });
  }
  // Reveal correct answer
function displayAnswers() {
    var answerInterval = setInterval(function () {
      clearInterval(answerInterval);
      displayAnswers.children[1].textContent = "";
      displayAnswers.style.display = "none";
    });
  }

  // USER INTERACTION

begin.addEventListener("click", beginQuiz);