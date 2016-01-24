/*
Write a function that extracts the content of a html page given as text.
The function should return anything that is in a tag, without the tags.
Example:

<html>
<head>
    <title>Sample site</title>
</head>
    <body>
        <div>text
        <div>more text</div>
        and more...
        </div>
        in body
    </body>
</html>

Result: Sample sitetextmore textand more...in b
*/

var html = '<html><head><title>Sample site</title></head><body><div>text <div>more text</div>and more... </div>in body </body>';
var output = '';
var inTag = false;

function textExtracting(html){
    for( var i =0; i< html.length; i++){
        if( html[i] === '>'){
            inTag = true;
        }
        if(html[i] === '<'){
            inTag = false;
        }
        while(inTag){
            i++;
            if(html[i] === '<' || html[i] === undefined){
                inTag = false;
                break;
            }
            output = output + html[i];
        }
    }
    return output;
}

console.log(textExtracting(html));


