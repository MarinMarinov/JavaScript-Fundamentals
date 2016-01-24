// Write an expression that calculates trapezoid's area by given sides  a  and  b  and height  h .

var button = document.getElementById('calculate');
button.onclick = calculate;

function calculate(){
    /*var a = jsConsole.readFloat('#inputA');
     var b = jsConsole.readFloat('#inputB');
     var h = jsConsole.readFloat('#inputH');*/

    var a = parseFloat(document.getElementById('inputA').value);
    var b = parseFloat(document.getElementById('inputB').value);
    var h = parseFloat(document.getElementById('inputH').value);


    if(a > 0 && b > 0 && h > 0){
        var area = ((a+b)/2)*h;
        jsConsole.writeLine('The trapezoid area is: ' + area);
    }
    else{
        jsConsole.writeLine('Pleae, enter only positive numbers');
    }
}

