var bg;
var dir1=40;
var dir2=40;
var dir3=40;
var dir4=79;
var img;  
var img2;
var img3;
var img4;
var img5;
var img6;

var img8;
var i;
var timing;
var duration;
var img9;
var img10;
var img11;
var img12;

var photo;
var photo2; 
var photo3; 
var photo4;
var photo5;  
var photo6;


var cup5;
var cup6;
var cup7;

var count;
var count1;
var count2;

var c;

function setup()
{
    c = 0;


    createCanvas(1280,908);
    bg = loadImage("bg.png");
    img = loadImage("sugarBox.png");
    img2 = loadImage("midBox.png");
    img3 = loadImage("midBox2.png");
    img4 = loadImage("bottomR.png");
    img5 = loadImage("bottomL.png");
    img6 = loadImage("bottomMid.png");

    img8 = loadImage("cookie.png");
    img9 = loadImage("bottomCup.png");
    img10 = loadImage("bottomCup2.png");
    img11 = loadImage("timer.png");
    img12 = loadImage("timer2.png");


    photo = loadImage("up1.png");
    photo2 = loadImage("up2.png");
    photo3 = loadImage("up3.png");
    photo4 = loadImage("candyBox2.png");
    photo5 = loadImage("rightLine.png");
    photo6 = loadImage("candyBox.png");
    cup5 = loadImage("cup5.png");
    cup6 = loadImage("cup6.png");
    cup7 = loadImage("cup7.png");
    cup1 = loadImage("cup1.png");
    cup2 = loadImage("cup2.png");
    cup3 = loadImage("cup3.png");
    cup4 = loadImage("cup4.png");

    photo7 = loadImage("candy1.png");
    photo8 = loadImage("candy2.png");
    photo9 = loadImage("candy3.png");
    photo10 = loadImage("midCandyBox.png")
    photo11 = loadImage("can4.png")
    photo12 = loadImage("can5.png")
    photo13 = loadImage("can6.png")
    photo14 = loadImage("left.png")
    photo15 = loadImage("leftLine.png")
    photo16 = loadImage("apple1.png")
    photo17 = loadImage("apple2.png")
    photo18 = loadImage("apple3.png")
    photo19 = loadImage("banana1.png")
    photo20 = loadImage("banana2.png")



    count=0;
    count1=0;
    count2=0;

}


function draw()
{
    background(bg);
    

    fill(237,112,50);
    noStroke();

    drawSnow1();
    drawSnow2();
    drawSnow3();
    drawWater();
    


    image(photo,248,124);
    image(photo2,347,124);
    image(photo3,444,124);
    
    image(photo5,568,117);
    image(photo10,650,259);
    image(photo14,38,18);
    image(photo15,79,153);
    

    var duration = 3000;
    var timing = (new Date()%duration)/duration;


 
    image(img,254,0);
    image(img11,506,217);
    
    fill(225,mouseY*225/320,mouseY*225/210);
    noStroke;
    ellipse(529.5,240.5,30,30);

    image(img12,526,228);


    fill(0);
    for(var i = -1 ; i <10 ; i++){
    image(img8, i*(15+img.width)+timing*(15+img.width),603);

    } 


  
    image(img3,495,451);


    if(timing*2 <1){
    image(img9, timing*600,741);
    } else if(timing*2 <2){
    image(img10, timing*700,727);
    }

    image(img4,556,714);
    image(img5,0,700);
    image(img6,212,724);


    if(timing*3 <1){
    image(cup6,312,274);
    } else if(timing*3 <2){
    image(cup3,312,274);
    }else{
    image(cup4,312,274);

    } 


    image(cup5,213,274);
    

    if(timing*3 <1){
    image(cup7,408,260);
    } else if(timing*3 <2){
    image(cup1,408,264);
    }else{
    image(cup2,408,264);

    } 
/*    
    if(f){
        if(c > 10){
            c=0;
            f=false;
        }else{
            fill(255,255,0);
            ellipse(100,100+c*5,100,100);
            c= c+1;
        }
*/

    if(f){
    if(c < -17){
        c=0;
        f=false;
    }else{
        stroke(255,255,255,128);
        strokeWeight(7);
        fill(255,255,255);
        ellipse(305,500+c*5,30,30);
        ellipse(295,530+c*5,10,10);
        ellipse(315,560+c*5,7,7);
        c= c-1;
        }


    }

    if(f){
    if(c < -17){
        c=0;
        f=false;
    }else{
        image(photo16,978,130+c*5);
        image(photo17,955,170+c*5,30,30);
        image(photo18,925,124+c*5);
        c= c-1;
        }


    }

    if(f){
    if(c < -17){
        c=0;
        f=false;
    }else{
        image(photo19,1084,130+c*5);
        image(photo20,1141,113+c*5);
        c= c-1;
        }


    }

        image(img2,204,499);

         var duration2 = 500;
         var timing2 = (new Date()%duration2)/duration2;

        image(photo11,689 + Math.cos(timing2*2*PI)*30+ Math.cos(timing2*2*PI)*7,           // x좌표
              308 + Math.sin(timing2*2*PI)*30+ Math.cos(timing2*2*PI)*7, // y좌표
              15,                                  // width
              15);                     //height

        image(photo12,684 + Math.sin(timing2*2*PI)*20+ Math.sin(timing2*2*PI)*3,           // x좌표
              332 + Math.cos(timing2*2*PI)*20+ Math.sin(timing2*2*PI)*3, // y좌표
              15,                                  // width
              15);  


        var duration2 = 800;
         var timing2 = (new Date()%duration2)/duration2;

        image(photo13,710 + Math.cos(timing2*2*PI)*25+ Math.cos(timing2*2*PI)*5,           // x좌표
              321 + Math.sin(timing2*2*PI)*25+ Math.cos(timing2*2*PI)*5, // y좌표
              15,                                  // width
              15);                     //height

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


 
    image(photo7,574,count);
    count=count+2;
     if(count>360){
    count=0;
    }  

    image(photo8,582,count1+100);
    count1=count1+1;
     if(count1>280){
    count1=0;
    }  


    image(photo9,590,count2+50);
    count2=count2+1.5;
     if(count2>320){
    count2=0;
    }  



    image(photo4,544,0);

    image(photo6,562,375)




    }

var f = false;
    function mouseClicked(){
        if (!f){
            f=true;
        }

    }


    function drawWater(){
    noStroke();
    
    fill(254,252,236); 
    ellipse(100,dir4+30,10,10);
    ellipse(95,dir4+10,7,7);
    ellipse(110,dir4+7,5,5);
    ellipse(105,dir4+0.1,13,13);
    //ellipse(290,dir1+16,3,3);


    dir4=dir4+3;    
    if(dir4>280){
     dir4=79;
    }

    }    


