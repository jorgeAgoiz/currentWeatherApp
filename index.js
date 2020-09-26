const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const place = require('./utils/place');
let cityResult = {};

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'hbs');

// obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
const publicPath = path.resolve(__dirname, 'views');//path.join(__dirname, 'public');
// Para que los archivos estaticos queden disponibles.
app.use(express.static(publicPath));
 
app.get('/', (req, res) => {
    res.render('home');
});

app.post('/', (req, res) => {

  const { city, country } = req.body;

  const cityW = city;
  const countryW = country;

place.getWeather(cityW, countryW)
      .then( resp => {
          cityResult = resp;
          res.redirect('http://localhost:3000/result');
      })
      .catch( err => {
        console.log(err);
        res.redirect('http://localhost:3000');
      })
});

app.get('/result', (req, res) => {
  res.render('result', { 
    cityName: cityResult.name,
    countryName: cityResult.sys.country,
    long: cityResult.coord.lon,
    lat: cityResult.coord.lat,
    weatherM: cityResult.weather[0].main,
    weatherD: cityResult.weather[0].description,//From here
    currentTemp: cityResult.main.temp,
    feelTemp: cityResult.main.feels_like,
    minTemp: cityResult.main.temp_min,
    maxTemp: cityResult.main.temp_max,
    humidity: cityResult.main.humidity,
    pressure: cityResult.main.pressure,
    windSpeed: cityResult.wind.speed
  });
  console.log(cityResult);
})



app.listen(3000, () => {
    console.log('Listen in port 3000 ...');
});