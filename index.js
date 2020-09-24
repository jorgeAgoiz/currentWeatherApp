const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const place = require('./utils/place');

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
  const cityW = req.body.city;
  const countryW = req.body.country;


});


app.listen(3000, () => {
    console.log('Listen in port 3000 ...');
});