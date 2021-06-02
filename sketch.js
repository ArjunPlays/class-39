var canvas, backgroundImage;
var track, ground, cr1 , cr2 , cr3, cr4

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload(){

track = loadImage("images/track.jpg");
ground = loadImage("images/ground.png");
cr1 = loadImage("images/car1.png");
cr2 = loadImage("images/car2.png");
cr3 = loadImage("images/car3.png");
cr4 = loadImage("images/car4.png");
}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  
  if(gameState === 2){
    game.end();
  }
  
  
  }
}
