gamePattern = [];
userClickedPattern = [];
buttonColors = ["red", "blue", "green", "yellow"];
var level = 0;


$(document).keypress(function (e) {
    if (e.which == 13 && level == 0) {
        nextSequence();
    }
});


function startOver() {
    level = 0;
    gamePattern = [];
}

function nextSequence() {
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4)
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log("Next sequence: " + gamePattern)
    userClickedPattern = [];

    switch (randomNumber) {
        case 0: $('#red').fadeOut(150).fadeIn(150);
            var audio = new Audio('sounds/red.mp3');
            audio.play();
            break;
        case 1: $('#blue').fadeOut(150).fadeIn(150);
            var audio = new Audio('sounds/blue.mp3');
            audio.play();
            break;
        case 2: $('#green').fadeOut(150).fadeIn(150);
            var audio = new Audio('sounds/green.mp3');
            audio.play();
            break;
        case 3: $('#yellow').fadeOut(150).fadeIn(150);
            var audio = new Audio('sounds/yellow.mp3');
            audio.play();
            break;
        default: alert("Error!");
            break;
    }
    return randomNumber;
}

$(".btn").click(function () {
    if (level != 0) {
        var userChosenColor = $(this).attr("id");
        var convert = "#" + userChosenColor;

        userClickedPattern.push(userChosenColor);
        chceckAnwser();
        playSound(userChosenColor);
        animatePress(convert);
    }
})

function playSound(userClick) {
    switch (userClick) {
        case "red": var audio = new Audio('sounds/red.mp3');
            audio.play();
            break;
        case "blue": var audio = new Audio('sounds/blue.mp3');
            audio.play();
            break;
        case "green": var audio = new Audio('sounds/green.mp3');
            audio.play();
            break;
        case "yellow": var audio = new Audio('sounds/yellow.mp3');
            audio.play();
            break;
        default:
            alert("Wrong click!");
            break;

    }
}

function chceckAnwser() {
    console.log(gamePattern[gamePattern.length - 1])
    console.log(userClickedPattern[userClickedPattern.length - 1])

    if (userClickedPattern[userClickedPattern.length - 1] != gamePattern[userClickedPattern.length - 1]) {
        console.log("Wrong")
        var audio = new Audio('sounds/wrong.mp3');
        audio.play();

        $("#body").addClass("game-over");
        setTimeout(function () {
            $(body).removeClass('game-over');
        }, 200);

        $("#level-title").text("Game Over, Press Enter Key to Restart");
        startOver();
    }
    else if (userClickedPattern.length == gamePattern.length) {
        console.log("Success")
        setTimeout(function () {
            nextSequence();;
        }, 1000);
    }

}

function animatePress(currentColor) {
    $(currentColor).addClass("pressed");

    setTimeout(function () {
        $(currentColor).removeClass('pressed');
    }, 100);
}