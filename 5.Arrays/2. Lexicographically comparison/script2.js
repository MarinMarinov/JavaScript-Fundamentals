//Write a script that compares two char arrays lexicographically (letter by letter).

var firstArray = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var secondArray = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var thirdArray =  [ 'a', 'b', 'c', 'X', 'e', 'f', 'g', 'h'];

console.log('firstArray = ' + firstArray);
console.log('secondArray = ' + secondArray);
console.log('thirdArray = ' + thirdArray);


var isEqual = true;

if(firstArray.length == secondArray.length){
    for( var i=0; i < firstArray.length; i++){
        if(firstArray[i] != secondArray[i]){
            isEqual = false
            break;
        }
    }
    console.log('Is firstArray equal to secondArray? ' + isEqual);
}
else{
     console.log('The firstArray is NOT equal to secondArray');
}

if(firstArray.length == thirdArray.length){
    for( var i=0; i < firstArray.length; i++){
        if(firstArray[i] != thirdArray[i]){
            isEqual = false;
            break;
        }
    }
    console.log('Is firstArray equal to thirdArray? ' + isEqual);
}
else{
    console.log('The firstArray is NOT equal to thirdArray');
}
