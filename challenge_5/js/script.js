var john = {
	fullName: 'John Smith',
	billValues: [ 124, 48, 268, 42, 180 ],
	calcTip: function() {
		this.tips = [];
		this.totalAmounts = [];

		for( var i=0; i < this.billValues.length; i++ ) {
			var bill = this.billValues[i];
			var percentage;
			if( bill < 50 ) {
				percentage = .2;
			} else if( bill >= 50 && bill < 200 ) {
				percentage = .15;
			} else {
				percentage = .1;
			}
			this.tips[i] = bill * percentage;
			this.totalAmounts[i] = bill + this.tips[i] ;
		}
	}
}

var mark = {
	fullName: 'Mark Miller',
	billValues: [ 77, 475, 110, 45 ],
	calcTip: function() {
		this.tips = [];
		this.totalAmounts = [];

		for( var i=0; i < this.billValues.length; i++ ) {
			var bill = this.billValues[i];
			var percentage;
			if( bill < 100 ) {
				percentage = .2;
			} else if( bill >= 100 && bill < 300 ) {
				percentage = .1;
			} else {
				percentage = .25;
			}
			this.tips[i] = bill * percentage;
			this.totalAmounts[i] = bill + this.tips[i] ;
		}
	}
}


function calcAverage(tips) {
	var sum = 0;
	for( var i = 0; i < tips.length; i++ ) {
		sum = sum + tips[i];
	}
	return sum / tips.length;
} 

john.calcTip();
mark.calcTip();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log( john, mark );

if( john.average > mark.average ) {
	console.log( john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if(  john.average < mark.average ) {
	console.log( mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
} else {
	console.log( 'Both of ' + john.fullName + ' ' + mark.fullName + ' family\'s pay same $' );
}
