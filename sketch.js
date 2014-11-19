var bg;
var dir1=1;
var dir2=1;
var dir3=1;

var count;
var count1;
var count2;


var photo;
var photo2; 
var photo3; 
var photo4;
var photo5;  
var photo6;
var photo7;
var photo8;
var photo9;
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
    photo7 = loadImage("candy1.png");
    photo8 = loadImage("candy2.png");
    photo9 = loadImage("candy3.png");

    count=0;
    count1=0;
    count2=0;




}


function draw()
{
    background(bg);
    drawSnow1();
    drawSnow2();
    drawSnow3();
    

    fill(237,112,50);
    noStroke();

 
    image(img,254,0);
    image(photo,248,124);
    image(photo2,347,124);
    image(photo3,444,124);
    image(photo4,544,0);
    image(photo5,568,117);
    image(photo6,562,375);
    
    image(photo7,574,count);
    count=count+2;
     if(count>360){
    count=0;
    }  

    image(photo8,582,count1+100);
    count1=count1+1;
     if(count1>360){
    count1=0;
    }  


    image(photo9,590,count2+50);
    count2=count2+1.5;
     if(count2>360){
    count2=0;
    }  
    

    } 

function drawSnow1(){
    noStroke();
    
    fill(234,147,183); 
    ellipse(265,dir1+20,3,3);
    ellipse(270,dir1+33,4,4);
    ellipse(278,dir1+27,7,7);
    ellipse(285,dir1+10,5,5);
    ellipse(290,dir1+16,3,3);


    dir1=dir1+1.5;    
    if(dir1>130){
     dir1=40;
 }

}    

function drawSnow2(){
    noStroke();

    fill(89,47,19);
    ellipse(380,dir2+20,3,3);
    ellipse(365,dir2+33,4,4);
    ellipse(378,dir2+27,7,7);
    ellipse(390,dir2+10,5,5);
    ellipse(370,dir2+16,3,3);
    
    dir2=dir2+1;    
    if(dir2>130){
     dir2=40;
 }

}

function drawSnow3(){
    noStroke();

    fill(127,203,183);
    ellipse(490,dir3+20,3,3);
    ellipse(475,dir3+33,4,4);
    ellipse(460,dir3+27,7,7);
    ellipse(483,dir3+10,5,5);
    ellipse(480,dir3+16,3,3);
    
    dir3=dir3+0.8;    
    if(dir3>130){
     dir3=40;
 }

}
