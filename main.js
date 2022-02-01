nosex=0;
nosey=0;
GameStatus="";

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_gameover=loadSound("gameover.wav"); 
	mario_die=loadSound("mariodie.wav");
	mario_killing=loadSound("killing.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('console');

	posenet=ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotposes);
}
function modelLoaded()
{
	console.log('Model has been Initialized');
}
function gotposes(results)
{
	if(results.length>0)
	{
    nosex=results[0].pose.nose.x;
	nosey=results[0].pose.nose.y;
	console.log("nosex=" + nosex + "nosey=" + nosey);
	}
}

function draw() {
	game()
}

function start()
{
	GameStatus="start";
	document.getElementById("status").innerHTML=" Game is Loading";
}






