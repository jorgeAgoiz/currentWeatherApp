const axios = require('axios');//axios library to connect with API

//Function that create an instance, get petition of API, and return the result to app.js
const getWeather = async (cityW, countryW) => {

    const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather',
    params: {
          q: cityW+','+countryW,
          appid: /* ' YOURAPIKEY ' */,
          units: "metric"
    }
    });

    const result = await instance.get();

    return result.data;
};

module.exports = {
    getWeather
}