// console.log('JavaScript is just awesome');

// var firstName = 'John';
// var lastName = 'Smith';
// var job = 'teacher';

// alert(firstName + ' ' + 'is a' + ' ' + job);

// var  lastName = prompt( 'What is his lastName?' );
// console.log( firstName + ' ' + lastName );









var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = ( ageJohn + ageMark ) / 2;
console.log('Average of John and Mark is' + ' ' + average);

// multiple assignments 
var x, y;
x = y = ( 3 + 5 ) * 4 - 6;  // According to precedence, assignments operators works from right to left.
console.log( x, y ); 