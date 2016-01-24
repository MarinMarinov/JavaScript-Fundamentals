// Sort 3 real values in descending order.
// Use nested  if  statements.
// Note: Don’t use arrays and the built-in sorting functionality


var button = document.getElementById('calculate');
button.onclick = calculate;

function calculate(){
    /*var x = jsConsole.readFloat('#inputX');
    var y = jsConsole.readFloat('#inputY');*/

    var a = parseFloat(document.getElementById('inputA').value);
    var b = parseFloat(document.getElementById('inputB').value);
    var c = parseFloat(document.getElementById('inputC').value);

    if (a > b){
        if (a > c){
            if (c > b){
                jsConsole.writeLine(a + ' ' + c + ' ' + b);
            }
            else{
                jsConsole.writeLine(a + ' ' + b + ' ' + c);
            }
        }
        else{
            jsConsole.writeLine(c + ' ' + a + ' ' + ' ' + b);
        }
    }
    else{
        if (b > c){
            if (a > c){
                jsConsole.writeLine(b + ' ' + a + ' ' + c);
            }
            else{
                jsConsole.writeLine(b + ' ' + c + ' ' + a);
            }
        }
        else{
            jsConsole.writeLine(c + ' ' + b + ' ' + a);
        }
    }
}

