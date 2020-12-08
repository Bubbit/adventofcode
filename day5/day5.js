const { readInputFile } = require('./../util.js');

export const binaryReduce = (input, max, charBot) => {
  let min = 0;
  for(let i = 0; i < input.length; i++) {
    let half = Math.ceil((max - min) / 2);
    if(input[i] === charBot) {
      max -= half;
    } else {
      min += half;
    }
  }

  return min;
}

export const findSeat = (input) => {
  let characters = input.split('');
  const row = binaryReduce(characters.splice(0, 7), 127, 'F');
  const column = binaryReduce(characters.splice(0, 3), 8, 'L');

  return row * 8 + column;
}

export const findHighestSeat = async (input) => {
  const inputArray = await readInputFile(input);
  const results = inputArray.map(pass => Number(findSeat(pass)));
  results.sort((a, b) => b - a);
  return results[0];
}

export const findOwnSeat = async (input) => {
  const inputArray = await readInputFile(input);
  const results = inputArray.map(pass => Number(findSeat(pass)));
  results.sort((a, b) => a - b);
  let notFound = true;
  let i = results[0];
  while(notFound) {
    if(results.some(seat => seat === i)) {
      i++;
    } else {
      notFound = false;
    };

  }
  return i;
}
