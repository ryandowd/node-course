// const doWork = (shouldFail) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof shouldFail === 'boolean' && shouldFail) {
//         reject('error message!');
//       } else {
//         console.log('done!');
//         resolve();
//       }
//     }, 1000);
//   });
// }

// doWork().then(message => {
//   console.log(message);
//   return doWork(true);
// }).then(message => {
//   console.log(message);
// }).catch(error => {
//   console.log(error);
// })

const getLocation = () => {
  return new Promise((resolve, reject) => {
    resolve('London');
  });
}


const getWeather = location => {
  return new Promise((resolve, reject) => {
    resolve('The weather in ' + location);
  });
}

getLocation().then(location => {
  return getWeather(location);
}).then(message => {
  console.log(message);
}).catch(error => {
  console.log(error);
});
