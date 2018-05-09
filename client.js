const EventEmitter = require('events');
const readline = require ('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var client = new EventEmitter();

rl.on('line', (input) => {
  client.emit('command', input);
});

var help = () =>{
  client.emit('help');
}

const server = require('./server')(client);
module.exports = {help};
