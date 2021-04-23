class Ground{
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(600,690,1900,10,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red")
      rect(600, 690, 2200,10);
    }
  };