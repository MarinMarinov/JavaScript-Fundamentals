// Write a function to count the number of  div  elements on the web page

var divs=0;

function divCounter(){
    divs = document.getElementsByTagName('div').length;

    jsConsole.writeLine('The amount of all div elements in the html file is: ' + divs);
}
divCounter();


