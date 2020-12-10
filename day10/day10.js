const { readInputFile } = require('./../util.js');

export const countAdapterChain = async (inputFile) => {
  const input = await readInputFile(inputFile);
  const inputArray = input.map(num => Number(num)).sort((a, b) => a - b);
  let ones = 0;
  let threes = 0;
  let lastAdapter = 0;

  inputArray.forEach(element => {
    const diff = element - lastAdapter;
    if(diff === 1) {
      ones++;
    } else if(diff === 3 ) {
      threes++;
    }
    lastAdapter = element;
  });

  return ones * (threes + 1);
}

export const countAdapterChains = async (inputFile) => {
  const input = await readInputFile(inputFile);
  const inputArray = input.map(num => Number(num)).sort((a, b) => a - b);
  const valueOfLastAdapter = inputArray[inputArray.length - 1] + 3;
  inputArray.unshift(0);
  inputArray.push(valueOfLastAdapter);
  const numWays = Object.fromEntries(inputArray.map((j) => [j, 0]));
  const adapters = [...inputArray];

  numWays[adapters[0]] = 1;

  adapters.forEach((joltage) => {
    const possibleJumps = inputArray.filter(
      (jump) => jump > joltage && jump - joltage <= 3,
    );

    possibleJumps.forEach(jump => {
      numWays[jump] += numWays[joltage];
    });
  });

  return numWays[valueOfLastAdapter];
}