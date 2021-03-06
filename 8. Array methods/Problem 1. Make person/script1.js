/*
 Write a function for creating persons.
 Each person must have firstname, lastname, age and gender (true is female, false is male)
 Generate an array with ten person with different names, ages and genders
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

console.log(pseudoStars);