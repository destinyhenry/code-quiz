
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
            nameInput();
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

    //   function checkAnswers(correctAnswers) {

    //     //You could also just use a standard for-loop for this
    //     correctAnswers.forEach(function(correctAnswer, i) {
    //         //Note unless you check prevent i from being appended when i == 1,
    //         // your first answer ID will be "answer1" instead of "answer"
    //         var answer = document.getElementById("correctAnswer" + (i + 1)).value;
    
    //         if (answerIsCorrect(answer, correctAnswer)) {
    //             alert("Well done!");
    
    //         } else {
    //             alert("Too bad!");
    //         }
        // });
        // Check if answer is correct
function checkAnswers() {
    questionBox.addEventListener("click", function (event) {
      event.stopImmediatePropagation();
      if (
        event.target.matches("button") &&
        questionDisplay[i].correctAnswer === event.target.textContent
      ) {
        i++;
        questions();
        checkAnswer.style.display = "";
        checkAnswer.children[1].textContent = "Correct!";
        showAnswer();
      } else if (
        event.target.matches("button") &&
        questionDisplay[i].correctAnswer !== event.target.textContent
      ) {
        i++;
        timeLeft -= 10;
        questions();
        checkAnswer.style.display = "";
        checkAnswer.children[1].textContent = "Wrong!";
        showAnswer();
      }
    });
    // Show if answer is correct
function showAnswer() {
    var answerInterval = setInterval(function () {
      clearInterval(answerInterval);
      checkAnswer.children[1].textContent = "";
      checkAnswer.style.display = "none";
    }, 1000);
  }
  }
        // After running out questions or running out of time, input user score, put into localstorage
    function nameInput() {
        var storedValue = JSON.parse(localStorage.getItem("history"));
        if (storedValue !== null) {
        scoreHistoryArray = storedValue;
        }
        questionBox.style.display = "none";
        highscoreBox.style.display = "none";
        enterInitials.style.display = "";
        enterInitials.children[1].textContent = "Your final score is " + timeLeft;
        submitInitials.addEventListener("click", function (event) {
        event.stopImmediatePropagation();
        var userInitials = document.querySelector("#input-initial").value.trim();
        if (userInitials === "") {
        return;
        }
        var unit = userInitials + "==" + timeLeft;
        scoreHistory.push(unit);
        userInitials.value = "";
        localStorage.setItem("history", JSON.stringify(scoreHistory));
        highscore();
    });
    }
  // Read score history from localstorage
    function highscore() {
        homepage.style.display = "none";
        enterInitials.style.display = "none";
        highscoreBox.style.display = "";
  
    for (var j = 0; j < scoreHistory.length; j++) {
        var li = document.createElement("li");
        li.textContent = scoreHistory[j];
        highscoreList.appendChild(li);
    }
  }
  // access score history when viewing highscores
    function checkScoreHistory() {
        questionBox.style.display = "none";
        homepage.style.display = "none";
        enterInitials.style.display = "none";
        highscoreBox.style.display = "";
        highscoreList.innerHTML = "";
    var storedValue = JSON.parse(localStorage.getItem("history"));
        if (storedValue !== null) {
      scoreHistory= storedValue;
    }
    for (var j = 0; j < scoreHistory.length; j++) {
      var li = document.createElement("li");
      li.textContent = scoreHistory[j];
      highscoreList.appendChild(li);
    }
  }
  // Clear localstorage
    function clearScores() {
        localStorage.removeItem("history");
        highscoreList.innerHTML = "";
        scoreHistory = [];
  }
  // Return to homepage
    function returnHome() {
        timeLeft = 100;
        i = 0;
        highscoreList.innerHTML = "";
        homepage.style.display = "";
        highscoreBox.style.display = "none";
    }


// add event listeners 
begin.addEventListener("click", beginQuiz);
returnHome.addEventListener("click", returnHome);
highscoreButton.addEventListener("click", checkScoreHistory);
clearScores.addEventListener("click", clearScores);


