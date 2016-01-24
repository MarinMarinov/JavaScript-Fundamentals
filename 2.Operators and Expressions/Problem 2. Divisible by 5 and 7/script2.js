// Write a boolean expression that checks for given integer if it can be divided (without remainder) by  7  and  5  in the same time

var button = document.getElementById('check');
button.onclick = checkNumber;

function checkNumber(){
    var inputNumber = jsConsole.readInteger('#input');
    var isDivisible = false;

    if(inputNumber % 7 == 0 && inputNumber % 5 == 0){
        isDivisible = true;
        jsConsole.writeLine("Is the number divisible by 7 and 5? " + isDivisible);
    }
    else{
        jsConsole.writeLine("Is the number divisible by 7 and 5? " + isDivisible);
    }
}

