class Ball{
    constructor(x,y,r){
        console.log("hi")
        this.body=Bodies.circle(x,y,r) 
        this.r = r
        
        World.add(myworld, this.body)
    }

    display(){        
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }
    
}