class Player{
    constructor(x,y){
        var options = {
            isStatic = true,
        'restitution':0,
        'friction':0.3,
        'density':1.0
    }   
    this.body = Bodies.rectangle(x,y,10,10,options);
        this.width = 10;
        this.height = 10;
        World.add(world, this.body);
 }

    display(){
        var pos = this.body.position;
      rectMode(CENTER);
      strokeWeight(3);
      stroke("green");
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }
}