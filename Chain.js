class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 20
        }
        this.pointB=pointB;
        this.chain=Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){

        stroke("#C58917");

        if(this.chain.bodyA != null){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }

    }

    fly(){
        this.chain.bodyA = null;
    }
    attach(body){
        this.chain.bodyA = body;
    }
    
}
