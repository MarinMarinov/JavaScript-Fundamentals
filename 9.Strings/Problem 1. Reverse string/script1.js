/*
Write a JavaScript function that reverses a string and returns it.

    Example:
input       output
sample       elpmas 
*/

var input = '!KO si dna desrever si ti won ,oS .gninnigeb eht ot dne eht morf tupni saw gnirts sihT';

function reverseString(input){
    var outputTemp =[];
    for( var i = 0; i< input.length; i++){
        outputTemp[i] = input[input.length-1-i];
    }
    var output = outputTemp.join('');
    
    return output;
}

var reversedString = reverseString(input);
console.log(reversedString);


