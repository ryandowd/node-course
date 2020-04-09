const argv = require('yargs')
  .command('hello', 'Greets the user', function(yargs) {
    yargs.options({
      firstName: {
        demand: true,
        alias: 'fn',
        description: 'You first name goes here'
      },
      lastName: {
        demand: true,
        alias: 'ln',
        description: 'You last name goes here'
      }
    }).help('help');
  })
  .help('help')
  .argv;
const command = argv._[0];

console.log(argv);

// const firstName = argv.firstName !== 'undefined' ?  argv.firstName : '';
// const lastName = argv.lastName !== 'undefined' ?  argv.lastName : '';

const firstNameExists = typeof argv.firstName !== 'undefined';
const lastNameExists = typeof argv.lastName !== 'undefined';

// if (command === 'hello' && typeof argv.name !== 'undefined' && typeof argv.lastName === 'undefined') {
//   console.log('Hello ' + argv.name + '!');
// } else if (command === 'hello') {
//   console.log('Hello World!');
// } else if (command === 'hello') {
//   console.log('Hello World!');
// }


// const name = `${firstName} ${lastName}`;

const name = firstNameExists && lastNameExists ? `${argv.firstName} ${argv.lastName}` : firstNameExists && !lastNameExists ? `${argv.firstName}` : 'World';

console.log('Hello ' + name + '!');

// if (firstNameExists && !lastNameExists) {
//   console.log('Hello ' + argv.firstName + '!');
// } else if (firstNameExists && lastNameExists) {
//   console.log('Hello ' + argv.firstName + ' ' + argv.lastName + '!');
// } else {
//   console.log('Hello World!');
// }


