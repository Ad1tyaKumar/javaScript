for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        sound(this.innerHTML);
        clickAnimation(this.innerHTML);
    });
}


document.addEventListener("keydown", function (key) {

    sound(key.key);
    animation(key.key);
});
document.addEventListener("keyup",function(key)
{
    deanimation(key.key);
});
function sound(h) {

    switch (h) {
        case "w":
            crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "W":
            crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "A":
            kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "S":
            snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "D":
            tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "J":
            tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "K":
            tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "L":
            tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default:
            console.log(buttonText);
            break;
    }

}

function animation(current)
{
    var active= document.querySelector("."+current);
    active.classList.add("pressed");
}
function deanimation(current)
{
    var c=document.querySelector("."+current);
    c.classList.remove("pressed");
}
function clickAnimation(current)
{
    var active= document.querySelector("."+current);
    active.classList.add("pressed");
    setTimeout(function(){
        deanimation(current);
    },100);
}