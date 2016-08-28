var can1, can2, ctx1, ctx2;
var can_w, can_h;
var lastTime, deltaTime, now;

var bgPic ={
	img: new Image(),
	src: "./src/background.jpg"
}

var ane;
var fruit;
var mom;
var baby;
var mouseX;
var mouseY;

document.body.onload = game;
function game () {
	init();
	gameloop();
}
function init () {
	//get canvas and its context
	can1 = document.getElementById("canvas1");//fishes,dust,ui,circle
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");//background,ane,fruits
	ctx2 = can1.getContext('2d');

	can_w = can1.width;
	can_h = can1.height;

	can1.addEventListener( "mousemove", onMouseMove, false );

	lastTime = Date.now();
	deltaTime = 0;

	bgPic.img.src = bgPic.src;
	bgPic.img.onload =function  () {
		// body...
		
	};

	ane = new AneObj();
	ane.init();

	fruit = new FruitObj();
	fruit.init();

	mom = new MomObj();
	mom.init();

	baby = new BabyObj();
	baby.init();

	mouseX = 0.5 * can_w;
	mouseY = 0.5 * can_h;

}
function gameloop () {
	window.requestAnimFrame( gameloop );
	now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if( deltaTime > 40 ){
		deltaTime = 40;
	}

	drawBackground();

	ane.draw();
	fruitMonitor();
	fruit.draw();

	// ctx1.clearRect( 0, 0, can_w, can_h );
	mom.draw();
	momFruitsCollision();

	baby.draw();
	
}
function onMouseMove ( e ) {
	if( e.offsetX || e.layerX){
		mouseX = e.offsetX == undefined? e.layerX : e.offsetX;
		mouseY = e.offsetY == undefined? e.layerY : e.offsetY;
	}
}