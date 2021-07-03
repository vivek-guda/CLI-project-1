var readlineSync = require("readline-sync");
var chalk = require("chalk");

var score = 0;

var username = readlineSync.question("Enter your name: ");
console.log("Welcome " + username);

function play(question, answer) {
  var useranswer = readlineSync.question(question);
  if (useranswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green.inverse("you are right!"));
    score++;
  } else {
    console.log(chalk.red.inverse("you are wrong!"));
  }
  console.log("---------------");
}

var question1 = {
  question: "where do I live? ",
  answer: "India",
};

var question2 = {
  question: "How old am I? ",
  answer: "19",
};

var leaderboard = [1, 0];

var questions = [question1, question2];

for (var i = 0; i < questions.length; i++) {
  var currentquestion = questions[i];
  play(currentquestion.question, currentquestion.answer);
}

leaderboard.push(score);

var highestScore = 0;

for (let scores in leaderboard) {
  if (scores > highestScore) {
    highestScore = score;
  }
}
console.log("Your score : ", score);
console.log(" ");
console.log("Highest score is: ", highestScore);
