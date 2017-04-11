var words = ["Hello", "And", "Goodnight"]
j = 0;

var x = 0;
var y = 0;

function setup(){
 createCanvas(600,400);
 
}

function draw(){
    background(0);
    moon();
    shootingStar();
    rowScquares();
    fill(255);
    textSize(50);
    text(words[j], 250, 250);
}

function moon(){
  stroke(0);
  fill(195, 226, 224);
  ellipse(300,100, 150, 150);
  fill(227, 234, 234);
  noStroke();
  ellipse(330,60,50,50);
  ellipse(340,146,30,30);
  ellipse(259,95, 70, 70);
}

function shootingStar(){
    fill(247, 241, 215);
    x += 4;
    y = 150;
    rect(x, y, width, 10);
    if(x > width){
        x = 0 - width;
    }
}

function rowScquares(){
    var xScquare = 10;
    for (var i = 0; i < 10; i++){
        fill(31, 76, 38);
        rect(xScquare, 300, 40, 40);
        xScquare += 60;
    }
}

function hello(){
    j += 1
    if(j==words.length){
        j = 0;
    }
}

function mousePressed(){
    hello();
}