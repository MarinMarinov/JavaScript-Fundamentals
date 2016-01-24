/**
 Write a function that calculates the average age of all females, extracted from an array of persons
 Use Array#filter
 Use only array methods and no regular loops (for, while)
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

console.log('The females are:');
var femalesList = pseudoStars.filter(females);//here can't make chaining
femalesList.forEach(printPerson);

var ageSum = 0;

femalesList.forEach(function(item){
    return ageSum += item.age;
});

var averageAge = ageSum/femalesList.length;
console.log('The average female age is: ' + averageAge);

function females(person){
    return person.gender === true;
}



function printPerson(person){ //prints in more readable way
    console.log( person.fName + ' ' + person.lName + ' ' + person.age + ' ' + person.gender);
}