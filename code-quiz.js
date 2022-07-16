
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