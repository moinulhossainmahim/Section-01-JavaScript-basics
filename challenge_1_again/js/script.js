var massOfJohn = 80;
var heightOfJohn = 70;

var massOfMark = 40;
var heightOfMark = 140;


var BMIOfMark = massOfMark / ( heightOfMark * heightOfMark );
console.log( 'BMI of Mark is = ' + ' ' + BMIOfMark );

var BMIOfJohn = massOfJohn / ( heightOfJohn * heightOfJohn );
console.log( 'BMI of John is = ' + ' ' + BMIOfJohn );


var highestBMI = BMIOfJohn < BMIOfMark;
console.log( 'Is Mark BMI greater than John?' + ' ' + highestBMI );
