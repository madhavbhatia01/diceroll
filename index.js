var x = Math.random();
var y = Math.random();
x = Math.floor(1 + x*6);
y = Math.floor(1 + y*6);
document.getElementsByClassName("img1")[0].setAttribute("src" , "images/dice"+x+".png");
document.getElementsByClassName("img2")[0].setAttribute("src" , "images/dice"+y+".png");
if(x>y){
  document.querySelector("h1").textContent = "Player 1 Wins";
}
else if (x==y) {
  document.querySelector("h1").textContent = "Draw";
}
else{
  document.querySelector("h1").textContent = "Player 2 Wins";
}
