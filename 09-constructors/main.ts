class Point {
    x:number; 
    y:number; 

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
point.draw(); 


