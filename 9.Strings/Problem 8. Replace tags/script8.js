/*
Write a JavaScript function that replaces in a HTML document given as string all the tags
<a href="…">…</a> with corresponding tags [URL=…]…/URL].
 */

var html = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';

var startURL = '[URL=';
var endURL = ']';
var closeURL = '[/URL]';

function replaceTags(html){
    for(var i = 0; i< html.length; i+=1){
        if(html.substr(i, 9) === '<a href="'){
            html = html.replace('<a href="', startURL);
        }
        if(html.substr(i, 2) === '">'){
            html = html.replace('">', endURL);
        }
        if(html.substr(i, 4) === '</a>'){
            html = html.replace('</a>', closeURL);
        }
    }
    return html;
}

console.log(replaceTags(html));
