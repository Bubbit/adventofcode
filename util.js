const readline = require('readline');
const fs = require('fs');

export const readInputFile = (input) => {
  const inputArray = [];
  const readInterface = readline.createInterface({
    input: fs.createReadStream(input),
    output: process.env.debug ? process.stdout : false,
    console: false
  });
  return new Promise((resolve, reject) => {
    readInterface.on('line', function (line) {
      inputArray.push(line);
    });
    readInterface.on('close', () => {
      resolve(inputArray);
    });
  });
}

export const readMultiLineInputFile = (input) => {
  const inputArray = [];
  let tempLine = '';
  const readInterface = readline.createInterface({
    input: fs.createReadStream(input),
    output: process.env.debug ? process.stdout : false,
    console: false
  });
  return new Promise((resolve, reject) => {
    readInterface.on('line', function (line) {
      if(line === '') {
        inputArray.push(tempLine);
        tempLine = '';
      } else {
        tempLine += line + ' ';
      }
    });
    readInterface.on('close', () => {
      inputArray.push(tempLine);
      resolve(inputArray);
    });
  });
}