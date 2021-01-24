class Plinko{
    constructor(x,y){
        var options = {
            isStatic: true
        }

        this.r = 10;

        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r*2,this.r*2);
        pop();
    }

}