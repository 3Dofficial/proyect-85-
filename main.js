//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.png";
greencar_image = "car2.png";

//Set initial position for a car image.
greencar_x = 5;
greencar_y = 225;

function add() {
	//upload car, and background images on the canvas.
	background_imaTag = new Image();
    background_imaTag.onload = uploadBackground;
    background_imaTag.src = background_image;

	greencar_imaTag = new Image();
    greencar_imaTag.onload = uploadgreencar;
    greencar_imaTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(background_imaTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(greencar_imaTag, greencar_x,greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencar_y >=0)
	{
    greencar_y = greencar_y - 10;
	console.log("Cuando se presione la flecha hacia arriba, x = " + greencar_x + " | y = " +greencar_y);
	clearCanvas();
	//canvas.remove(greencar_imaTag);
	uploadBackground(); 
	uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(greencar_y <=300)
	{
    greencar_y = greencar_y + 10;
	console.log("Cuando se presione la flecha hacia abajo, x = " + greencar_x + " | y = " +greencar_y);
	clearCanvas();
	uploadBackground(); 
	uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(greencar_x >=10)
	{
    greencar_x = greencar_x - 10;
	console.log("Cuando se presione la flecha hacia la izquierda, x = " + greencar_x + " | y = " +greencar_y);
	clearCanvas();
	uploadBackground(); 
	uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if(greencar_x <=720)
	{
    greencar_x = greencar_x + 10; 
	console.log("Cuando se presione la flecha hacia la derecha, x = " + greencar_x + " | y = " +greencar_y); 
	clearCanvas();
	uploadBackground();
	uploadgreencar();
	}
}

function clearCanvas() {
    // Clear the entire canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
