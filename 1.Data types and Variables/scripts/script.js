//01.Assign all the possible JavaScript literals to different variables.
//03.Try typeof on all variables you created
//04.Create null, undefined variables and try typeof on them.



var integer = 123;
var floatPointVariable = 123.321;
var boolean = true;
var arrayOfNumbers = [1,2,3,4];
var arrayOfStrings = ['Alfa', 'Beta', 'Gamma', 'Delta'];
var string = 'This is a "string"';
var functionVariable = function () {};
var object = {car: 'Mercedes', type:'Convertible', price:100000}; //връща отговор [object Object]
var undefinedVariable = undefined;
var nullVariable = null;
//-------------End of Problem 1-------------------

var variables = [integer, floatPointVariable, boolean, arrayOfNumbers, arrayOfStrings,
    string, functionVariable, object, undefinedVariable, nullVariable];

for(var i = 0; i < variables.length; i++){
    console.log('The type of "' + variables[i] + '" variable is: ' + typeof(variables[i]));
} //изписва резултатите в конзолата на браузъра

for(var i = 0; i < variables.length; i++){
    jsConsole.writeLine('The type of "' + variables[i] + '" variable is: ' + typeof(variables[i]));
}//изписва резултатите в нашата конзола

jsConsole.writeLine('');
jsConsole.writeLine('-------------End of Problem 1, 3 and 4-------------------');

//02.Create a string variable with quoted text in it. For example:
//'How you doin'?', Joey said.

jsConsole.writeLine('');
var stringFirst = '"How you doin"?", Joey said".';
var stringSecond = "'How you doin'?', Joey said'.";

console.log(stringFirst);
console.log(stringSecond);

jsConsole.writeLine(stringFirst);
jsConsole.writeLine(stringSecond);

jsConsole.writeLine('');
jsConsole.writeLine('-------------End of Problem 2-------------------');


