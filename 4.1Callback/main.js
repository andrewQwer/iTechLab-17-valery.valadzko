var getCity = function (callback) {
  var cityname = document.getElementById('city').value;
  let location = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + cityname + '") and u="c"';
  let url = 'https://query.yahooapis.com/v1/public/yql?q=' + location + '&format=json';
  return callback(url);
};

var requestWeather = function(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
      let weatherObj = JSON.parse(xhr.responseText);
      console.log('Weather object: ', weatherObj);
      return callback(weatherObj);
    }
  };
};

var setWeather = function (weatherObj) {
  let weather = document.getElementById('weather');
  weather.innerHTML = weatherObj.query.results.channel.item.condition.temp;
};

var requestCurrency = function(callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDBYN%22%2C%20%22USDEUR%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=');
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
      let currencyObj = JSON.parse(xhr.responseText);
      console.log('Currency object: ', currencyObj);
      return callback(currencyObj);
    }
  };
};

var setCurrency = function (currencyObj) {
  let BYN = document.getElementById('BYN');
  let EUR = document.getElementById('EUR');
  BYN.innerHTML = currencyObj.query.results.rate['0'].Rate;
  EUR.innerHTML = currencyObj.query.results.rate['1'].Rate;
};

var runWeather = function() {
  getCity(function (url) {
    requestWeather(url, function (weatherObj) {
      setWeather(weatherObj);
    });
  });
}

var runCurrency = function() {
  requestCurrency(function (currencyObj) {
    setCurrency(currencyObj);
  });
};


document.getElementById('update_weather').addEventListener('click', runWeather);
document.getElementById('update_currency').addEventListener('click', runCurrency);