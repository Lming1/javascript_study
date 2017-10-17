/**
 * Created by iminhyeok on 2017. 10. 17..
 */


var a = [];

a.push(1,2,3);
a.reverse();

var points = [
    {x:0, y:0},
    {x:1, y:1}
];

points.dist = function () {
    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x - p1.x;
    var b = p2.y - p2.y;

    return Math.sqrt(a*a + b*b);
}

console.log(points.dist())