const mongoose = require('mongoose');
const conn = mongoose.createConnection(
  'mongodb://127.0.0.1:27017/movie',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
conn.on('open', () => {
  console.log('mongo');
})
conn.on('err', (err) => {
  console.log('err:' + err );
})

module.exports = conn;