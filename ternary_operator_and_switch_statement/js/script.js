//Ternary Operator 
var firstName = 'Moinul';
var age = 20;
var result;

result = age >= 10 ? 'teenager' : 'little-boy';
console.log(firstName + ' ' + 'is a' + '', result);




//Switch Statement
var job = 'instructor';

switch(job) {
	case 'teacher':
	case 'instructor':

		console.log( firstName + ' ' + 'teaches students how to code' );
		break;

	case 'driver':
		console.log( firstName + ' ' + 'drives uber in Lisbon' );
		break;

	case 'designer':
		console.log( firstName + ' ' + 'did beautiful design' );
		break;

	default:
		console.log( firstName + ' ' + 'does something else' );
}












