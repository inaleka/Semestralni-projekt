const { submitHandler, getGeo, getWeather, renderWeatherData } = require('../js/main');
describe('Testing main.js', () => {
  let form;

  beforeEach(() => {
    // Создаем фиктивный элемент формы перед каждым тестом
    form = document.createElement('form');
    form.id = 'form'; // Установите правильный id
    // Присваиваем фиктивный элемент формы к глобальной переменной document
    document.body.appendChild(form);
  });

  afterEach(() => {
    // После каждого теста удаляем созданный фиктивный элемент формы
    document.body.removeChild(form);
  });

  test('getGeo should return an array', async () => {
    const data = await getGeo('London');
    expect(Array.isArray(data)).toBe(true);
  });

  test('getWeather should return an object', async () => {
    const data = await getWeather(51.5074, 0.1278); 
    expect(typeof data).toBe('object');
  });

  test('renderWeatherData should be a function', () => {
    expect(typeof renderWeatherData).toBe('function');
  });
});