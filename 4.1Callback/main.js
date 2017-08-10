let weatherDom = $('#weather');
let bynDom = $('#BYN');
let eurDom = $('#EUR');
let city = $('#city');
let updateWeather = $('#update_weather');
let updateCurrency = $('#update_currency');

class Yahoo {
  constructor (type) {
    this.type = type;
  }
  getUrlFromCity (callback) {
    switch (this.type) {
      case 'Weather': {
        var cityname = city.val();
        let location = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + cityname + '") and u="c"';
        let url = 'https://query.yahooapis.com/v1/public/yql?q=' + location + '&format=json';
        return callback(url);
      }
      case 'Currency': {
        let url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22USDBYN%22%2C%20%22USDEUR%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=';
        return callback(url);
      }
      default: {
        alert('Error on get city');
        break;
      }
    }
  };

  requestJson (url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.status === 200 && xhr.readyState === 4) {
        let jsonObj = JSON.parse(xhr.responseText);
        console.log(this.type + ' jsonObject: ', jsonObj);
        return callback(jsonObj);
      }
    };
  };

  setDom (jsonObj) {
    switch (this.type) {
      case 'Weather': {
        weatherDom.text(jsonObj.query.results.channel.item.condition.temp);
        break;
      }
      case 'Currency': {
        bynDom.text(jsonObj.query.results.rate['0'].Rate);
        eurDom.text(jsonObj.query.results.rate['1'].Rate);
        break;
      }
      default: {
        alert('Error on set DOM');
        break;
      }
    }
  };

  runAsync () {
    self.getUrlFromCity(function (url) {
      self.requestJson(url, function (jsonObj) {
        self.setDom(jsonObj);
      });
    });
  }
}

let yahooWeather = new Yahoo('Weather');
let yahooCurrency = new Yahoo('Currency');

let runWeather = function() {
  yahooWeather.getUrlFromCity(function (url) {
    yahooWeather.requestJson(url, function (jsonObj) {
      yahooWeather.setDom(jsonObj);
    });
  });
};

let runCurrency = function() {
  yahooCurrency.getUrlFromCity(function (url) {
    yahooCurrency.requestJson(url, function (jsonObj) {
      yahooCurrency.setDom(jsonObj);
    });
  });
};

updateWeather.on('click', runWeather);
updateCurrency.on('click', runCurrency);

updateWeather.on('click', yahooWeather.runAsync);
updateCurrency.on('click', yahooCurrency.runAsync);