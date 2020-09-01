var john = {
	fullName: 'John',
	mass: 92,
	height: 1.95,
	calcJohnBMI: function() {
		this.BMIOfJohn = this.mass / ( this.height * this.height );
	}
}

var mark = {
	fullName: 'Mark',
	mass: 89,
	height: 1.95,
	calcMarkBMI: function() {
		this.BMIOfMark = this.mass / ( this.height * this.height )
	}
}

john.calcJohnBMI();
mark.calcMarkBMI();

if( john.BMIOfJohn > mark.BMIOfMark ) {
	console.log( john.fullName + ' BMI is the highest and it is ' + john.BMIOfJohn );
} else if( john.BMIOfJohn < mark.BMIOfMark ) {
	console.log( mark.fullName + ' BMI is the highest and it is ' + mark.BMIOfMark );	
} else {
	console.log( 'BMI of ' + john.fullName + ' and ' + mark.fullName + ' is equal. ' + 'Their BMI is ' + john.BMIOfJohn)
}

