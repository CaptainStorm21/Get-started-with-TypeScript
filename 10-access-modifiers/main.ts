// access modifiers
// public private protected


class Point {
    private x:number; 
    private y:number; 

    //? is optional
    constructor(x?:number, y?:number) {
        this.x = x; 
        this.y = y; 
    }

    draw() {
        console.log("X is " + this.x + " Y is " + this.y); 
    }

    getDistance(another:Point) {
        //...
    }
}


let point = new Point(1, 2); 
//will not be read because x is private - point.x; 
point.draw(); 


