// type='module';
// import count from './main.js';
// require('./main.js');

import * as cargo from './export.js';
import biff from './export.js';
import bosa from './export.js';

//MOVE ALL THIS IMPORT STUFF TO "IMPORT" DOC

//prints cargo Module
console.log(cargo);
//prints cargo module within object called cargo
console.log({cargo});
//print "boff"
console.log(cargo.default);
//prints {biff: "boff"} object
console.log({biff});
//prints {bosa: "boff"} object
console.log({bosa});
// console.log("hey");
