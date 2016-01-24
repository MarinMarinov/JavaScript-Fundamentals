/*  Write functions for working with shapes in standard Planar coordinate system.
    Points are represented by coordinates P(X, Y)
    Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))

    Calculate the distance between two points.
    Check if three segment lines can form a triangle.
 */

// псевдо-констуктор за точка
function Point(x, y){
    return {
        coordinateX: x,
        coordinateY: y,
        toString: function print(){
            return '(' + this.coordinateX + ', ' + this.coordinateY + ')';
        }
    }
}

// псевдо-констуктор за линия
function Line(startpoint, endpoint){
    return {
        startPoint: startpoint,
        endPoint: endpoint,
        toString: function print(){
            return '((' + this.startPoint.coordinateX + ', ' + this.startPoint.coordinateY + '),' +
                ' (' + this.endPoint.coordinateX + ', ' + this.endPoint.coordinateY + '))';
        }
    }
}

// констуираме три точки
var pointFirst = new Point(1,2);
var pointSecond = new Point(3,4);
var pointThird = new Point(5,3);
//разпечатваме ги
console.log('First point is: ' + pointFirst.toString());
console.log('Second point is: ' + pointSecond.toString());
console.log('Third point is: ' + pointThird.toString());

//конструираме три линии
var lineFirst = new Line(pointFirst, pointSecond);
var lineSecond = new Line(pointSecond, pointThird);
var lineThird = new Line(pointFirst, pointThird);
//разпечавтаме ги
console.log('First line is: ' + lineFirst.toString());
console.log('First line is: ' + lineSecond.toString());
console.log('First line is: ' + lineThird.toString());

//разстояние между две точки, използвам формулата: c = SquareRoot((Xa - Xb)*(Xa - Xb) + (Ya - Yb)*(Ya - Yb));
function calculateDistance(firstpoint, secondpoint){
    var distance = Math.sqrt( //using formula: c = SquareRoot((Xa - Xb)*(Xa - Xb) + (Ya - Yb)*(Ya - Yb));
        (secondpoint.coordinateX - firstpoint.coordinateX)*(secondpoint.coordinateX - firstpoint.coordinateX) +
        (secondpoint.coordinateY - firstpoint.coordinateY)*(secondpoint.coordinateY - firstpoint.coordinateY)
    );
    return distance;
}

//намирам и отпечатвам разстоянието между две точки(в случая това са и дължините на съответните отсечки)
var lineFirstLongitude = calculateDistance(pointFirst, pointSecond);
var lineSecondLongitude = calculateDistance(pointSecond, pointThird);
var lineThirdLongitude = calculateDistance(pointFirst, pointThird);

console.log('Distance between first and second point is: ' + lineFirstLongitude);
console.log('Distance between second and third point is: ' + lineSecondLongitude);
console.log('Distance between first and third point is: ' + lineThirdLongitude);

function checkForPossibleTriangle(firstLineLongitude, secondLineLongitude, thirdLineLongitude){
    if( (firstLineLongitude + secondLineLongitude) > thirdLineLongitude && // true; false
        (firstLineLongitude + thirdLineLongitude) > secondLineLongitude && // true; true
        (secondLineLongitude + thirdLineLongitude) > firstLineLongitude ){ // true; true
        return console.log('These segment lines Can form triangle!');
    }
    else {
        return console.log('These segment lines can Not form triangle!');
    }
}

// проверявам дали горните отсечки могат да образуват триъгълник
checkForPossibleTriangle(lineFirstLongitude, lineSecondLongitude, lineThirdLongitude); // връща очакван резултат true

//конструирам три отсечки, които НЕ могат да образуват триъгълник
var pointA = new Point(1,1);
var pointB = new Point(1,2);
//var firstShortLine = new Line(pointA, pointB); //това е отсечка с дължина 1;
var firstShortLineLongitude = calculateDistance(pointA,pointB);
console.log('First line longitude is: ' + firstShortLineLongitude);

var pointC = new Point(2,1);
var pointD = new Point(2,3);
//var secondShortLine = new Line(pointA, pointB); //това е отсечка с дължина 2;
var secondShortLineLongitude = calculateDistance(pointC,pointD);
console.log('Second line longitude is: ' + secondShortLineLongitude);

var pointE = new Point(3,1);
var pointF = new Point(3,10);
//var longLine = new Line(pointA, pointB); //това е отсечка с дължина 9;
var longLineLongitude = calculateDistance(pointE,pointF);
console.log('Third line longitude is: ' + longLineLongitude);

// проверявам дали горните отсечки могат да образуват триъгълник
checkForPossibleTriangle(firstShortLineLongitude, secondShortLineLongitude, longLineLongitude); // връща очакван резултат false