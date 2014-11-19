var bg;
var dir1=1;

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
    noStroke();
    
    fill(234,147,183);
    
    ellipse(265,dir1+20,3,3);
    ellipse(270,dir1+33,4,4);
    ellipse(278,dir1+26,7,7);
    ellipse(285,dir1,5,5);
    ellipse(290,dir1+16,3,3);
    
    dir1=dir1+1;    
    if(dir1>130){
     dir1=50;
 }

}    