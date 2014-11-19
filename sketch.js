var bg;

var photo;
var photo2; 
var photo3; 
var photo4;
var photo5;  


function setup()
{
    createCanvas(641,901);
    bg = loadImage("bg.png");
    img = loadImage("sugarBox.png");
    img2 = loadImage("midBox.png");
    photo = loadImage("up1.png");
    photo2 = loadImage("up2.png");
    photo3 = loadImage("up3.png");
    photo4 = loadImage("candyBox2.png");
    photo5 = loadImage("rightLine.png");




}


function draw()
{
    background(bg);

    fill(237,112,50);
    noStroke();
 
    image(img,254,0);
    image(photo,248,124);
    image(photo2,347,124);
    image(photo3,444,124);
    image(photo4,554,0);
    image(photo5,580,117)

    } 