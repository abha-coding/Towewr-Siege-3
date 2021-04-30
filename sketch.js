const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;
var clr;

function preload() {
    getTime();
}

function setup() 
{
	createCanvas(1000, 500);
	rectMode(CENTER);

    engine = Engine.create();
	world = engine.world;

    Engine.run(engine);

    ground1 = new Ground(505,400,300,15);
    ground2 = new Ground(800,200,250,15);

    box1 = new Boxl1(400,340,30,50);
    box2 = new Boxl1(430,340,30,50);
    box3 = new Boxl1(460,340,30,50);
    box4 = new Boxl1(490,340,30,50);
    box5 = new Boxl1(520,340,30,50);
    box6 = new Boxl1(550,340,30,50);
    box7 = new Boxl1(580,340,30,50);
	box8 = new Boxl1(610,340,30,50);

    box9 = new Boxl2(430,290,30,50);
    box10 = new Boxl2(460,290,30,50);
    box11 = new Boxl2(490,290,30,50);
    box12 = new Boxl2(520,300,30,50);
    box13 = new Boxl2(550,300,30,50);
    box14 = new Boxl2(580,300,30,50);

    box15 = new Boxl3(460,240,30,50);
    box16 = new Boxl3(490,240,30,50);
    box17 = new Boxl3(520,240,30,50);
    box18 = new Boxl3(550,240,30,50);

    box19 = new Boxl4(490,190,30,50);
    box20 = new Boxl4(520,190,30,50);

    nbox1 = new Boxl1(740,140,30,50);
    nbox2 = new Boxl1(770,140,30,50);
    nbox3 = new Boxl1(800,140,30,50);
    nbox4 = new Boxl1(830,140,30,50);
    nbox5 = new Boxl1(860,140,30,50);

    nbox6 = new Boxl2(770,90,30,50);
    nbox7 = new Boxl2(800,90,30,50);
    nbox8 = new Boxl2(830,90,30,50);

    nbox9 = new Boxl3(800,40,30,50);

    polygon = new Polygon(200,500);

    chain = new Chain(polygon.body,{x:125,y:170});


}

function draw() 
{
    
    if(clr!=null)
    {
    background(clr);
}
  

 
 
  rectMode(CENTER);

  Engine.update(engine);

  text("SCORE :"+score,400,40);

  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  box15.display();
  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  nbox1.display();
  nbox2.display();
  nbox3.display();
  nbox4.display();
  nbox5.display();

  nbox6.display();
  nbox7.display();
  nbox8.display();
  
  nbox9.display(); 

  polygon.display();

  chain.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();

  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();

  box15.score();
  box16.score();
  box17.score();
  box18.score();

  box19.score();
  box20.score();

  nbox1.score();
  nbox2.score();
  nbox3.score();
  nbox4.score();
  nbox5.score();

  nbox6.score();
  nbox7.score();
  nbox8.score();

  nbox9.score();

  drawSprites();
}

function mouseDragged()
{
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
    chain.fly();
}

function keyPressed(){
    if(keyCode === 32)
    {
        chain.attach(polygon.body);
    }
}

async function getTime(){
    var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var abc = await response.json();
    var another = abc.datetime;
    var time = another.slice(11,13);

    console.log(another);
    console.log(time);

    if(time>6 && time<=18){
        clr = "#FDD017"
        //background("#FDD017");
    }
    else{
        clr = "brown"
        //background("black");
    }

    //background(bg);
}


