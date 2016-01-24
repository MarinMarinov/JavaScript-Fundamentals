/*
 Write a function that groups an array of people by age, first or last name.
 The function must return an associative array, with keys - the groups, and values - arrays with people in this groups

 Use function overloading (i.e. just one function)

 Example:
 var people = {…};
 var groupedByFname = group(people, 'firstname');
 var groupedByAge= group(people, 'age');
 */

var people = [
    {firstname: 'Dragan', lastname: 'Ivanov', age: 34 },
    {firstname: 'Petkan', lastname: 'Petrov', age: 23 },
    {firstname: 'Ivan', lastname: 'Dimitrov', age: 46 },
    {firstname: 'Pesho', lastname: 'Atanasov', age: 23 },
    {firstname: 'Gosho', lastname: 'Petrov', age: 35 }
];

//сортиране
function groupPeople(array, key){
    var groupedPeople = {};
    for(var i=0; i< array.length; i++){
        var keyValue = array[i][key];
        groupedPeople[keyValue] = [];
        for(var k=0; k< array.length; k++){
            if(keyValue == array[k][key]){
                groupedPeople[keyValue].push(array[k]);
            }
        }
    }
    return groupedPeople;
}


//отпечатване на резултата
function print(groupedPeople, groupedBy){
    console.log('Grouped by ' + groupedBy + ':');
    for(var object in groupedPeople){
        for(var i=0; i< groupedPeople[object].length; i++){
            console.log('First name: ' + groupedPeople[object][i].firstname + '; Last name: ' + groupedPeople[object][i].lastname + '; age: ' + groupedPeople[object][i].age +';');
        }
    }

}

//извикване на сортиращата функция
var groupedByAge = groupPeople(people, "age");
var groupedByFirstName = groupPeople(people, 'firstname');
var groupedByLastName = groupPeople(people, 'lastname');

//извикване на печатащата функция
print(groupedByAge, 'Age');
print(groupedByFirstName, 'First name');
print(groupedByLastName, 'Last name');
