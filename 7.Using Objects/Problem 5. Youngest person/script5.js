/*
 Write a function that finds the youngest person in a given array of people and prints his/hers full name
 Each person has properties firstname, lastname and age.

 Example:
 var people = [
 { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
 { firstname : 'Bay', lastname: 'Ivan', age: 81},… ];
 */

var people = [
    { firstName : 'Gosho', lastName: 'Petrov', age: 20 },
    { firstName : 'Pesho', lastName: 'Goshov', age: 21 },
    { firstName : 'Tosho', lastName: 'Toshov', age: 33 },
    { firstName : 'Mladen', lastName: 'Mladenov', age: 16 },
    { firstName : 'Spas', lastName: 'Spasov', age: 34 }
];

function findTheYoungest(object){
    var youngestPerson =object[0];
    for(var i = 0; i < object.length; i+=1){
        if(youngestPerson.age > object[i].age){
            youngestPerson = object[i];
        }
    }
    return youngestPerson;
}

console.log('The youngest person is ' + JSON.stringify(findTheYoungest(people))); // икзарва стринг от всички пропъртита и техните стойности на обекта
console.log(findTheYoungest(people)); // това също изкарва четим резултат!
console.log('The youngest person is ' + findTheYoungest(people)); // изкарва [object Object] - ????
