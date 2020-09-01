var massOfMark = 58;
var massOfJohn = 70;

var heightOfMark = 30;
var heightOfJohn = 50;

var BMIOfMark;
var BMIOfJohn;

BMIOfMark = massOfMark / ( heightOfMark * heightOfMark );
BMIOfJohn = massOfJohn / ( heightOfJohn * heightOfJohn );
console.log( BMIOfMark, BMIOfJohn );

var highestBMI = BMIOfMark > BMIOfJohn;

console.log( 'Is Mark\'s BMI is greater than John\'s BMI?' + ' ' + highestBMI );