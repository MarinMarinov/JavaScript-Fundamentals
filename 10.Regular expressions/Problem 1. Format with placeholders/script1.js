// Write a function that formats a string. The function should have placeholders, as shown in the example
// Add the function to the String.prototype
/*
 Example:

 input                                                                  output
 var options = {name: 'John'};
 'Hello, there! Are you #{name}?'.format(options);                      'Hello, there! Are you John'


 var options = {name: 'John', age: 13};
 'My name is #{name} and I am #{age}-years-old').format(options);       'My name is John and I am 13-years-old'

*/
if(!String.prototype.format){
    String.prototype.format = function(options){
        var result = this;
        for(var property in options){
            var regex = new RegExp('#{' + property + '}', 'g');
            result = result.replace(regex, options[property]);
        }

        return result;
    };
}

/*var options = {name: 'John'};
var question = 'Hello, there! Are you #{name}?';*/

/*var options = {name: 'John', age: 13};
var question = 'My name is #{name} and I am #{age}-years-old';*/

var options = {fname: 'Pesho', lname: 'Goshov', age: 25, gender: 'male'};
var question = 'My name is #{fname} #{lname}, I am #{age}-years-old, and my gender is #{gender}!';


var answer = question.format(options);
console.log(answer);


