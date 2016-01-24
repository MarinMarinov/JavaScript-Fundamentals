/*
 Write a function that makes a deep copy of an object.
 The function should work for both primitive and reference types.
*/

var testObject = [ 1,2,3, ['sulio', 'pulio'], "o'bama", 123.45, 3.1415];
//var testObject = [1,2,3,4,5];
//var testObject = 123;
console.log('Test object is: ' + JSON.stringify(testObject));
var cloned;

function cloneObject(object){
    var clone;
    if(object instanceof Array){
        clone = [];
    }
    else{
        clone = {};
    }
    //var clone = object instanceof Array ? [] : {}; //цялата горна условна конструкция, можем да заменим с този ред
    for(var key in object){
        if( object.hasOwnProperty(key)){ //защо с (key) а не с [key], 
            if(typeof(object[key]) == 'object' && object[key]!= null){ // не трябва ли да е просто [key]
                clone[key] = cloneObject(object[key]);
            }
            else{
                clone[key] = object[key];
            }
        }
    }
    return clone;
}

var newObject = cloneObject(testObject);
console.log('The new object is: ' + JSON.stringify(newObject));
console.log('Are the newObject and testObject same? ' + (newObject === testObject));newObject
newObject.pop();
newObject.shift();
console.log('The newObject, modified by shift and pop method:  ' + JSON.stringify(newObject));
console.log('Certainly, testObject is untouched and unchanged: ' + JSON.stringify(testObject));
