/*
Write a script that finds the maximal sequence of equal elements in an array.

    Example:
input	                                result
2, 1, 1, 2, 3, 3, 2, 2, 2, 1	        2, 2, 2

*/

var numbers = [ 1,2,3,3,3,4,5,5,5,5,6,3,4,2,2,3,4];
console.log('The test array is [' + numbers + ']');

var sequence = 1;
var bestSequence = 1;
var bestSequenceNumber = 0;

for( var i = 0; i< numbers.length; i++){
    if(numbers[i] == numbers[i+1]){
        sequence++;
    }
    else{
        sequence = 1;
    }
    if(sequence >= bestSequence){
        bestSequence = sequence;
        bestSequenceNumber = numbers[i];
    }
}
//console.log('The maximal sequence is: ' + new Array(bestSequence).join(','));
var bestSequenceArray =[];
for(var i = 0; i < bestSequence; i++){
    bestSequenceArray[i] = bestSequenceNumber;
}
console.log('The maximal sequence is: ' + bestSequenceArray.join(','));