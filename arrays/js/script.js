//Initialize array
var names = [ 'John', 'Mark', 'Mike' ];

console.log( names[ 0 ] );
console.log( names );
console.log( names.length );


//Mutate Array data
names[2] = 'Ben';
names[ names.length ] = 'Mary';

console.log( names );


//Different data types
var john = [ 'John', 'Smith', 1990, 'designer', 'false' ];

john.push( 'blue' );
john.unshift( 'Mr.' );
console.log( john );

john.pop();
john.shift();
console.log( john );
console.log( john.indexOf(1990) );

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);