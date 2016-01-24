// Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
// Use a sequence of  if  operators.



var button = document.getElementById('calculate');
button.onclick = calculate;

function calculate(){
    /*var x = jsConsole.readFloat('#inputX');
    var y = jsConsole.readFloat('#inputY');*/

    var a = parseFloat(document.getElementById('inputA').value);
    var b = parseFloat(document.getElementById('inputB').value);
    var c = parseFloat(document.getElementById('inputC').value);

    if( a > 0){
       if( b > 0){
           if( c > 0){
               jsConsole.writeLine('The product sign is +');
           }
           else if(c < 0){
               jsConsole.writeLine('The product sign is -');
           }
           else{
               jsConsole.writeLine('The product is 0');
           }
       }
        else if( b < 0){
           if( c > 0){
               jsConsole.writeLine('The product sign is -');
           }
           else if(c < 0){
               jsConsole.writeLine('The product sign is +');
           }
           else{
               jsConsole.writeLine('The product is 0');
           }
       }
        else{
           jsConsole.writeLine('The product is 0');
       }
    }
    else if( a < 0){
        if( b > 0){
            if( c > 0){
                jsConsole.writeLine('The product sign is -');
            }
            else if(c < 0){
                jsConsole.writeLine('The product sign is +');
            }
            else{
                jsConsole.writeLine('The product is 0');
            }
        }
        else if( b < 0){
            if( c > 0){
                jsConsole.writeLine('The product sign is +');
            }
            else if(c < 0){
                jsConsole.writeLine('The product sign is -');
            }
            else{
                jsConsole.writeLine('The product is 0');
            }
        }
        else{
            jsConsole.writeLine('The product is 0');
        }
    }
    else{
        jsConsole.writeLine('The product is 0');
    }
}

