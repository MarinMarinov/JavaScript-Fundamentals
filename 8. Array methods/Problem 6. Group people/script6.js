/**
 Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
 Use Array#reduce
 Use only array methods and no regular loops (for, while)
 Example:

 result = {
        'a': [{
            firstname: 'Asen',

        }, {
            firstname: 'Anakonda',

        }],
        'j': [{
            firstname: 'John',

        }]
};

 */

function generatePerson(firstname, lastname, age, gender){
    return {
        fName: firstname,
        lName: lastname,
        age: age,
        gender: gender
    }
}

var batkov = generatePerson('Baj', 'Ganyo', 58, false);
var domusa = generatePerson('Kiro', 'Gela', 50, false);
var lupi = generatePerson('Sasho', 'Apasho', 52, false);
var mara = generatePerson('Mara', 'Otvarachkata', 18, true);
var nikoleta = generatePerson('Ni', 'Lo', 18, true);
var pepa = generatePerson('Pepa', 'Seksa', 18, true);
var venci = generatePerson('Venci', 'Shekembeto', 59, false);
var goshko = generatePerson('Georgi', 'Vratarcheto', 38, false);
var bobi = generatePerson('Bobi', 'Peruka', 53, false);
var konchita = generatePerson('Konchita', 'Vurst', 21, true); //gender is not fault!!!

var pseudoStars = [];
pseudoStars.push(batkov, domusa, lupi, mara, nikoleta, pepa, venci, goshko, bobi, konchita);

var result = pseudoStars.reduce(function (array, person) {
    var firstLetter = person.fName[0];
    if (array[firstLetter]) {
        array[firstLetter].push(person);
    }
    else {
        array[firstLetter] = [];
        array[firstLetter].push(person);
    }
    return array;
}, {});

console.log(JSON.stringify(result, null, '\t'));