/*
Write a function that creates a HTML  <ul>  using a template for every HTML  <li> .
The source of the list should be an array of elements.
Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.

    Example: HTML:
    <div data-type="template" id="list-item">
    <strong>-{name}-</strong> <span>-{age}-</span>
/div>


JavaScript:
var people = [{name: 'Peter', age: 14},…];
var tmpl = document.getElementById('list-item').innerHtml;
var peopleList = generateList(people, template);
//peopleList = '<ul><li><strong>Peter</strong> <span>14</span></li><li>…</li>…</ul>'
*/

var peopleList = [{name: 'Peter', age: 14},{name: 'Ivan', age: 18}, {name: 'Dragan', age: 34} ];
var template = '<strong>-{name}-</strong> <span>-{age}-</span>';

function createHTML(people, template){
    var result = '<ul>';
    for(var i= 0; i < people.length; i++){
        result = result + '<li>';

        var currentTemplate = template.replace('-{name}-', people[i].name);
        currentTemplate = currentTemplate.replace('-{age}-', people[i].age);

        result = result + currentTemplate;
        result = result + '</li>';
    }
    result = result + '</ul>';

    return result;
}

console.log(createHTML(peopleList, template));