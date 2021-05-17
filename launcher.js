

class launcher{
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.01,
        length: 1,
      };
  
      
      this.launcher = Constraint.create(options);
      this.pointB = pointB;
      World.add(world, this.launcher);
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    
    fly(){
        this.launcher.bodyA = null;
    }


    display() {
      if (this.launcher.bodyA) {
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
  
        stroke("turquoise");
        strokeWeight(4);
  
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
      }
    }
  }