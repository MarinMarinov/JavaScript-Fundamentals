// Write a script that prints all the numbers from  1  to  N


var button = document.getElementById('check');
button.onclick = check;

function check(){
    /*var x = jsConsole.readFloat('#input');*/


    var n = parseInt(document.getElementById('input').value);

    for( var i = 1; i <= n; i++){
        jsConsole.writeLine(i);
    }
}

