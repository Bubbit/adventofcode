const { readInputFile } = require('./../util.js');

export const expenses2020 = (input) => {
  let found = 0;
  input.forEach(number => {
    const foundNumber = input.find(entry => number + entry === 2020);
    if(foundNumber) {
      found = foundNumber * number;
    }
  });
  return found;
}

export const expenses20203 = (input) => {
  let found = 0;
  input.forEach(number => {
    input.forEach(number2 => {
      const foundNumber = input.find(entry => number + entry + number2 === 2020);
      if(foundNumber) {
        found = foundNumber * number * number2;
      }
    })
    
  });
  return found;
}

export const readExpensesFile2 = async (input) => {
  const expenses = await readInputFile(input);
  return expenses20203(expenses.map(entry => Number(entry)));
}
export const readExpensesFile = async (input) => {
  const expenses = await readInputFile(input);
  return expenses2020(expenses.map(entry => Number(entry)));
}