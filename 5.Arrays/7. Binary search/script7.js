// Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm

var testArray = [];
for( var i = 0; i < 101; i++){ //пълня масива с някакви последователни числа, в случая от 10 до 110
    testArray[i] = i+10;
}
console.log('The test array is = [' + testArray.join(',') + ']');

//var searchNumber= 100;
//var searchNumber= 9;
//var searchNumber= 111;
var searchNumber= 56;

var start = 0;
var end = testArray.length;

if( testArray[start] > searchNumber || testArray[end-1] < searchNumber){
    console.log('There is no such number in the array');
}
else{
    while( (end - start) >= 1) {

        var middleNumberIndex = start + ((end - start) / 2 | 0);

        if (testArray[middleNumberIndex] === searchNumber) {
            console.log('Search number ' + searchNumber + ' index is ' + middleNumberIndex);
            break;
        }
        else if (testArray[middleNumberIndex] > searchNumber) {
            end = middleNumberIndex;
        }
        else if (testArray[middleNumberIndex] < searchNumber) {
            start = middleNumberIndex;
        }
    }
}
