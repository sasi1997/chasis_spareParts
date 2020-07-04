const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/chasis";
const dbConfig = mongoose.connect(url, { useNewUrlParser: true });
dbConfig.then((db) => {
      console.log('Connected correctly to server!');
}, (err) => {
      console.log(err);
});

module.exports = dbConfig;