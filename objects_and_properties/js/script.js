//Object literal
var john = {
	firstName: 'john',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);


//Mutate property values
john.job = 'designer';
john['isMarried'] = true;
console.log(john);







//new object syntex 
var jane = new Object();
jane.firstName = 'John';
jane.lastName = 'Mike';
jane['birthYear'] = 1990;

console.log( jane );  

