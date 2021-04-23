class Connector {
    constructor(A,B) {
        var options={
            bodyA:A,
            bodyB:B,
            length:.5,
            stiffness:2
        }
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    display() {
        var posA = this.body.bodyA.position;
        var posB = this.body.bodyB.position;
        strokeWeight(3);
        line(posA.x-35,posA.y+25,posB.x+35,posB.y+25);
    }
}
;