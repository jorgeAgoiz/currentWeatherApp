const axios = require('axios');//axios library to connect with API

//Function that create an instance, get petition of API, and return the result to app.js
const getWeather = async (cityW, countryW) => {

    const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather',
    params: {
          q: cityW+','+countryW,
          appid: 'a6333ec70f7a6bc969664507a51e8a18',
          units: "metric"
    }
    });

    const result = await instance.get();
    
    const currentTemp = result.data.main.temp;
    const currentHumidity = result.data.main.humidity;
    const nameCity = result.data.name;
    const country = result.data.sys.country;
    console.log(currentTemp, currentHumidity, nameCity, country);

    return { currentTemp, currentHumidity, nameCity, country};
};

getWeather("Bristol", "GB")
            .then(resp => {
                console.log(resp);
            });

module.exports = {
    getWeather
}