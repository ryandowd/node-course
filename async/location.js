const request = require('request');
const url = 'http://ipinfo.io?token=d980e5e198205c';

module.exports.getLocation = () => {
  return new Promise((resolve, reject) => {
    request({
      url: url,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}
