var john = {
	firstName: 'john',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false,
	calcAge: function() {
		this.age = 2020 - this.birthYear;
	}
};

john.calcAge();
console.log(john);