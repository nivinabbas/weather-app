const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/expense');
// mongoose.connect('mongodb://localhost/city', { useNewUrlParser: true });

const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: String,
  temperature: Number,
  condition: String,
  conditionIcon: String,
});

const City = mongoose.model('city', citySchema);

module.exports = City;
