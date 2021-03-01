class Paper {
  constructor(x, y,radius) {
    var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Matter.Bodies.circle(x, y, radius,{ options});
    this.radius = radius;
    this.img = loadImage('paper.png');
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    translate(pos.x,pos.y);
   // ellipseMode(CENTER);
    fill(255);
   // ellipse(pos.x, pos.y, this.radius);
    fill("white");
    stroke(255);
    strokeWeight(6);
    image(this.img,20,560,100,100);
  }
}
