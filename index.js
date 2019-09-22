var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImageSource = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelector(".img1").setAttribute("src", randomImageSource);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelector(".img2").setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "player1 won";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "player2 won";
}
else {
  document.querySelector("h1").innerHTML = "It's a draw";
}
