const readline = require('readline');
const fs = require('fs');

export const fuel1 = (input) => {
  return Math.floor(input / 3) - 2;
}

export const totalFuel1 = (inputFile) => {
  let total = 0;
  const readInterface = readline.createInterface({
    input: fs.createReadStream(inputFile),
    output: process.stdout,
    console: false
  });
  return new Promise((resolve, reject) => {
    readInterface.on('line', function (line) {
      total += fuel1(line);
    });
    readInterface.on('close', () => {
      resolve(total);
    });
  });
}

export const fuel2 = (input) => {
  let fuel = Math.floor(input / 3) - 2;
  if(fuel > 0) {
    const addFuel = fuel2(fuel); 
    fuel += addFuel > 0 ? addFuel : 0;
  }
  return fuel; 
}

export const totalFuel2 = (inputFile) => {
  let total = 0;
  const readInterface = readline.createInterface({
    input: fs.createReadStream(inputFile),
    output: process.stdout,
    console: false
  });
  return new Promise((resolve, reject) => {
    readInterface.on('line', function (line) {
      total += fuel2(line);
    });
    readInterface.on('close', () => {
      resolve(total);
    });
  });
}