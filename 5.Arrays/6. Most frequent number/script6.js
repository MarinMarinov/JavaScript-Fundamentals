/*Write a script that finds the most frequent number in an array.

    Example:
input	                                        result
4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3          4 (5 times)
*/

//var array = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
var array = [1,2,12,555,23,234,2456,3,3,4,4,4,55,55,56,67,100];
console.log('The test array is [' + array + ']');

function orderBy(a,b){ //с тази функция правим пълно сортиране, т.е. сортираме и числа като 2, 23, 234
    return a-b;
}

var sortedArray = array.sort(orderBy); //ето тук я използваме, показаха ни я на лекцията!!!
console.log(sortedArray);

var counter = 1;
var numberOfAppearance = 1;
var mostFrequentNumber = 0;

for( var i= 0; i< sortedArray.length; i++){
    if( sortedArray[i] == sortedArray[i+1]){
        counter++;
    }
    else{
        counter=1;
    }
    if( counter > numberOfAppearance){
        numberOfAppearance = counter;
        mostFrequentNumber = sortedArray[i];
    }
}

/*console.log(numberOfAppearance);
console.log(mostFrequentNumber);*/

console.log('The most frequent number is ' + mostFrequentNumber + ' and it appears ' + numberOfAppearance + ' times!')
