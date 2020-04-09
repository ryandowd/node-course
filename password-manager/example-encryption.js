const crypto = require('crypto-js');
const stringMessage = 'I hid the chips under the couch';
const secretKey = '123abc';

// STRING

// Encrypt String
const encryptedStringMessage = crypto.AES.encrypt(stringMessage, secretKey);
console.log('Encrypted Message = ' + encryptedStringMessage);

// Decrypt String
const stringBytes = crypto.AES.decrypt(encryptedStringMessage, secretKey);
const decryptedStringMessage = stringBytes.toString(crypto.enc.Utf8);
console.log('Decrypted Message = ' + decryptedStringMessage);


// OBJECT

const obj = {
  name: 'Ryan',
  lname: 'Dowd'
};

// Encrypt Object
const encryptedObjMessage = crypto.AES.encrypt(JSON.stringify(obj), secretKey);
console.log('Encrypted Message = ' + encryptedObjMessage);

// // Decrypt Object
const objBytes = crypto.AES.decrypt(encryptedObjMessage, secretKey);
const decryptedObjMessage = JSON.parse(objBytes.toString(crypto.enc.Utf8));
console.log('Decrypted name = ' + decryptedObjMessage.name);

// ARRAY

const array = [obj, obj, obj, obj];

// Encrypt Array
const encryptedArrayMessage = crypto.AES.encrypt(JSON.stringify(array), secretKey);
console.log('Encrypted Message = ' + encryptedArrayMessage);
