class Point {
    x: number;
    y: number;

    draw(){
        console.log("X is " + this.x + " Y is " + this.y);
    }

    getDistance(another: Point) {
        //...
    }
}


let point  = new Point();
point.x = 1;
point.y=2;
point.draw();


/*

This will not execute

class Point {
    x: number;
    y: number;

    draw(){
        console.log("X is " + this.x + " Y is " + this.y);
    }

    getDistance(another: Point) {
        //...
    }
}


let point: Point;
point.draw();

*/


/*
class Point {
    x: number;
    y: number;

    draw(){
        console.log("X is " + this.x + " Y is " + this.y);
    }

    getDistance(another: Point) {
        //...
    }
}


let point  = new Point();
point.draw();

output is undefined

*/