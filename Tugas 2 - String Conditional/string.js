//soal 1
var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';
var spasi = ' ';

console.log(word.concat(second).concat(spasi).concat(third).concat(spasi).concat(fourth).concat(spasi).concat(fifth).concat(spasi).concat(sixth).concat(spasi).concat(seventh));

//soal 2
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

//soal 3
var sentence2 = 'wow JavaScript is so cool'; 

var exampleFirstWord2 = sentence2.substring(0, 3); 
var secondWord2 = sentence2.substring(4, 14); // do your own! 
var thirdWord2 = sentence2.substring(15, 17); // do your own! 
var fourthWord2 = sentence2.substring(18, 20); // do your own! 
var fifthWord2 = sentence2.substring(21); // do your own! 

console.log('First Word: ' + exampleFirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);

// First Word: wow 
// Second Word: JavaScript 
// Third Word: is 
// Fourth Word: so 
// Fifth Word: cool 

//soal 4
var sentence3 = 'wow JavaScript is so cool'; 

var exampleFirstWord3 = sentence3.substring(0, 3); 
var secondWord3 = sentence2.substring(4, 14); // do your own! 
var thirdWord3 = sentence2.substring(15, 17); // do your own! 
var fourthWord3 = sentence2.substring(18, 20); // do your own! 
var fifthWord3 = sentence2.substring(21); // do your own! 

var firstWordLength = exampleFirstWord3.length  
var secondLength = secondWord3.length  
var thirdLength = thirdWord3.length  
var fourthLength = fourthWord3.length  
var fifthLength = fifthWord3.length  
// lanjutkan buat variable lagi di bawah ini 
console.log('First Word: ' + exampleFirstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondLength); 
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdLength); 
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthLength); 
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthLength); 
//Output:

// First Word: wow, with length: 3 
// Second Word: JavaScript, with length: 10 
// Third Word: is, with length: 2 
// Fourth Word: so, with length: 2 
// Fifth Word: cool, with length: 4