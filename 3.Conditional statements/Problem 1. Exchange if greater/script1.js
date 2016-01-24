// Write an  if  statement that takes two double variables  a  and  b  and exchanges their values if the first one is greater than the second.
// As a result print the values  a  and  b , separated by a space.


var button = document.getElementById('calculate');
button.onclick = calculate;

function calculate(){
    /*var x = jsConsole.readFloat('#inputX');
    var y = jsConsole.readFloat('#inputY');*/

    var a = parseFloat(document.getElementById('inputA').value);
    var b = parseFloat(document.getElementById('inputB').value);

    var max = a;
    if( b > max){
        max = b;
        jsConsole.writeLine( a +' ' + max);
    }
    else if( b < max){
        jsConsole.writeLine( b + ' ' + max);
    }
    else{
        jsConsole.writeLine( a + ' and ' + b + ' are equal numbers')
    }
}

