/*Write a script that finds the maximal increasing sequence in an array.

    Example:
input	                    result
3, 2, 3, 4, 2, 2, 4         2,3,4

*/

//var array = [3, 2, 3, 4, 2, 2, 4 ];
var array = [3,3,3,3,1,2,3,4,5,2];
console.log('The test array is [' + array + ']');
var currentSequence = 1;
var maxSequence = 1;
var sequenceStart;

for( var i = 1; i< array.length; i++){
    if(array[i] > array[i - 1]){
        currentSequence++;
    }
    else{
        currentSequence = 1;
    }
    if(currentSequence > maxSequence){
        maxSequence = currentSequence;
        sequenceStart = i + 1 - maxSequence;
    }
}
/*console.log(currentSequence);
console.log(maxSequence);
console.log(sequenceStart);*/

var resultArray = new Array(maxSequence);
for(var i = 0; i<maxSequence; i++){
    resultArray[i] = array[sequenceStart + i];
}
console.log('The maximal increasing sequence is = {' + resultArray.join(',') + '}');


