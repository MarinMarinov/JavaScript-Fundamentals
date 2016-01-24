//Write a function that puts the value of an object into the content/attributes of HTML tags.
// Add the function to the String.prototype

/*
 Example 1:

 input
 var str = '<div data-bind-content="name"></div>';
 str.bind(str, {name: 'Steven'});

 output
 <div data-bind-content="name">Steven</div>


 Example 2:

 input
 var bindingString = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></à>'
 str.bind(str, {name: 'Elena', link: 'http://telerikacademy.com'});

 output
 <a data-bind-content="name" data-bind-href="link" data-bind-class="name" href="http://telerikacademy.com" class="Elena">Elena</à>

 */

if (!String.prototype.bind) {
    String.prototype.bind = function(options) {
        var output;
        var pattern1 = /data-bind-content="(.*?)".*?>/g;
        output = this.replace(pattern1, function(pattern, groupName){
            return  pattern + options[groupName];
        });

        var pattern2 = /data-bind-(.*?)="(.*?)"/g;
        output = output.replace(pattern2, function(pattern, groupType, groupName) {
            if (groupType === 'class') {
                var className = groupType + '="' + options[groupName] + '"';
            }
            if (groupType === 'href') {
                var hrefLink = groupType + '="' + options[groupName] + '"';
            }
            pattern = pattern + ' ' + hrefLink + className;
            pattern = pattern.replace(/undefined/g,'');
            return pattern;

        });

        return output;
    }
}

var string = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></a>';
//var string = '<div data-bind-content="name"></div>';
string = string.bind({
    name: 'Elena',
    link: 'http://telerikacademy.com'
});
console.log(string);
