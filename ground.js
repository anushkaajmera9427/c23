class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
          }
         this.body=Bodies.rectangle(400,370,800,30,options)
          World.add(world,this.body)
          
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,800,30)
      
    }
    }
