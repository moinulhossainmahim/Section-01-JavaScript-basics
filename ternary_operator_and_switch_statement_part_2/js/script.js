//Ternary Operators
var firstName = 'John';
var age = 15;


age >= 18 ? console.log( firstName + ' drinks beer.' ) : console.log( firstName + ' drinks juice.' );

var drink = age >= 18 ? 'beer' : 'juice';
console.log( drink );


// Switch statements

var job = 'coach';
switch(job) {

	case 'teacher':
		console.log( firstName + ' teaches students' );
		break;

	case 'driver' :
		console.log( firstName + ' drives uber in San-Francisco' );
		break;

	case 'coach' :
		console.log( firstName + ' trained player how to play well' );
		break;

	default:
		console.log( firstName + ' does something else' );		
}