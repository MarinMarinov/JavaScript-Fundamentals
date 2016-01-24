/*
 You are given a text. Write a function that changes the text in all regions:

 <upcase>text</upcase> to uppercase.
 <lowcase>text</lowcase> to lowercase
 <mixcase>text</mixcase> to mix casing(random)

 Example: We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>.
 We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.

 The expected result:
 We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.

 Note: Regions can be nested.
 */

var text ="We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>.We <mixcase>don't</mixcase> have <lowcase>anyTHIng</lowcase> else.";


var upcase = '<upcase>';
var lowcase = '<lowcase>';
var mixcase = '<mixcase>';
var output ='';

function changeText(text){
    for( var i= 0; i< text.length; i+=1){
        if(text[i] === '<' && text.substr(i, 9)=== mixcase){
            i+=9;
            while(true){
                if(text[i] === '<'){
                    i+=9;
                    break;
                }
                var randomNumber = Math.random();
                if(randomNumber <= 0.5){
                    output = output + text[i].toUpperCase();
                }
                else{
                    output = output + text[i].toLowerCase();
                }
                i++;

            }
        }
        else if(text[i] === '<' && text.substr(i, 8)=== upcase){
            i+=8;
            while(true){
                if(text[i] === '<'){
                    i+=8;
                    break;
                }
                output = output + text[i].toUpperCase();
                i++;
            }
        }
        else if(text[i] === '<' && text.substr(i, 9)=== lowcase){
            i+=9;
            while(true){
                if(text[i] === '<'){
                    i+=9;
                    break;
                }
                output = output + text[i].toLowerCase();
                i++;
            }
        }
        else{
            output += text[i];
        }
    }
    return output;
}

console.log(changeText(text));