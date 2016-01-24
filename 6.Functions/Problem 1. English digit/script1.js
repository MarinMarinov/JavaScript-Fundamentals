/*Write a function that returns the last digit of given integer as an English word.

    Examples:
input           output
512             two
1024            four
12309           nine*/

var button = document.getElementById('check');
button.onclick = printResult;

function printResult(){
    jsConsole.writeLine(lastDigitAsWord());
}

function lastDigitAsWord(){
    var number = parseInt(document.getElementById('input').value);

    var lastDigit = number%10;

    switch(lastDigit){
        case 0: return 'Zero'; break;
        case 1: return 'One'; break;
        case 2: return 'Two'; break;
        case 3: return 'Three'; break;
        case 4: return 'Four'; break;
        case 5: return 'Five'; break;
        case 6: return 'Six'; break;
        case 7: return 'Seven'; break;
        case 8: return 'Eight'; break;
        case 9: return 'Nine'; break;
        default : return 'No such digit'; break;
    }
}

