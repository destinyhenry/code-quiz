
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

question1 = {
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
 
//   Put questions into array
  var questionDisplay = [question1, question2, question3,];
  
    // once begin button is pressed, the timer is triggered as well
    function beginQuiz() {
        var timeInterval = setInterval(function () {
          timeLeft--;
          timerEl.textContent = timeLeft + "s left";
          if (timeLeft < 0 || i === questionDisplay.length) {
            clearInterval(timeInterval);
            timerEl.textContent = "";
            NameInput();
          }
        }, 1000);
        highscoreBox.style.display = "none";
        homepage.style.display = "none";
        questionBox.style.display = "";
        questions();
      }
    //   allow questions to show up on the page
    function questions() {
        if (i < questionDisplay.length) {
          generateQuestion();
          checkIfCorrect();
        } else {
          return;
        }
      }
      // Loading questions and options
      function generateQuestion() {
       questionBox.children[0].textContent = questionDisplay[i].question;
       questionBox.children[1].children[0].textContent =
          questionDisplay[i].options[0];
          questionBox.children[2].children[0].textContent =
          questionDisplay[i].options[1];
          questionBox.children[3].children[0].textContent =
          questionDisplay[i].options[2];
          questionBox.children[4].children[0].textContent =
          questionDisplay[i].options[3];
      }

      function checkAnswers(correctAnswers) {

        //You could also just use a standard for-loop for this
        correctAnswers.forEach(function(correctAnswer, i) {
            //Note unless you check prevent i from being appended when i == 1,
            // your first answer ID will be "answer1" instead of "answer"
            var answer = document.getElementById("correctAnswer" + (i + 1)).value;
    
            if (answerIsCorrect(answer, correctAnswer)) {
                alert("Well done!");
    
            } else {
                alert("Too bad!");
            }
        });
    }

// add event listeners 
beginQuiz.addEventListener("click", beginQuiz);

viewScores.addEventListener("click", viewScores);

clearHistory.addEventListener("click", clearLocalStorage);

returnHome.addEventListener("click", returnHome);