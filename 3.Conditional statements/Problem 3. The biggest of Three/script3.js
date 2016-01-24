// Write a script that finds the biggest of three numbers.
// Use nested  if  statements.




    var button = document.getElementById('calculate');
button.onclick = calculate;

function calculate(){
    /*var x = jsConsole.readFloat('#inputX');
    var y = jsConsole.readFloat('#inputY');*/

    var a = parseFloat(document.getElementById('inputA').value);
    var b = parseFloat(document.getElementById('inputB').value);
    var c = parseFloat(document.getElementById('inputC').value);

    if( a > b) {
        if (a > c) {
            jsConsole.writeLine('The biggest number is a = ' + a);
        }
        else if(a < c){
            jsConsole.writeLine('The biggest number is c = ' + c);
        }
    }
    else if( a < b ){
        if( b < c){
            jsConsole.writeLine('The biggest number is c = ' + c);
        }
        else if( b > c){
            jsConsole.writeLine('The biggest number is b = ' + b);
        }
    }
}

