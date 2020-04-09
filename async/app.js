const weather = require('./weather.js');
const location = require('./location.js');

// Arguments passed in by user
const argv = require('yargs')
  .options({
    location: {
      demand: false,
      alias: 'l',
      description: 'The location goes here',
      type: 'string'
    } 
  })
  .help('help')
  .argv;

// const getWeatherByLocation = () => {
//   weather.getWeather(argv.location).then(currentWeather => {
//     console.log(currentWeather);
//   });
// }

// const getLocationByIp = () => {
//   location.getLocation(ipLocation => {
//     if (!ipLocation) {
//       console.log('Unable to guess location');
//       return;
//     } else {
//       weather.getWeather(ipLocation.city, currentWeather => {
//         console.log(currentWeather);
//       });  
//     }
//   });
// }

if ((argv.location && argv.location.length > 0) && typeof argv.location === 'string') {
  weather.getWeather(argv.location).then(currentWeather => {
    console.log(currentWeather);
  }).catch(error => {
    console.log(error);
  });
} else {
  location.getLocation().then(ipLocation => {
    return weather.getWeather(ipLocation.city);
  }).then(currentWeather => {
    console.log(currentWeather);
  }).catch(error => {
    console.log(error);
  });
}

