// Write a function that returns the index of the first element in array that is larger than its neighbours or  -1 ,
//              if there’s no such element.
// Use the function from the previous exercise.

var button = document.getElementById('check');
button.onclick = printResult;

function printResult(){

    var inputArray = document.getElementById('inputArray').value;
    var array = inputArray.split(/\W+/);


    jsConsole.writeLine('Input array is = [' + array + ']');
    jsConsole.writeLine('Index of first number bigger than its neighbours is: ' + check(array));
}

function check(array) {

    for(var index = 0; index < array.length; index++){

        if (!index && array[index] > array[index + 1]*1) { //проверка, дали index == 0; това ни връща true ако index = 0, което е false, съответно обратното му е true
            return index;
        }
        else if (array[index-1] * 1 < array[index] && array[index] > array[index + 1] * 1) { // Парсвам всеки елемент по отделно с *1
            return index;
        }
        else if (index == array.length - 1 && array[index] > array[index - 1]*1) { //това е проверката, ако индексът ни е на последното число в масива
            return index;
        }
    }
}


