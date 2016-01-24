// Write an expression that checks if given point  P(x, y)  is within a circle  K(O, 5) .

var button = document.getElementById('calculate');
button.onclick = calculate;

function calculate(){
    /*var x = jsConsole.readFloat('#inputX');
    var y = jsConsole.readFloat('#inputY');*/

    var x = parseFloat(document.getElementById('inputX').value);
    var y = parseFloat(document.getElementById('inputY').value);

    var radius = 5;
    var answer = ((x * x) + (y * y)) <= radius * radius;
    if(answer){
        jsConsole.writeLine('The point is inside the circle');
    }
    else{
        jsConsole.writeLine('The point is outside the circle');
    }
}

