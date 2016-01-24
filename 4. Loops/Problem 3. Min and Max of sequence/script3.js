// Write a script that finds the  max  and  min  number from a sequence of numbers.


var button = document.getElementById('check');
button.onclick = check;

function check(){
    /*var x = jsConsole.readFloat('#input');*/


    var input = document.getElementById('input').value;
    var sequence = input.split(' ');
    var maxNumber = Number.MIN_VALUE;
    var minNumber = Number.MAX_VALUE;

    for( var i = 0; i < sequence.length; i++){
        if( maxNumber < sequence[i]*1){
            maxNumber = sequence[i]*1;
        }
        if(minNumber > sequence[i]*1){
            minNumber = sequence[i]*1;
        }
    }

    jsConsole.writeLine('The maximal number in this sequence is ' + maxNumber);
    jsConsole.writeLine('The minimal number in this sequence is ' + minNumber);

}

