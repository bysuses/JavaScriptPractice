/* eslint no-console: ["error", { allow: ["log"] }] */
const fetch = require('node-fetch');
const { writeFile, appendFile } = require('fs').promises;
const { normalize, resolve } = require('path');

// station name searched by user
const STATION_NAME = process.argv[2];

// prevents unwarranted access to the filesystem
function safeJoin(base, target) {
  const targetPath = `.${normalize(`/${target}`)}`;
  return resolve(base, targetPath);
}

// searches city on a given name in the Array
function returnGivenCityData(data) {
  const foundData = data.find((stationData) => {
    if (stationData.stacja === STATION_NAME) return true;
    return false;
  });
  if (!foundData) {
    throw new Error('Nie znaleziono stacji o podanej nazwie');
  }
  return foundData;
}

// displays searched data in console
const saveToConsole = (foundData) => {
  console.log(`
  stacja: ${foundData.stacja}
  temperatura: ${foundData.temperatura} °C
  ciśnienie atmosferyczne: ${foundData.cisnienie} hPa
  wilgotność powietrza: ${foundData.wilgotnosc_wzgledna} %\n`);
};

// saves given info into a file
async function saveDataToFile(filename, data) {
  await writeFile(filename, `
  stacja: ${data.stacja}
  temperatura: ${data.temperatura} °C
  ciśnienie atmosferyczne: ${data.cisnienie} hPa
  wilgotność powietrza: ${data.wilgotnosc_wzgledna} %\n`);
  const dateTime = new Date().toLocaleString();
  await appendFile(filename, dateTime);
}

// creates a valid filename
const createFileName = (city) => safeJoin('./data/', `${city}.txt`);

// searches for the hottest city in poland and returns its data
function returnHottestCityData(data) {
  const hotData = data.reduce(
    (acc, current) => ((Number(acc.temperatura) > Number(current.temperatura)) ? acc : current),
    { temperatura: -123 },
  );
  if (!hotData) {
    throw new Error('Nie znaleziono najcieplejszego miasta');
  }
  return hotData;
}

// main function of the program
(async () => {
  const weatherData = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
  const decodedWeatherData = await weatherData.json();
  try {
    const givenCityData = returnGivenCityData(decodedWeatherData);
    const hottestCityData = returnHottestCityData(decodedWeatherData);
    saveToConsole(givenCityData);
    await saveDataToFile(createFileName(STATION_NAME), givenCityData);
    await saveDataToFile(createFileName('HottestCity'), hottestCityData);
  } catch (err) {
    console.log(err.message);
  }
})();
