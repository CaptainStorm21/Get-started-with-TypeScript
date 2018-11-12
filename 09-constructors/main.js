var Point = /** @class */ (function () {
    //? is optional
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X is " + this.x + " Y is " + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
