/*
 • Write a function that checks if a given object contains a given property.

 Example:
 var obj  = …;
 var hasProp = hasProperty(obj, 'length');
*/


var testObject = {
    firstName: 'Ivan',
    lastName: 'Petkov',
    eyes: ['blue', 'black'],
    age: 45
};
var property = 'age'; //true
//var property = 'length'; //false

function hasProperty(object, property){
    if(object.hasOwnProperty(property)){
        return true;
    }
    else{
        return false;
    }
}
console.log('Does object have property ' + property + '? ' + hasProperty(testObject, property));


