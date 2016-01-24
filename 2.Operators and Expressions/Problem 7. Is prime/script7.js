// Write an expression that checks if given positive integer number n (n ? 100) is prime.


var button = document.getElementById('check');
button.onclick = calculate;

function calculate(){
    var number = jsConsole.readInteger('#input');
    var isPrime = true;
    if(number > 0 && number <= 100){
        if(number == 1){
            jsConsole.writeLine('The number 1 is Prime');
        }
        else{
            for(var i= 2; i < number; i+=1){ //� ������ number/2 ���� �� ���� ���������� ���, � ��������� ����, ����� �� ���� ���������� �� ����� �����!!!
                if( number % i == 0){
                    isPrime= false;
                }
            }
            jsConsole.writeLine('Is the number '+ number +' prime? ' + isPrime);
        }
    }
    else{
        jsConsole.writeLine('You have entered invalid number');
    }
}

