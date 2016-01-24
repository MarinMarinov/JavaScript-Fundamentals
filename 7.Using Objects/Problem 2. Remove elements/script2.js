/*
 Write a function that removes all elements with a given value.
 Attach it to the array type.
 Read about prototype and how to attach methods.

 var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
 arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];
*/

var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
var elementForRemoving = 1;
console.log('Initial array = [' + arr + ']');

/*
//стандартен начин- обхождаме по елементите на масива и при съвпадение махаме
function removeElement(array, number){
    for(var i = 0; i< array.length; i+=1){
        if( array[i] === number){
            array.splice(i, 1);
        }
    }
    return array;
}

removeElement(arr, 1);
console.log(arr);*/


Array.prototype.myOwnDelete = function (array, number){
    for(var i = 0; i< array.length; i+=1){
        if( array[i] === number){
            array.splice(i, 1);
        }
    }
    return array;
};

var newArray = arr.myOwnDelete(arr, elementForRemoving);
console.log('Array after removing all "' + elementForRemoving + '" elements = [' + newArray + ']');
//console.log(arr); //това връща същият резултат като newArray, защото масивите са от референтен тип !!!!!!!!!!

//друг, някакъв метод, за упражнение
/*
var arrayForTest = [1,2,3,4,5,6,7,8,9];
console.log('The arrayForTest array = [' + arrayForTest + ']');
Array.prototype.someStrangeTestMethod = function(array, number){
    for(var i=0; i<array.length; i++){
        array[i] = ((array[i]+number)/number).toFixed(4);
    }
    return array;
};

arr.someStrangeTestMethod(arrayForTest, 1234); // ще работи върху масива, който сме подали,
                                                // а не върху масива, чрез който викаме метода!!!!!!!!!!!!
console.log('The arr array: = [' + arr + ']; Its not changed by someStrangeTestMethod, even we call it true this array');
console.log('The arrayForTest array: = [' + arrayForTest + ']; this array is changed by someStrangeTestMethod');
*/
