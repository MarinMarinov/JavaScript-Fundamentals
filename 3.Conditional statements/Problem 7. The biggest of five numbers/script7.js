// Write a script that finds the greatest of given 5 variables.
// Use nested  if  statements.

var button = document.getElementById('calculate');
button.onclick = calculate;

function calculate(){
    /*var x = jsConsole.readFloat('#inputX');
     var y = jsConsole.readFloat('#inputY');*/

    var a = parseFloat(document.getElementById('inputA').value);
    var b = parseFloat(document.getElementById('inputB').value);
    var c = parseFloat(document.getElementById('inputC').value);
    var d = parseFloat(document.getElementById('inputD').value);
    var e = parseFloat(document.getElementById('inputE').value);

    var biggest = a;

    if( b > biggest){
        biggest = b;
    }
    if( c > biggest){
        biggest = c;
    }
    if( d > biggest){
        biggest = d;
    }
    if( e > biggest){
        biggest = e;
    }
    jsConsole.writeLine('The biggest number is: ' + biggest);
}

