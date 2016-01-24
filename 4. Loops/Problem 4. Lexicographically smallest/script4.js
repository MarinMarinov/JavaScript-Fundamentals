// Write a script that finds the lexicographically smallest and largest property in  document ,  window  and  navigator  objects.

jsConsole.writeLine('document');
getProperties(document);
jsConsole.writeLine(new Array(20).join('-'));

jsConsole.writeLine('window');
getProperties(window);
jsConsole.writeLine(new Array(20).join('-'));

jsConsole.writeLine('navigator');
getProperties(navigator);
jsConsole.writeLine(new Array(20).join('-'));

function getProperties(obj){
    var smallest = 0;
    var largest = 0;

    for(var property in obj){
        if(!smallest){
            smallest = property;
        }
        if(!largest){
            largest = property;
        }
        if( smallest > property){
            smallest = property;
        }
        if( largest < property){
            largest = property;
        }
    }
    jsConsole.writeLine('The lexicographically smallest property is: ' + smallest);
    jsConsole.writeLine('The lexicographically largest property is: ' + largest);
}
