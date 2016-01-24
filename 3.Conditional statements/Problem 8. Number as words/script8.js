// Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation



var button = document.getElementById('calculate');
button.onclick = calculate;

function calculate(){


    var number = parseInt(document.getElementById('input').value);

    var hundreds = number /100 | 0;
    var tens = ((number / 10) | 0) %10;
    var digits = number % 10;
    var teens = 10 + digits;
    var hundredsWord = '';
    var tensWord = '';
    var digitsWord = '';
    var teensWord = '';

    switch (digits)
    {
        case 1: digitsWord = "one"; break;
        case 2: digitsWord = "two"; break;
        case 3: digitsWord = "three"; break;
        case 4: digitsWord = "four"; break;
        case 5: digitsWord = "five"; break;
        case 6: digitsWord = "six"; break;
        case 7: digitsWord = "seven"; break;
        case 8: digitsWord = "eight"; break;
        case 9: digitsWord = "nine"; break;
        default: digitsWord = ""; break;
    }

    switch(teens){
        case 11: teensWord = "eleven"; break;
        case 12: teensWord = "twelve"; break;
        case 13: teensWord = "thirteen"; break;
        case 14: teensWord = "fourteen"; break;
        case 15: teensWord = "fifteen"; break;
        case 16: teensWord = "sixteen"; break;
        case 17: teensWord = "seventeen"; break;
        case 18: teensWord = "eighteen"; break;
        case 19: teensWord = "nineteen"; break;
        default: break;
    }

    switch(tens){
        case 1: tensWord = "ten"; break;
        case 2: tensWord = "twenty "; break;
        case 3: tensWord = "thirty "; break;
        case 4: tensWord = "fourty "; break;
        case 5: tensWord = "fifty "; break;
        case 6: tensWord = "sixty "; break;
        case 7: tensWord = "seventy "; break;
        case 8: tensWord = "eighty "; break;
        case 9: tensWord = "ninety "; break;
        case 0: tensWord = ""; break;
    }

    switch (hundreds)
    {
        case 1: hundredsWord = "one hundred "; break;
        case 2: hundredsWord = "two hundred "; break;
        case 3: hundredsWord = "three hundred "; break;
        case 4: hundredsWord = "four hundred "; break;
        case 5: hundredsWord = "five hundred "; break;
        case 6: hundredsWord = "six hundred "; break;
        case 7: hundredsWord = "seven hundred "; break;
        case 8: hundredsWord = "eight hundred "; break;
        case 9: hundredsWord = "nine hundred "; break;
        case 0: hundredsWord = ""; break;
        default: break;
    }

    if( number === 0){
        jsConsole.writeLine('zero');
    }
    if( number > 0 && number < 11){
        jsConsole.writeLine(digitsWord);
    }
    if(number >= 11 && number <= 19){
        jsConsole.writeLine(teensWord);
    }
    if(number >= 20 && number <= 99){
        jsConsole.writeLine(tensWord + ' ' + digitsWord);
    }
    if( number >= 100 && number <= 999 && (number %100)=== 0){
        jsConsole.writeLine(hundredsWord);
    }
    if( number >= 100 && number <= 999 && (number %100)!== 0){
        jsConsole.writeLine(hundredsWord + ' and ' + tensWord + ' ' + digitsWord);
    }
}

