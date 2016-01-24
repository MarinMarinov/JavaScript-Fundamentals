// Write a script that prints all the numbers from  1  to  N , that are not divisible by  3  and  7  at the same time


var button = document.getElementById('check');
button.onclick = check;

function check(){
    /*var x = jsConsole.readFloat('#input');*/


    var n = parseInt(document.getElementById('input').value);
    jsConsole.writeLine('Check for divisibility by 3 and 7 for the numbers from 1 to ' + n);

    for( var i = 1; i <= n; i++){

        if(i % 3 === 0 && i % 7 === 0){

            jsConsole.writeLine('The number ' + i + ' IS divisible by 3 and 7');
        }
        else{
            jsConsole.writeLine('The number ' + i + ' is NOT divisible by 3 and 7');
        }
    }
}

