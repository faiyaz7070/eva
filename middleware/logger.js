const winston = require('winston');
const { MongoDB } = require('winston-mongodb');

const logger = winston.createLogger({
  transports: [
    new MongoDB({
      db: 'mongodb+srv://faiyaz:dulraz@cluster0.tohzp.mongodb.net/ipapi?retryWrites=true&w=majority',
      options: {
        useUnifiedTopology: true
      }
    })
  ]
});
module.exports={logger}