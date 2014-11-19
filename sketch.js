var bg;

var photo;
var photo2; 
var photo3; 
var photo4;
var photo5;  
var photo6;


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
    photo6 = loadImage("candyBox.png");




}


function draw()
{
    background(bg);
    drawSnow();

    fill(237,112,50);
    noStroke();
 
    image(img,254,0);
    image(photo,248,124);
    image(photo2,347,124);
    image(photo3,444,124);
    image(photo4,544,0);
    image(photo5,568,117)
    image(photo6,562,375)

    

    } 

function drawSnow(){
    var r=Math.random();
    stroke(255,255,255,128);
    strokeWeight(20);

    fill(255);
    ellipse(260,dir1,10,10);
    ellipse(263,dir1+500,10,10);
    ellipse(200,dir1+r,30,30);
    
    dir1=dir1+3;     
    if(dir1>100){
     dir1=-800;
 }

}    