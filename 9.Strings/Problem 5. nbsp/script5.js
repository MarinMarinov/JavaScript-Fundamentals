// Write a function that replaces non breaking white-spaces in a text with  &nbsp ;

var input = 'First sentence first, from two. Second sentence, second from two.';

function replaceWhiteSpaces(input){
    var result = input.replace(/ /g, '&nbsp');

    return result;
}
console.log(replaceWhiteSpaces(input));