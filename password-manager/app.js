console.log('Starting password mananger');
const storage = require('node-persist');
const crypto = require('crypto-js');
storage.initSync();

// Arguments passed in by user
const argv = require('yargs')
  .command('create', 'Creates the account', function(yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'Account name goes here',
        type: 'string'
      },
      username: {
        demand: true,
        alias: 'u',
        description: 'Username goes here',
        type: 'string'
      },
      password: {
        demand: true,
        alias: 'p',
        description: 'Password goes here',
        type: 'string'
      },
      masterPassword: {
        demand: true,
        alias: 'm',
        description: 'Master password',
        type: 'string'
      }
    }).help('help');
  })
  .help('help')
  .command('get', 'Gets the account', function(yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'Account name goes here',
        type: 'string'
      },
      masterPassword: {
        demand: true,
        alias: 'm',
        description: 'Master password',
        type: 'string'
      }
    }).help('help');
  })
  .help('help')
  .argv;
const command = argv._[0];

const getAccounts = (masterPassword) => {
  const encryptedAccounts = storage.getItemSync('accounts');
  let accounts = [];

  if (typeof accounts !== 'undefined') {
    const accountsBytes = crypto.AES.decrypt(encryptedAccounts, masterPassword);
    accounts = JSON.parse(accountsBytes.toString(crypto.enc.Utf8));
  }

  return accounts;
}

const saveAccounts = (account, masterPassword) => {
  Object.keys(account).map( field => {
    if (typeof account[field] === 'undefined') {
      console.log('The ' + field + ' field is undefined');
    }
  });


  const accountsObjString = JSON.stringify(accounts);
  const encryptedAccounts = crypto.AES.encrypt(accountsObjString, masterPassword).toString();

  storage.setItemSync('accounts', encryptedAccounts);
}

const createAccount = (account, masterPassword) => {
  saveAccounts(account, masterPassword);
  console.log('Account created!');
  console.log(account);
}

const getAccount = (accountName, masterPassword) => {
  const accounts = getAccounts(masterPassword);
  let matchedAccount = undefined;

  accounts.map(account=> {
    if (account.name === accountName) {
      matchedAccount = account;
    }
  });

  if (matchedAccount) {
    console.log('Account found');
    console.log(matchedAccount);
  } else{
    console.log('There is no account by that name');
  }

  return matchedAccount;
}

switch(command) {
  case 'create':
    try {
      createAccount({
        name: argv.name,
        username: argv.username,
        password: argv.password
      }, argv.masterPassword);
    } 
    catch (e) {
      console.log('Something went wrong');
    }
    break;
  case 'get':
      try {
        getAccount(argv.name, argv.masterPassword);
      } 
      catch (e) {
        console.log('Something went wrong');
      }
    break;
}
