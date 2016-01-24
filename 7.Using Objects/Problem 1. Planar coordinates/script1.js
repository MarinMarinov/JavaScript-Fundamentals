/*  Write functions for working with shapes in standard Planar coordinate system.
    Points are represented by coordinates P(X, Y)
    Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))

    Calculate the distance between two points.
    Check if three segment lines can form a triangle.
 */

// ������-���������� �� �����
function Point(x, y){
    return {
        coordinateX: x,
        coordinateY: y,
        toString: function print(){
            return '(' + this.coordinateX + ', ' + this.coordinateY + ')';
        }
    }
}

// ������-���������� �� �����
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

// ����������� ��� �����
var pointFirst = new Point(1,2);
var pointSecond = new Point(3,4);
var pointThird = new Point(5,3);
//������������ ��
console.log('First point is: ' + pointFirst.toString());
console.log('Second point is: ' + pointSecond.toString());
console.log('Third point is: ' + pointThird.toString());

//������������ ��� �����
var lineFirst = new Line(pointFirst, pointSecond);
var lineSecond = new Line(pointSecond, pointThird);
var lineThird = new Line(pointFirst, pointThird);
//������������ ��
console.log('First line is: ' + lineFirst.toString());
console.log('First line is: ' + lineSecond.toString());
console.log('First line is: ' + lineThird.toString());

//���������� ����� ��� �����, ��������� ���������: c = SquareRoot((Xa - Xb)*(Xa - Xb) + (Ya - Yb)*(Ya - Yb));
function calculateDistance(firstpoint, secondpoint){
    var distance = Math.sqrt( //using formula: c = SquareRoot((Xa - Xb)*(Xa - Xb) + (Ya - Yb)*(Ya - Yb));
        (secondpoint.coordinateX - firstpoint.coordinateX)*(secondpoint.coordinateX - firstpoint.coordinateX) +
        (secondpoint.coordinateY - firstpoint.coordinateY)*(secondpoint.coordinateY - firstpoint.coordinateY)
    );
    return distance;
}

//������� � ���������� ������������ ����� ��� �����(� ������ ���� �� � ��������� �� ����������� �������)
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

// ���������� ���� ������� ������� ����� �� ��������� ����������
checkForPossibleTriangle(lineFirstLongitude, lineSecondLongitude, lineThirdLongitude); // ����� ������� �������� true

//����������� ��� �������, ����� �� ����� �� ��������� ����������
var pointA = new Point(1,1);
var pointB = new Point(1,2);
//var firstShortLine = new Line(pointA, pointB); //���� � ������� � ������� 1;
var firstShortLineLongitude = calculateDistance(pointA,pointB);
console.log('First line longitude is: ' + firstShortLineLongitude);

var pointC = new Point(2,1);
var pointD = new Point(2,3);
//var secondShortLine = new Line(pointA, pointB); //���� � ������� � ������� 2;
var secondShortLineLongitude = calculateDistance(pointC,pointD);
console.log('Second line longitude is: ' + secondShortLineLongitude);

var pointE = new Point(3,1);
var pointF = new Point(3,10);
//var longLine = new Line(pointA, pointB); //���� � ������� � ������� 9;
var longLineLongitude = calculateDistance(pointE,pointF);
console.log('Third line longitude is: ' + longLineLongitude);

// ���������� ���� ������� ������� ����� �� ��������� ����������
checkForPossibleTriangle(firstShortLineLongitude, secondShortLineLongitude, longLineLongitude); // ����� ������� �������� false