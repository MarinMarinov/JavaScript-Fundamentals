// Write a boolean expression for finding if the bit  #3  (counting from 0) of a given integer.
// The bits are counted from right to left, starting from bit  #0 .
// The result of the expression should be either  1  or  0 .


var button = document.getElementById('check');
button.onclick = calculate;

function calculate(){
    var number = jsConsole.readInteger('#input');
    var binaryNumber = number.toString(2);
    /*var p = 3;*/
    var mask = 1 << 3;
    var numberAndMask = number & mask;
    var thirdBit = numberAndMask >> 3;
    jsConsole.writeLine('Binary representation of the input number: ' + binaryNumber);
    jsConsole.writeLine('Third bit is: ' + thirdBit);
}

