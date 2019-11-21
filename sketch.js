var yPos = 0;
var diam1 = 90

function setup() {
  // put setup code here
   createCanvas(700, 800);
    
}

function draw() {
     noStroke();
     background(220, 180, 200);
     fill(180, 200, 40);
     strokeWeight(7);
     stroke(180, 100, 240);
     line(10, -10, 10, height);
     line(30, -30, 30, height);
     line(50, -50, 50, height);
     line(70, -70, 70, height);
     line(90, -90, 90, height);
     line(110, -110, 110, height);
     line(130, -130, 130, height);
     line(150, -150, 150, height);
     line(170, -170, 170, height);
     line(190, -190, 190, height);
     line(210, -210, 210, height);
     line(230, -230, 230, height);
     line(250, -250, 250, height);
     line(270, -270, 270, height);
     line(290, -290, 290, height);
     line(310, -310, 310, height);
     line(330, -330, 330, height);
     line(350, -350, 350, height);
     line(370, -370, 370, height);
     line(390, -390, 390, height);
     line(410, -410, 410, height);
     line(430, -430, 430, height);
     line(450, -450, 450, height);
     line(470, -470, 470, height);
     line(490, -490, 490, height);
     line(510, -510, 510, height);
     line(530, -530, 530, height);
     line(550, -550, 550, height);
     line(570, -570, 570, height);
     line(590, -590, 590, height);
     line(610, -610, 610, height);
     line(630, -630, 630, height);
     line(650, -650, 650, height);
     line(670, -670, 670, height);
     line(690, -690, 690, height);
     fill("#bb64ed");
     textSize(150);
     text("Smile", 170, 450);
     fill("#EAB3FC");
     ellipse(400, yPos, 80, diam1);
     //if circle goes to bottom of canvas set to 0
     if (yPos > 1000){
         yPos = 0; 
         diam1 = 80;
     }
     yPos = yPos + 2;
     diam1 = diam1 + .5;
     fill("#8FEDF7");
     ellipse(400, 500, 50, 50);
     fill("lightyellow");
     ellipse(100, 600, 150, 150);
     fill("lightgreen");
     ellipse(100, 200, 100, 100);
     fill("lightyellow");
     ellipse(100, yPos, 80, diam1);
     fill("#EAB3FC");
     ellipse(300, 600, 90, 90);
     fill("#8FEDF7");
     ellipse(300, yPos, 80, diam1);
     fill("lightyellow");
     ellipse(600, 90, 100, 100);
     fill("lightgreen");
     ellipse(50, yPos, 80, diam1);
     fill("#EAB3FC");
     ellipse(50, 450, 70, 70);
     fill("#8FEDF7");
     ellipse(100, yPos, 80, diam1);
    //top right big yellow circle
     fill("lightyellow");
     ellipse(600, 300, 150, 150);
     fill("lightgreen");
     ellipse(600, yPos, 80, diam1);
    //bottom right lightgreen circle
     fill("lightgreen");
     ellipse(650, 600, 100, 100);
     fill("#8FEDF7");
     ellipse(650, yPos, 90, diam1);
     fill("#8FEDF7");
     ellipse(300, 200, 100, 100);
     fill("lightyellow");
     ellipse(300, yPos, 90, diam1);
     fill("#8FEDF7");
     ellipse(540, 800, 100, 100);
     fill("lightyellow");
     ellipse(540, yPos, 80, diam1);
    
}