var randomNumber1=Math.ceil(Math.random()*6);
var randomNumber2=Math.ceil(Math.random()*6);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";    
}
//console.log(randomNumber1);
    var image1 = document.querySelector(".img1");
    image1.setAttribute("src","./images/dice"+randomNumber1+".png");
//console.log(randomNumber2);
    var image1 = document.querySelector(".img2");
    image1.setAttribute("src","./images/dice"+randomNumber2+".png");
