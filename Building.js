class Building{
    constructor(x,y,width,height){

        this.body=Bodies.rectangle(x,y,width,height)        
        this.w = width
        this.h = height

        World.add(myworld, this.body)
    }

    display(){
        
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
    
}