/*
 Write a function that formats a string using placeholders.
 The function should work with up to 30 placeholders and all types.
 Examples:

 var str = stringFormat('Hello {0}!', 'Peter');
 //str = 'Hello Peter!';

 var frmt = '{0}, {1}, {0} text {2}';
 var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
 //str = '1, Pesho, 1 text Gosho'
 */

var format = '{0}, {1}, {0}, {2} text {2}, another text {3}';

function stringFormat(format){
    var placeholder = '';

    for( var i =0; i< arguments.length; i+=1){
        placeholder = '{' + (i - 1) + '}';
        for(var j =0; j < arguments.length; j+=1){
            format = format.replace(placeholder, arguments[i]);
        }
    }

    return format;
}

console.log(stringFormat(format, 1, 'Pesho', 'Gosho', '1245'));