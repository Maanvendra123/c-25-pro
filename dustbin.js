class Dustbin{
    constructor(x,y,width,height){
        var ground_options ={
            isStatic: true
        }
    
       this.dustbinb1 = Bodies.rectangle(x,y,width,height,ground_options);
       this.width=width
       this.height=height
       this.image=loadImage("dustbingreen.png")
        World.add(world,this.dustbinb1);   
    }
    display(){
        var pos=this.dustbinb1.position
       
       
        imageMode(CENTER)
        
        image(this.image,pos.x,pos.y,220,400)
        
    }
}