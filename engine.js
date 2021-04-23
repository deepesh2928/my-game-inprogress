class Sengine {
    constructor(x) {
        this.image=loadImage("images/engine.png")
        this.body = Bodies.rectangle(x, 645, 100, 100);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, 645, 100, 100);
    }
};