/*
 Write a program that finds how many times a sub-string is contained in a given text (perform case insensitive search).
 Example:

 The target sub-string is "in"

 The text is as follows: "We are living in an yellow submarine. We don't have anything else. Inside the submarine is very tight.
 So we are drinking all the day. We will move out of it in 5 days".

 The result is: 9
 */

var input = 'We are living in an yellow submarine. We don\'t have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days';
var searchedSubstring = 'in';

function searchForSubstring(input, searchedSubstring){
    var counter = 0;
    for( var i=0; i< input.length; i++){
        var substring = input.substr(i, searchedSubstring.length);
        if( substring.toLowerCase() === searchedSubstring.toLowerCase()){
            counter++;
        }
    }

    return counter;
}

console.log(searchForSubstring(input, searchedSubstring));