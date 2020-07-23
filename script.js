
var currentQuestion=0;
var currentScore=0;
var currentTime=45;
var questionContainer=document.getElementById("container");
var interval;

questionContainer.addEventListener("click",function(event) {
    if(event.target.matches("li")) {
        var answer=event.target.innerText;
​
        var question=questions[currentQuestion];
​
        if(answer===question.answer) {
            currentScore++;
        } else {
            currentTime=currentTime-5;
        }
        currentQuestion++;
        if(currentQuestion>=questions.length) {
            finishQuiz();
        } else {
            showCurrentQuestion();
        }       
        
    }
});


//Showing the Highest Score 
function showHighScores() {
    var highestScore = localStorage.getItem("highScore");
    var userName = localStorage.get("userName");

    if (highestScore && userName) {
        //Display Highest Score (alert or show in)
    }
}

//Here is how I finsih my quiz 
function finishQuiz() {
    clearInterval(interval);
    var highestScore = localStorage.get("highScore");

    if (!highestScore || currentScore > highestScore) {
        var userName = prompt("What is your name?");
        localStorage.setItem("highScore", currentScore);
        localStorage.setItem("userName", userName);
    }
}

//My array of test questions 
var question = [
    {
        question: "Question 1",
        options: ["1", "2", "3", "4"],
        answer: "1"
    },
    {
        question: "Question 2",
        options: ["1", "2", "3", "4"],
        answer: "4"
    }
];

//How I show the Current Questions 
function showCurrentQuestion() {
    var question=questions[currentQuestion];
    questionContainer.innerHTML="";
​
    var questionTitle=document.createElement("h1");
    questionTitle.innerText=question.question;
    questionContainer.appendChild(questionTitle);
​
    var optionsList=document.createElement("ul");
​
    for(var i=0;i<question.options.length;i++) {
        var questionLi=document.createElement("li");
        questionLi.innerText=question.options[i];
        optionsList.appendChild(questionLi);
​
    }
    questionContainer.appendChild(optionsList);
}

//Starts the Quiz
function startQuiz() {
    showCurrentQuestion();
    // Set the interval to run every second
    //- Update the time counter
    //- Check if the time ran out 
    //- If the time ran out finishQuiz()
}