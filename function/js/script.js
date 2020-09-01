function calculateAge(birthYear) {
	return 2020 - birthYear;
}

var ageJohn = calculateAge(2001);
var ageMike = calculateAge(1989);
var ageJane = calculateAge(1995);

console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, name) {
	var age = calculateAge(year);
	var retirement = 67 - age;

	if( retirement > 0 ) {

		console.log(name + ' retires in ' + retirement + ' years');

	} else {

		console.log(name + ' already retired.');
	}
}

yearsUntilRetirement(2001, 'John');
yearsUntilRetirement(1948, 'Jane');
yearsUntilRetirement(1988, 'Mike');