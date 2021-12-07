const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const City = require('../model/City');
const urllib = require('urllib');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/expense');

mongoose.connect('mongodb://localhost/city', { useNewUrlParser: true });

let API_KEY = 'b35017ebf137421ec453d05614795211';

let city;
router.get('/city/:cityName', function (request, response) {
  let cityName = request.params.cityName;
  urllib.request(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&&units=metric&appid=${API_KEY}`,
  
    function (req, res) {
      let cityData = JSON.parse(res);

      city = new City({
        name: cityName,
        temperature: cityData.main.temp,
        conditionIcon: `http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`,
        condition: cityData.weather[0].main,
      });

      response.send(city);
    }
  );
});

router.get('/cities', function (request, response) {
  City.find({}, function (err, cities) {
    response.send(cities);
  });
});

router.post('/city', function (request, res) {
  let addCity = new City({
    name: request.body.name,
    temperature: request.body.temperature,
    condition: request.body.condition,
    conditionIcon: request.body.conditionIcon,
  });

  addCity.save().then((city) => {
  });
  res.send(addCity);
});

router.delete('/city/:cityName', function (request, response) {
  let cityName = request.params.cityName;
  
  City.findOneAndDelete({ name: cityName }, function (err, city) {

  });

  response.end();
});

module.exports = router;
