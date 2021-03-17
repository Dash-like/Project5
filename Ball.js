class Ball {
    constructor(x, y) {
        var options = {
            restitution: 1,
            density: 1.2,
            isStatic: true
        }

        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
        this.radius = 10;
       
    }
    display() {
        push();
        var pos = this.body.position;
        var angle = this.body.angle;
       
        translate(pos.x, pos.y)
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0, 0, this.radius,this.radius);
       pop();
        
    }
}