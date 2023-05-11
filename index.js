var number1=Math.floor(Math.random()*6)+1;
var randomImageSource="images/dice"+number1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImageSource);

var number2=Math.floor(Math.random()*6)+1;
var randomImageSource1="images/dice"+number2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImageSource1);
if(number1>number2){
    document.querySelector("P").innerHTML="Player 1 Wins🏆";
}
else if(number1<number2){
    document.querySelector("P").innerHTML="Player 2 Wins🏆";
}
else
document.querySelector("P").innerHTML="Draw✨";