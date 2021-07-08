const { readInputFile } = require('./../util.js');

const checkValidity = (valueMap, value) => {
  let valid = false;
  for(let i in valueMap) {
    if(valueMap[i].some(row => row.bot <= value && value <= row.top)) {
      valid = true;
    }
  }

  return !valid;
}

export const invalidTickets = async (inputFile) => {
  const lines = await readInputFile(inputFile);
  let type = 'types';
  let errorRate = 0;
  let valueMap = [];
  lines.forEach(line => {
    if(type === 'types') {
      if(line === '') {
        type = 'your';
      } else {
        let splitOne = line.split(': ');
        let splitTwo = splitOne[1].split(' or ');
        let splitThree = splitTwo[0].split('-');
        let splitFour = splitTwo[1].split('-');
        const splitArray = [{
          bot: +splitThree[0],
          top: +splitThree[1]
        },{
          bot: +splitFour[0],
          top: +splitFour[1]
        }];
        valueMap[splitOne[0]] = splitArray;
      }
    } else if (type === 'your') {
      if(line === '') {
        type = 'nearby';
      } else {
      }
    } else {
      if(!line.startsWith('nearby')) {
        const split = line.split(',');
        errorRate += split.reduce((acc, value) => {
          if(checkValidity(valueMap, +value)) {
            return acc + +value;
          } else {
            return acc;
          }
        }, 0);
      }
    }
  });

  return errorRate;
}

export const findFields = async (inputFile) => {
  const lines = await readInputFile(inputFile);
  let type = 'types';
  let yourTicket = [];
  let valueMap = [];
  let validTickets = [];
  lines.forEach(line => {
    if(type === 'types') {
      if(line === '') {
        type = 'your';
      } else {
        let splitOne = line.split(': ');
        let splitTwo = splitOne[1].split(' or ');
        let splitThree = splitTwo[0].split('-');
        let splitFour = splitTwo[1].split('-');
        const splitArray = [{
          bot: +splitThree[0],
          top: +splitThree[1]
        },{
          bot: +splitFour[0],
          top: +splitFour[1]
        }];
        valueMap[splitOne[0]] = splitArray;
      }
    } else if (type === 'your') {
      if(line === '') {
        type = 'nearby';
      } else {
        yourTicket = line.split(',');
      }
    } else {
      if(!line.startsWith('nearby')) {
        const split = line.split(',');
        const errorRate = split.reduce((acc, value) => {
          if(checkValidity(valueMap, +value)) {
            if(value === '0') {
              return acc + 1;
            }
            return acc + +value;
          } else {
            if(value === '0') {
              return acc++;
            }
            return acc;
          }
        }, 0);
        if(split[0] === '898') {
          const errorRate = split.reduce((acc, value) => {
            console.log(value, checkValidity(valueMap, +value));
            if(checkValidity(valueMap, +value)) {
              if(value === '0') {
                return acc + 1;
              }
              return acc + +value;
            } else {
              if(value === '0') {
                return acc++;
              }
              return acc;
            }
          }, 0);
          console.log(split, errorRate, valueMap);
        }
        if(!errorRate) {
          validTickets.push(split);
        }
      }
    }
  });

  let possibilities = [];

  console.log(validTickets.length);
  for(let i in valueMap) {
    console.log(i);
    for(let j = 0; j < yourTicket.length; j++) {
      if(validTickets.every((ticket) => {
        return (valueMap[i][0].bot <= ticket[j] && ticket[j] <= valueMap[i][0].top) || (valueMap[i][1].bot <= ticket[j] && ticket[j] <= valueMap[i][1].top)}
        )) {
          if(possibilities[j]) {
            possibilities[j].push(i);
          } else {
            possibilities[j] = [i];
          }
      }
    }
  }

  while(possibilities.some(row => row.length > 1)) {
    for(let i in possibilities) {
      if(possibilities[i].length === 1) {
        const value = possibilities[i][0];
        for(let j in possibilities) {
          if(j !== i) {
            let findIndex = possibilities[j].findIndex(row => value === row);
            console.log(findIndex);
            if(findIndex !== -1) possibilities[j].splice(findIndex, 1);
          }
        }
      };
    }
  }

  let total = 1;
  for(let i in possibilities) { 
    if(possibilities[i][0].startsWith('departure')) {
      total = total * +yourTicket[i]
    }
  }

  return total;
}