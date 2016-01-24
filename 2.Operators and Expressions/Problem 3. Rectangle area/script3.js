// Write an expression that calculates rectangle’s area by given width and height.

var button = document.getElementById('check');
button.onclick = calculate;

function calculate(){
    var numberA = jsConsole.readInteger('#inputA');
    var numberB = jsConsole.readInteger('#inputB');

    if(numberA != 0 && numberB != 0){
        jsConsole.writeLine('The rectangle area is: ' + numberA*numberB);
    }
    else{
        jsConsole.writeLine("The rectangle sides length can't be negative!");
    }
}

