// Write a script that reads the coefficients  a ,  b  and  c  of a quadratic equation ax2 + bx + c = 0 and solves it
//                          (prints its real roots).
// Calculates and prints its real roots.
// Note: Quadratic equations may have 0, 1 or 2 real roots.



var button = document.getElementById('calculate');
button.onclick = calculate;

function calculate(){
    /*var x = jsConsole.readFloat('#inputX');
    var y = jsConsole.readFloat('#inputY');*/

        var a = parseFloat(document.getElementById('inputA').value);
        var b = parseFloat(document.getElementById('inputB').value);
        var c = parseFloat(document.getElementById('inputC').value);

        var discriminant = Math.pow(b,2) - 4*a*c;
        if(discriminant < 0){
            jsConsole.writeLine('The equation has now real roots!');
        }
        else if( discriminant == 0){
            var x = -b/(2*a);
            jsConsole.writeLine( 'x1 = x2 = ' + x);
        }
        else{
            var x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            var x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

            jsConsole.writeLine('x1 = ' + x1 + '; ' + 'x2 = ' + x2);
        }
}

