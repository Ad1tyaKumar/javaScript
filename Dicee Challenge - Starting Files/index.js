var randomNumber1= Math.ceil(6*Math.random());
var randomNumber2= Math.ceil(6*Math.random());

var randomDiceImage= "images/dice"+randomNumber1+".png";
var randomDiceImage1= "images/dice"+randomNumber2+".png";
var img1= document.querySelectorAll("img")[0];

img1.setAttribute("src",randomDiceImage);

var img2= document.querySelectorAll("img")[1];

img2.setAttribute("src",randomDiceImage1);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="Player 1 wins.";
}
else if(randomNumber1==randomNumber2)
{
    document.querySelector("h1").textContent="Draw";
}
else
{
    document.querySelector("h1").textContent="Player 2 wins.";
}