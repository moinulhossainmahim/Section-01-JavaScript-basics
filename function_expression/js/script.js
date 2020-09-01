var WhatDoYouDo = function(job, firstName) {
	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids how to code';

		case 'driver':
			return firstName + ' drives uber in Lisbon';

		case 'designer':
			return firstName + ' designs beautiful websites';

		default:
			return firstName + ' does something else';
	}
}

console.log(WhatDoYouDo('teacher', 'John'));
console.log(WhatDoYouDo('driver', 'Mike'));
console.log(WhatDoYouDo('software engineer', 'Jane'));