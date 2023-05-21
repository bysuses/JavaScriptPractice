const fetch = require('node-fetch');

function processWeatherData(data) {
  const foundData = data.find((stationData) => {
    if (stationData.stacja === 'Gdańsk') return true;
    return false;
  });
  console.log(foundData);
}

fetch('https://danepubliczne.imgw.pl/api/data/synop')
  .then((r) => r.json())
  .then(processWeatherData);
