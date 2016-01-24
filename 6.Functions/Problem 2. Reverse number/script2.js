/*
 Write a function that reverses the digits of given decimal number.

 Example:
 input              output
 256                652
 123.45             54.321
*/

var button = document.getElementById('check');
button.onclick = printResult;

function printResult(){
 var numberAsString = document.getElementById('input').value;
 jsConsole.writeLine(reverseNumber(numberAsString));
 }

function reverseNumber(numberAsString){
    var result = new Array(numberAsString.length);
    for(var i = 0; i < numberAsString.length; i++){
        result[i] = numberAsString[numberAsString.length -1 - i];
    }
    var joinResult = result.join('');
    return joinResult;
}


//Вариант с малко по-различен алгоритъм, приложим само за цели числа(integer)
/*function printResult(){
    var number = parseFloat(document.getElementById('input').value);
    jsConsole.writeLine(reverseNumber(number));
}

function reverseNumber(number){
    var result = 0;
    while( number !=0){
        result = result*10 + (number%10|0);
        number = number/10|0;
    }

    return result;
}*/


