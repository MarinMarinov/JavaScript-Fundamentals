/*
Sorting an array means to arrange its elements in increasing order.
    Write a script to sort an array.
    Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest,
     move it at the second position, etc.
    Hint: Use a second array
*/

var array = [1,4,2,5,6,7,3,8,0,9];
console.log('The test array is [' + array + ']');
//var temporary =[];

for(var i = 0; i< array.length-1; i++){
    for( var j = i+1; j<array.length; j++){
        if( array[i] > array[j]){
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log('Selection sorted array is = [' + array + ']');

