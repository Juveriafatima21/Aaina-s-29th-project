class Slingshot{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
      this.sling=  Constraint.create(options)
      World.add(world,this.sling)
      this.pointB=pointB
    }
    fly(){
        this.sling.bodyA =null;
    }
    display(){
        if(this.sling.bodyA){
            strokeWeight(3)
            stroke("yellow")
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
        }
       
    }
}