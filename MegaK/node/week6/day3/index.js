const { readFile } = require('fs');

//callback
readFile('./index.js', 'utf-8', (error, data) => {
    if (error === null) console.log(data);
    else console.log(error);
})

//same done with promises
const { promisify } = require('util');
const promisifiedReadFile = promisify(readFile);

promisifiedReadFile('./index.js', 'utf-8')
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

//same async await
(async () => {
    try {
        const data = await promisifiedReadFile('./index.js', 'utf-8');
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
})();