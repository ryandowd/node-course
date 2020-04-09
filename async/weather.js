const request = require('request');

module.exports.getWeather = (locationCity) => {
  const location = encodeURI(locationCity);
  const url = 'http://api.openweathasdermap.org/data/2.5/weather?appid=56fa634d11ad36aeba7ac8fe19578c15&q=' + location + '&units=metric';

  return new Promise((resolve, reject) => {
    request({
      url: url,
      json: true
    }, (error, response, body) => {
        if (!body.temp || !body.name) {
          reject('Cannot get weather');
        } else {
          const { main: { temp }, name }  = body;
          resolve('It\'s ' + temp + ' degrees celcius in ' + name);
        }
    });
  }).catch(error => {
    console.log(error);
  });
}


