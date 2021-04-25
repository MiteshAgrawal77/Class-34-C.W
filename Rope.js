class Rope {

    constructor(b1, p2){
    
        var options = {
            bodyA: b1,
            pointB: p2,
            length:300,
            stiffness:1.2
          }

          this.pointB = p2
          this.rope = Constraint.create(options);
          World.add(myworld, this.rope) 

    }
    attach(body){
        
    }
    
    display(){
      

    
    }
    
    }
    
    