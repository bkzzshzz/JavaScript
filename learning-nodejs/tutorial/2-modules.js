// Modules
const names = require('./2-names');
const sayHi = require('./2-utils');
const data = require('./2-alternative-syntax')
console.log(names);
console.log(data);


sayHi('Senorita');
sayHi(names.john);
sayHi(names.peter)