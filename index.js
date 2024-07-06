const latitude = "56.3595";
const longitude = "44.0596";
const weatherCode = {
  0: "Солнечно",
  1: "В основном ясно",
  2: "Переменная облачность",
  3: "Пасмурно",
  95: "Гроза",
  96: "Гроза с небольшим градом",
  99: "Гроза с сильным градом",
};

const background = {
  0: "./img/sun.png",
  1: "./img/rain.png",
  2: "./img/rain.png",
  3: "./img/rain.png",
  95: "./img/rain.png",
  96: "./img/rain.png",
  99: "./img/rain.png",
};

const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=56.3595&longitude=44.0596&current=temperature_2m,weather_code&hourly=temperature_2m,weather_code`;

const temp = fetch(apiUrl);
const wrapper = document.querySelector(".wrapper");
const degrees = document.querySelector(".degrees");
const type = document.querySelector(".type");

temp
  .then((res) => {
    const result = res.json();
    return result;
  })
  .then((res) => {
    const { current, current_units } = res;

    degrees.innerHTML = `${current.temperature_2m} ${current_units.temperature_2m}`;
    type.innerHTML = weatherCode[current.weather_code || 0];
    wrapper.style.backgroundImage = `url(${background[current.weather_code] || 0})`;
  });
