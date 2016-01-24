/*
Write a JavaScript function to check if in a given expression the brackets are put correctly.
Example of correct expression:  ((a+b)/5-d) . Example of incorrect expression:  )(a+b)) .
*/

//var input = '(a))(c)))()'; //the result must be false
//var input = '((a+b)+(c+d)+(e))'; //the result must be true
var input = '((((()))))';//the result must be true
//var input = ' )('; //the result must be false
//var input = '))))))'; //the result must be false
//var input = '(((((((('; //the result must be false

function bracketsCheck(input){
    var leftBracket = '(';
    var rightBracket = ')';
    var counter = 0;
    if(input.indexOf(')') < input.indexOf('(')){
        return false;
    }
    for( var i=0; i<input.length; i++ ){
       if( input[i] == leftBracket){
           counter++;
       }
        else if( input[i] == rightBracket){
            counter--;
        }
    }
    if(!counter){ //if(counter === 0) will return false, so !counter will return true
        return true;
    }
    return false;
}

console.log(bracketsCheck(input));