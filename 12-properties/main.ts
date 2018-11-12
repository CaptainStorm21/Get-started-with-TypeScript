class Point {

    constructor(private _x?:number, private _y?:number) {}

    draw() {
        console.log("X is " + this._x + " Y is " + this._y); 
    }

    getDistance(another:Point) {
        //...
    }

    get x() {
        return this._x; 
    }

    set x(value) {
        if (value < 0)
            throw new Error ("value cannot be less than 0"); 
            this._x = value; 
    }
}


let point = new Point(1, 2); 
let x = point.x; 
point.x = 100; 
point.draw(); 

