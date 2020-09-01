/*
var john = [ 'John', 'Mary', 1990, 'teacher', false ];

for( var i = 0; i < john.length; i++ ) {
	console.log( john[i] );
} */


/*
//Continue statement

var john = [ 'John', 'Mary', 1990, 'teacher', false ];

for( var i = 0; i < john.length; i++ ) {
	if( typeof john[i] !== 'string' ) continue;
		console.log( john[i] );
} */


/*
//Break statement

for( var i = 0; i < john.length; i++ ) {
	if( typeof john[i] !== 'string' ) break;
		console.log( john[i] );
} */


//Decrement
var john = [ 'John', 'Mary', 1990, 'teacher', false ];

for( var i = john.length-1; i >= 0; i-- ) {
	console.log( john[i] );
}