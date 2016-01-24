// Write an expression that checks if given integer is odd or even

var button = document.getElementById('check');
button.onclick = checkNumber;

function checkNumber(){
    var inputNumber = jsConsole.readInteger('#input');

    if(inputNumber % 2 == 0){
        jsConsole.writeLine("The number is Odd!");
    }
    else{
        jsConsole.writeLine("The number is Even!");
    }
}

