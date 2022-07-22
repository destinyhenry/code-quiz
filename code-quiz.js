
  //DEPENDENCIES
var beginQuiz = document.querySelector(".beginQuiz");
var homepage = document.querySelector(".homepage");
var main = document.querySelector("main");
var questionBox = document.querySelector(".questions");
var timerEl = document.querySelector(".timer");
var displayAnswers = document.querySelector("#answer");
var enterInitials = document.querySelector("#enter-initials");
var submitInitials = document.querySelector("#submit");
var warningMessage = document.querySelector("#warningMessage");
var highscore = document.querySelector(".highscore");
var highscoreList = document.querySelector(".highscoreList");
var li = document.createElement("li");
var clearHighscore = document.querySelector("#clearHighscore");
var returnHome = document.querySelector("#returnHome");
var highscoreButton = document.querySelector(".highscoreButton");

var timeRemaining = 60;
var i = 0;
var scoreHistory = [];

var question1 = {
    question: "1. What does HTML stand for?",
    options: [
    "1 - Hyper Text Preprocessor", 
    "2 - Hyper Text Markup Language", 
    "3 - High Tension Markup Language",
    "4 - Helpful Text Machine Learning",
    ],
    correctAnswer: "2 - Hyper Text Markup Language",
  };
  
  var question2 = {
    question:
      "2. What movie were the inventors of the internet most inspired by?",
    options: [
      "1 - iRobot",
      "2 - Star Wars",
      "3 - The Matrix",
      "4 - Inception",
    ],
    correctAnswer: "2 - Star Wars",
  };

  var question3 = {
    question: "3. Arrays in Javascript can be used to store ______.",
    options: [
      "1 - Numbers and strings",
      "2 - Other Arrays",
      "3 - Booleans",
      "4 - All of the above",
    ],
    correctAnswer: "4 - All of the above",
  };
 
  // Put questions into an Array
  var questionDisplay = [
    question1,
    question2,
    question3,
  ];
  
  