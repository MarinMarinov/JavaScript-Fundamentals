// Write a function that counts how many times given number appears in given array.
// Write a test function to check if the function is working correctly.

var button = document.getElementById('check');
button.onclick = printResult;

function printResult(){

    var inputArray = document.getElementById('inputArray').value;
    var array = inputArray.split(/\W+/);
    var number = parseInt(document.getElementById('inputNumber').value);
    var inputExpected = parseInt(document.getElementById('inputExpected').value);
    jsConsole.writeLine('Input array is = [' + array + ']');
    jsConsole.writeLine('Number ' + number + ' appears: ' + checkForAppearance(array, number) + ' times!');
    jsConsole.writeLine(
        'Is the expected number ' + inputExpected + ' equal to check function result? '
        + checkForExpectedResult(checkForAppearance(array, number), inputExpected));
}


function checkForAppearance(array, number){

    var count = 0;
    for(var i = 0; i< array.length; i++){
        if( array[i]*1 === number){ //ако сложа === връща нула, защото не съм парснал входа!!! Парсвам всеки елемент по отделно с *1
            count++;
        }
    }
    return count;
}

function checkForExpectedResult(count, inputExpected){
    if(count === inputExpected){
        return true;
    }
    else{
        return false;
    }
}