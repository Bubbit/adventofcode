const { readMultiLineInputFile } = require('./../util.js');

const countQuestions = (input) => {
  return input.reduce((amount, group) => {
    const noSpace = group.replace(/\s/g, '');
    const setOfGroup = new Set(noSpace.split(''));
    const array = Array.from(setOfGroup);
    return amount + array.length;    
  }, 0);
}

const countAllYesQuestions = (input) => {
  return input.reduce((amount, group) => {
    const people = group.split(' ');
    let baseLine = people[0].split('');
    people.forEach(person => {
      if(person !== '') {
        let removeChars = '';
        baseLine.forEach(character => {
          if(!person.includes(character)) {
            removeChars += character;
          }
        });
        removeChars.split('').forEach(character => {
          baseLine = baseLine.filter(entry => entry !== character);
        });
      } 
    });
    return amount + baseLine.length;    
  }, 0);
}

export const countAnswers = async (inputFile, combined) => {
  const rawData = await readMultiLineInputFile(inputFile);
  if(combined) {
    return countAllYesQuestions(rawData);
  } else {
    return countQuestions(rawData);
  }
}