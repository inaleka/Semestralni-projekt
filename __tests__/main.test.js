const { submitHandler, getGeo, getWeather, renderWeatherData } = require('../js/main');

describe('Testing main.js', () => {
  let form, input;

  beforeEach(() => {
    document.body.innerHTML = `
      <form id="form">
        <input class="form__input" />
      </form>
      <div class="weather__info none"></div>
      <div class="weather__details none"></div>
      <div class="weather__temp"></div>
      <div class="weather__city"></div>
      <div id="humidity"></div>
      <div id="speed"></div>
      <img class="weather__img" />
    `;
    
    form = document.querySelector('#form');
    input = document.querySelector('.form__input');
    form.onsubmit = submitHandler;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('renderWeatherData should be a function', () => {
    expect(typeof renderWeatherData).toBe('function');
  });
});