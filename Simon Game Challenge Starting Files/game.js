// alert("hi");

// console.log(Math.floor(Math.random()*4));
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var cnt = 0;
function nextSequence() {
    userClickedPattern=[];
    cnt += 1;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    $("h1").text("Level " + cnt);
}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}
$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

$(document).on("keypress", function () {
    if ($("h1").text() === "Press A Key to Start" || $("h1").text() === "Game Over, Press Any Key to Restart" ) {
        cnt = 0;
        nextSequence();
    }
});

function checkAnswer(currentLevel)
{
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel])
    {
        // console.log(true);
           if(gamePattern.length===userClickedPattern.length)
           {
               setTimeout(function(){
                   nextSequence();
                },1000);
            }
        
    }
    else
    {
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        gamePattern=[];
        setTimeout(function(){$("body").removeClass("game-over")},200)
    }
}

