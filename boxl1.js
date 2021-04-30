class Boxl1 {
   constructor(x, y, width, height) {
     var options = {
         'restitution':0.5,
         'friction':0.9,
         'density':1.0
     }
     this.visibility = 255;
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     
     World.add(world, this.body);
   }
   display(){

     if(this.body.speed<6){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("#348017");
      rect(0, 0, this.width, this.height);
      pop();
     }
     else{
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255,this.visibility);
      //rect(this.body.position.x,this.body.position.y,50,50);
      pop();
     }
     
   }

   score(){
     if(this.visibility<0 && this.visibility>-105)
     {
       score++;
     }
   }
 }
