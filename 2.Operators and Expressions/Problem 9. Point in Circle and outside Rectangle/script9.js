// Write an expression that checks for given point  P(x, y)  if it is within the circle  K( (1,1), 3)
//  and out of the rectangle  R(top=1, left=-1, width=6, height=2) .

var button = document.getElementById('calculate');
button.onclick = calculate;

function calculate(){
    var x = jsConsole.readFloat('#inputX');
    var y = jsConsole.readFloat('#inputY');

    var inCircle = ((x - 1) * (x - 1) + (y - 1) * (y - 1)) <= 3 * 3;
    var outRectangle = (x <= -1 || x >= 5) || (y <= -1 || y >= 1);

    if(inCircle && outRectangle){
        jsConsole.writeLine('The Point IS within the circle and out of the rectangle');
    }
    else{
        jsConsole.writeLine('The Point IS NOT within the circle and out of the rectangle');
    }
}

