const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
//const MouseConstraint=Matter.MouseConstraint;

var engine,world;
var drops,umbrella;
let umbrella_anim;
let maxDrops=100;
var thunderbolt;
var drops=[];
var num;
var thunderframe;

var thunderbolt_img1,thunderbolt_img2,thunderbolt_img3,thunderbolt_img4;

function preload(){

    thunderbolt_img1=loadImage("1.png");
    thunderbolt_img2=loadImage("2.png");
    thunderbolt_img3=loadImage("3.png");
    thunderbolt_img4=loadImage("4.png");
    
}

function setup(){
   //To create canvas
   createCanvas(1200,700);

   engine=Engine.create();  
   world=engine.world;

  man=new Man(200,200,160,170)
  ground=new Ground(600,500,1200,10)
   
   if(frameCount%150===0)
   {
    for(i=0;i<maxDrops;i++)
   {
       drops.push(new Drop(random(0,1200),random(0,1200)));
   }
 }
   
}

function draw(){

    Engine.update(engine);


    background("black");

   console.log(drops.speed)

   if(drops.speed>70){
       drops.destroy();
   }


    if(frameCount%80===0)
    {
    thunderframe=frameCount;  
    thunderbolt=createSprite(random(10,370),random(10,30),10,10);
    num=Math.round(random(1,4)); 
    switch(num)
    {
        case 1: thunderbolt.addImage(thunderbolt_img1);
            break;
        case 2: thunderbolt.addImage(thunderbolt_img2);
            break;
        case 3: thunderbolt.addImage(thunderbolt_img3);
            break;
        case 4: thunderbolt.addImage(thunderbolt_img4);
            break;
        default: break;
    }
    //randomizing thunderbolt
    thunderbolt.scale=random(0.3,0.6);
}

if(thunderframe+10===frameCount && thunderbolt)
{
    thunderbolt.destroy();
}


 for(var i=0;i<maxDrops;i++)
 {
     drops[i].showDrops();
     drops[i].update();
 }   
  
 

    man.display();
    ground.display();
  
}   