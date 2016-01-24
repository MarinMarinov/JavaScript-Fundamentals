// Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".

var text = 'a ABBA some text IGGI another text ohoboho';

var splitText = text.split(' ');
var palindromes = [];
for(var i=0; i< splitText.length; i++){
    var isPalindrom = true;
    for(var j=0; j<splitText[i].length/2|0; j++){

        if(splitText[i][j] !== splitText[i][splitText[i].length - 1 - j]){
            isPalindrom = false;
            break;
        }
    }
    if(isPalindrom && splitText[i].length > 1){
        console.log("Is the word " + splitText[i] + ' palindrome? ' + isPalindrom);
        palindromes.push(splitText[i]);
    }
}

console.log('The string array with the palindromes is: [' + palindromes + ']');