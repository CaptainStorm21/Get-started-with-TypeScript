
class Point {

    constructor( private x?:number, private y?:number) {}

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

