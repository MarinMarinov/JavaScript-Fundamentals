/**
 Write a function that checks if an array of person contains only people of age (with age 18 or greater)
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

var result = pseudoStars.filter(inAge);
console.log(result);

function inAge(person){
    return person.age > 18;  // can check with preferred age
}

