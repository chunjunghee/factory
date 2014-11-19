var bg;

var img;  
var img2;
var img3;


function setup()
{
    createCanvas(641,901);
    bg = loadImage("bg.png");
    img = loadImage("sugarBox.png");
    img2 = loadImage("midBox.png");

}


function draw()
{
    background(bg);

    fill(237,112,50);
    noStroke();
 
    image(img,254,0);

    } 