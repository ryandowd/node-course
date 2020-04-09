// const doWork = (data, callback) => {
//   callback('callback done');
// }

// const doWorkPromise = data => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('everything worked');
//     }, 1000)
//     // reject({
//     //   error: 'Something bad happened'
//     // })
//   })
// }

// doWorkPromise('Some data').then(data => {
//   console.log(data);
// }, error => {
//   console.log(error);
// });


const request = require('request');

const getWeather = locationCity => {
  const location = encodeURI(locationCity);
  const url = 'http://api.openweathermap.org/data/2.5/weather?appid=56fa634d11ad36aeba7ac8fe19578c15&q=' + location + '&units=metric';
  return new Promise((resolve, reject) => {
    request({
      url: url,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject('Unable to fetch weather');
      } else if (body.cod === '404') {
        reject('City not found');
      } else {
        // console.log(JSON.stringify(body, null, 4));
        const { main: { temp }, name }  = body;
        resolve('It\'s ' + temp + ' degrees celcius in ' + name);
      }
    });
  });
}


getWeather('new york').then(currentWeather => {
  console.log(currentWeather);
}, error => {
  console.log(error);
});


