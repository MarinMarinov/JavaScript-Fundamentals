// Write a script that asks for a digit  (0-9) , and depending on the input, shows the digit as a word (in English).
// Print  “not a digit”  in case of invalid input.
// Use a  switch  statement.


var button = document.getElementById('calculate');
button.onclick = calculate;

function calculate(){

    var a = parseInt(document.getElementById('input').value);

    switch(a){
        case 0: jsConsole.writeLine('Zero'); break;
        case 1: jsConsole.writeLine('One'); break;
        case 2: jsConsole.writeLine('Two'); break;
        case 3: jsConsole.writeLine('Three'); break;
        case 4: jsConsole.writeLine('Four'); break;
        case 5: jsConsole.writeLine('Five'); break;
        case 6: jsConsole.writeLine('Six'); break;
        case 7: jsConsole.writeLine('Seven'); break;
        case 8: jsConsole.writeLine('Eight'); break;
        case 9: jsConsole.writeLine('Nine'); break;
        default: Console.WriteLine("This is Not a digit, bro"); break;
    }
}

