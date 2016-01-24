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
    if (!index && array[index] > array[index + 1]*1) { //��������, ���� index == 0; ���� �� ����� true ��� index = 0, ����� � false, ��������� ��������� �� � true
        bool = true;
    }
    else if (index == array.length - 1 && array[index] > array[index - 1]*1) { //���� � ����������, ��� �������� �� � �� ���������� ����� � ������
        bool = true;
    }
    else if (array[index-1] * 1 < array[index] && array[index] > array[index + 1] * 1) { // ������� ����� ������� �� ������� � *1
        bool = true;
    }
    return bool;
}
