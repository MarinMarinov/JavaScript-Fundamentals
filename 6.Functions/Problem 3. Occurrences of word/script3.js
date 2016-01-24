/*
 • Write a function that finds all the occurrences of word in a text.
 • The search can be case sensitive or case insensitive.
 • Use function overloading.
*/

var sensitiveButton = document.getElementById('check-caseSensitive');
var insensitiveButton = document.getElementById('check-caseInsensitive');

sensitiveButton.onclick = caseSensitiveCheck;
insensitiveButton.onclick = caseInsensitiveCheck;

//var text = document.getElementById('inputText').value;
//var word = document.getElementById('inputWord').value;

function caseSensitiveCheck(){
    var text = document.getElementById('inputText').value;
    var word = document.getElementById('inputWord').value;
    var caseSensitive = true;
    jsConsole.writeLine(countOccurrences(text, word, caseSensitive));
}
function caseInsensitiveCheck(){
    var text = document.getElementById('inputText').value;
    var word = document.getElementById('inputWord').value;
    var caseSensitive = false;
    jsConsole.writeLine(countOccurrences(text, word, caseSensitive));
}

function countOccurrences(text, word, caseSensitive){
    var textArray = text.split(/\W+/); //"W" - non-word символи, "+" всички предхождащи символи, ВНИМАНИЕ за символът след +
    var occurrence = 0;
    if(caseSensitive){
        for(i = 0; i< textArray.length; i++){
            if(textArray[i] === word){
                occurrence++;
            }
        }
    }
    else{
        var inputInUpperCase = text.toUpperCase();
        textArray = inputInUpperCase.split(/\W+/);
        var wordInUpperCase = word.toUpperCase();
        for(i = 0; i< textArray.length; i++){
            if(textArray[i] === wordInUpperCase){
                occurrence++;
            }
        }
    }
    return occurrence;
}


