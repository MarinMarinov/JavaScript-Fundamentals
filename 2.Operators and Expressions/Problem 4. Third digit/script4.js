// Write an expression that checks for given integer if its third digit (right-to-left) is 7.

var button = document.getElementById('check');
button.onclick = calculate;

function calculate(){
    var number = jsConsole.readInteger('#input');

    var thirdDigit = Math.floor(number/100);

    if(thirdDigit % 10 == 7){
        jsConsole.writeLine('The third digit is 7!');
    }
    else{
        jsConsole.writeLine('The third digit is NOT 7!');
    }
}

