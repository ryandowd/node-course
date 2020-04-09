// setTimeout(() => {
//   console.log('1');
// }, 2000);
// setTimeout(() => {
//   console.log('3');
// }, 1000);
// console.log('2');


const printIn2Seconds = message => {
  setTimeout(() => {
    console.log(message);
  }, 2000);
}

printIn2Seconds('Hello Async');
