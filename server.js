const EventEmitter = require('events');

class Server extends EventEmitter{
  constructor(client){
    super();
   client.on('command', (input) => {
    console.log('server got: ' + input);
  });
 }
}

module.exports = (client) =>  new Server(client);
