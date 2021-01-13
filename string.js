var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';
var spasi = ' ';

console.log(word.concat(second).concat(spasi).concat(third).concat(spasi).concat(fourth).concat(spasi).concat(fifth).concat(spasi).concat(sixth).concat(spasi).concat(seventh));

var sentence = "I am going to be React Native Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence.substr(5, 5); // lakukan sendiri 
var fourthWord = sentence.substr(11, 2); // lakukan sendiri 
var fifthWord = sentence.substr(14, 2); // lakukan sendiri 
var sixthWord = sentence.substr(17, 5); // lakukan sendiri 
var seventhWord = sentence.substr(23, 6); // lakukan sendiri 
var eighthWord = sentence.substr(30, 9); // lakukan sendiri 

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)

// First word: I 
// Second word: am 
// Third word: going 
// Fourth word: to 
// Fifth word: be 
// Sixth word: React 
// Seventh word: Native 
// Eighth word: Developer