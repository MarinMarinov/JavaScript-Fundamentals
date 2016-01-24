// Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours
// (when such exist).

var button = document.getElementById('check');
button.onclick = printResult;

function printResult(){

    var inputArray = document.getElementById('inputArray').value;
    var array = inputArray.split(/\W+/);
    var index = parseInt(document.getElementById('inputIndex').value);

    jsConsole.writeLine('Input array is = [' + array + ']');
    jsConsole.writeLine('Is the number at index ' + index + ' bigger than its neighbours? ' + check(array, index));
}

function check(array, index) {
    var bool = false;
    if (!index && array[index] > array[index + 1]*1) { //проверка, дали index == 0; това ни връща true ако index = 0, което е false, съответно обратното му е true
        bool = true;
    }
    else if (index == array.length - 1 && array[index] > array[index - 1]*1) { //това е проверката, ако индексът ни е на последното число в масива
        bool = true;
    }
    else if (array[index-1] * 1 < array[index] && array[index] > array[index + 1] * 1) { // Парсвам всеки елемент по отделно с *1
        bool = true;
    }
    return bool;
}
