gamePattern = [];
userClickedPattern = [];
buttonColors = [red, blue, green, yellow];


randomChosenColor = buttonColors[nextSequence()];
gamePattern.push(randomChosenColor);


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4)
    switch (randomNumber) {
        case 0: $('#red').fadeOut(150).fadeIn(150);
            var audio = new Audio('/sounds/red.mp3');
            audio.play();
            break;
        case 1: $('#blue').fadeOut(150).fadeIn(150);
            var audio = new Audio('/sounds/blue.mp3');
            audio.play();
            break;
        case 2: $('#green').fadeOut(150).fadeIn(150);
            var audio = new Audio('/sounds/green.mp3');
            audio.play();
            break;
        case 3: $('#yellow').fadeOut(150).fadeIn(150);
            var audio = new Audio('/sounds/yellow.mp3');
            audio.play();
            break;
        default: alert("Error!");
            break;
    }
    return randomNumber;
}

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    var convert = "#" + userChosenColor;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(convert);
})

function playSound(userClick) {
    switch (userClick) {
        case "red": var audio = new Audio('/sounds/red.mp3');
            audio.play();
            break;
        case "blue": var audio = new Audio('/sounds/blue.mp3');
            audio.play();
            break;
        case "green": var audio = new Audio('/sounds/green.mp3');
            audio.play();
            break;
        case "yellow": var audio = new Audio('/sounds/yellow.mp3');
            audio.play();
            break;
        default:
            alert("Wrong click!");
            break;

    }
}

function animatePress(currentColor) {
    $(currentColor).addClass("pressed");

    setTimeout(function () { 
        $(currentColor).removeClass('pressed');
    }, 100);
}