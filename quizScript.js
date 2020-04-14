var i = 0;
var score = 0;
var secondsLeft = 60;
var timer = document.querySelector("#time");
var messageDiv = document.querySelector("#message");
var storedScores;
var scoreList = [];
var optionOne = document.getElementById("optionOne");
var optionTwo = document.getElementById("optionTwo");
var optionThree = document.getElementById("optionThree");
var optionFour = document.getElementById("optionFour");

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Timer " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Out of Time");
            questionEnder();
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
    return (score)
}
function questionEnder() {

    var scoreTag = document.createElement("h1");
    var inputTag = document.createElement("input");
    var submitButton = document.createElement("button");
    score += secondsLeft * .1;
    score = score.toFixed(2);
    document.getElementById("question").textContent = "All Done!";
    optionOne.remove();
    optionTwo.remove();
    optionThree.remove();
    optionFour.remove();
    document.body.children[1].appendChild(scoreTag);
    document.getElementsByTagName("h1")[0].setAttribute("id", "score");
    document.getElementById("score").textContent = "Your Score: " + score;
    document.body.children[1].appendChild(inputTag);
    document.getElementsByTagName("input")[0].setAttribute("id", "input-field");
    submitButton.textContent = "Submit";
    document.body.children[1].appendChild(submitButton);
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var highScoreText = new Object();
        highScoreText.name = inputTag.value.trim();
        highScoreText.newScore = score;
        storeScores(highScoreText);
        window.location.href = "scores.html";
    });
}
function questionSetter() {

    optionOne.hidden = false;
    optionTwo.hidden = false;
    optionThree.hidden = false;
    optionFour.hidden = false;

    document.getElementById("startButton").hidden = true;
    if (i === questions.length) {
        questionEnder();
    }
    else {
        document.getElementById("question").textContent = questions[i]["title"];
        document.getElementById("optionOne").textContent = questions[i]["choices"][0];
        document.getElementById("optionTwo").textContent = questions[i]["choices"][1];
        document.getElementById("optionThree").textContent = questions[i]["choices"][2];
        document.getElementById("optionFour").textContent = questions[i]["choices"][3];
    }
}

function storeScores(highScoreText) {
    tempArray = JSON.parse(localStorage.getItem("scores"));
    if (tempArray === null) {
        scoreList.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(scoreList));
    }
    else {
        tempArray.push(highScoreText);
        localStorage.setItem("scores", JSON.stringify(tempArray));
    }
}

document.getElementById("startButton").addEventListener("click", questionSetter);
document.getElementById("startButton").addEventListener("click", setTime);
document.getElementById("startButton").addEventListener("click", function () {
    messageDiv.textContent = "";
});

optionOne.hidden = true;
optionTwo.hidden = true;
optionThree.hidden = true;
optionFour.hidden = true;

document.getElementById("optionOne").addEventListener("click", function () {
    if (questions[i]["choices"][0] === questions[i]["options"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionSetter();
})

document.getElementById("optionTwo").addEventListener("click", function () {
    if (questions[i]["choices"][1] === questions[i]["options"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionSetter();
})

document.getElementById("optionThree").addEventListener("click", function () {
    if (questions[i]["choices"][2] === questions[i]["options"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionSetter();
})

document.getElementById("optionFour").addEventListener("click", function () {
    if (questions[i]["choices"][3] === questions[i]["options"]) {
        messageDiv.textContent = "Correct!";
        score++;
    }
    else {
        messageDiv.textContent = "Wrong!";
        secondsLeft -= 10;
    }
    i++;
    questionSetter();
})