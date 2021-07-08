export const playMemoryGame = (input, rounds) => {
  let inputSplit = input.split(',').map(num => +num);
  let lastNumber = inputSplit[inputSplit.length - 1];
  const lastSpoken = new Array(rounds);
  inputSplit.forEach((value, i) => lastSpoken[value] = i + 1);

  for (let i = inputSplit.length; i < rounds; i++) {
    const next = lastSpoken[lastNumber] ? i - lastSpoken[lastNumber] : 0;
    lastSpoken[lastNumber] = i;
    lastNumber = next;
  }
  return lastNum;
}