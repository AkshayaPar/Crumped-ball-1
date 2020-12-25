class Paper{
constructor(x, y, radius){
var options = {
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
this.body = Bodies.circle(x, y, radius, options);
this.radius = radius;
this.x=x;
this.y=y;
World.add(world, this.body);
}
display(){
var paperpos = this.body.position;
Push()
translate(paperpos.x, paperpos.y);
rectMode(CENTER);
strokeWeight(3);
Fill(255, 0, 255);
this.body.velocity.x = 5;
ellipse(0, 0, this.radius, this.radius);
Pop()
}
}