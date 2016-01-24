/*
 Write a function for extracting all email addresses from given text.
 All sub-strings that match the format @… should be recognized as emails.
 Return the emails as array of strings.
 */

var text = 'This is e-mail: somemail@abv.bg and some other e-mail:   second@ohobogo.com';
var listOfMails = [];

function extractEmail(text){
    var splitText = text.split(' ');
    for( var i= 0; i<splitText.length; i++){
        for( var j=0; j< splitText[i].length; j++){
            if(splitText[i][j] === '@'){
                listOfMails.push(splitText[i]);
            }
        }
    }
    function print(){
        for(var i =0; i< listOfMails.length; i++){
            console.log(listOfMails[i]);
        }
    }
    return print();
}
extractEmail(text);
console.log('The string array with the e-mails is: [' + listOfMails + ']');





/* //other solution of the problem, but not finished
function extractEmail(text){
    var splitText = text.split(' ');
    var listOfMails = [];
    var isEmail = false;

    for( var word in splitText){
        for( var i = 0; i< word.length; i++){
            if(word[i] === '@'){
                isEmail = true;
                break;
            }
            else{
                isEmail = false;
            }
        }
        //return isEmail;

        function extract(isEmail, splitText){
            if(isEmail){
                var indexOfAt = text.indexOf('@');
                var startIndex = text.lastIndexOf(' ', indexOfAt);
                var indexOfDot = text.indexOf('.', indexOfAt);
                var lastIndex = 0;
                for( var j = indexOfDot; j< text.length; j++){
                    if( text[text.length -1] !== ' '){
                        lastIndex = text.length -1;
                        break;
                    }
                    else if(text[j] === ' '){
                        lastIndex = j;
                        break;
                    }
                }

                var maleName = text.substring(startIndex + 1, indexOfAt);
                console.log(maleName);

                var mailDomainName = text.substring(indexOfAt + 1, indexOfDot);
                console.log(mailDomainName);


                var mailDomain = text.substring(indexOfDot + 1, lastIndex);
                console.log(mailDomain);

                var email = maleName + '@' + mailDomainName + '.' + mailDomain;
                listOfMails.push(email);
            }
        }
    }
    return listOfMails;
}*/
