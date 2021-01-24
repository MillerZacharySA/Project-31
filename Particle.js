class Particle{
    constructor(x,y){
        var options = {
            isStatic: false
        }

        this.r = 10;

        this.body = Bodies.circle(x,y,10,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0,0,this.r*2,this.r*2);
        pop();
    }

}