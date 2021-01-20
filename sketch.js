var canvas;
var music;
var ball,b1,b2,b3,b4;
var edge1,edge2,edge3,edge4;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(720,600);

    //create 4 different surfaces
b1=createSprite(630,575,150,20);
b1.shapeColor="blue";
b2=createSprite(450,575,150,20);
b2.shapeColor="orange";
b3=createSprite(270,575,150,20);
b3.shapeColor="red";
b4=createSprite(90,575,150,20);
b4.shapeColor="green";
edge1=createSprite(360,600,720,25);
edge2=createSprite(720,300,10,600);
edge3=createSprite(0,300,10,600);
edge4=createSprite(360,0,720,10);

    //create box sprite and give velocity
ball=createSprite(200,200,20,20);
ball.shapeColor="black";
ball.velocityX=7;
ball.velocityY=-7;

}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    ball.bounceOff(edge1);
    ball.bounceOff(edge2);
    ball.bounceOff(edge3);
    ball.bounceOff(edge4);
    edge1.visible=false;
    edge2.visible=false;
    edge3.visible=false;
    edge4.visible=false;

    //add condition to check if box touching surface and make it box
    if(ball.isTouching(b1)){
ball.shapeColor="blue";
ball.bounceOff(b1);
music.stop();
    }

     if(ball.isTouching(b2)){
ball.shapeColor="orange";
ball.bounceOff(b2);
music.stop();
    }

     if(ball.isTouching(b3)){
ball.shapeColor="red";
ball.bounceOff(b3);
music.stop();
     }

     if(ball.isTouching(b4)){
ball.shapeColor="green";
ball.bounceOff(b4);
music.stop();
     }

     drawSprites();

}

