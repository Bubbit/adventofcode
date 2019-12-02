const readline = require('readline');
const fs = require('fs');

const handleInput = (array, position) => {
  if(+array[position] === 99) {
    return array;
  } else if(+array[position] === 1) {
    array[array[position + 3]] = +array[array[position + 1]] + +array[array[position + 2]];
    return handleInput(array, position + 4);
  } else if(+array[position] === 2) {
    array[array[position + 3]] = array[array[position + 1]] * array[array[position + 2]];
    return handleInput(array, position + 4);
  } else {
    throw new Error(`Encountered unknown opcode ${array[position]} on ${position}`);
  }
};

export const intCode = (input) => {
  const inputArray = input.split(',');
  return handleInput(inputArray, 0).join(',');
}

export const findIntCodeForAnswer = (inputIntCode, answer) => {
  let noun, verb;
outsideLoop:
  for(noun = 0; noun < 1000; noun++) {
insideLoop:
    for(verb = 0; verb < 1000; verb++) {
      let curArray = inputIntCode.split(',');
      curArray[1] = noun;
      curArray[2] = verb;
      let curAnswer = handleInput(curArray, 0);
      if(curAnswer[0] === answer) {
        break outsideLoop;
      }
    }
  }

  return 100 * noun + verb;
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