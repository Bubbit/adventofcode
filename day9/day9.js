const { readInputFile } = require('./../util.js');

const findInvalid = (entries, preamble) => {
  let notFound = true;
  while(notFound) {
    const foundNumber = preamble.some(number => {
      return preamble.some(entry => {
        return number + entry === entries[0]
      });
    }); 
    if(!foundNumber) {
      notFound = false;
      return entries[0];
    }
    preamble.shift();
    preamble.push(entries.shift());
  }
}

const bruteForceList = (list, invalid) => {
  let notFound = true;
  let i = 0, j = 0;
  let number = 0;
  let foundList = [];
  while(notFound) {
    number += list[i];
    if(number === invalid) {
      foundList.push(list[i]);
      const min = Math.min( ...foundList ),
            max = Math.max( ...foundList );
      notFound = false;
      return min + max;
    } else if (number > invalid) {
      foundList = [];
      number = 0;
      j++;
      i = j;
    } else {
      foundList.push(list[i]);
      i++;
    }
  }
} 

export const XMASdecoding = async (inputFile, preambleSize, contiguous) => {
  let entries = await readInputFile(inputFile);
  entries = entries.map(entry => Number(entry)); 
  const preamble = entries.splice(0, preambleSize);

  if(contiguous) {
    const invalid = findInvalid(entries, preamble);
    let cleanEntries = await readInputFile(inputFile);
    cleanEntries = cleanEntries.map(entry => Number(entry)); 
    return bruteForceList(cleanEntries, invalid);
  }
  return findInvalid(entries, preamble);
}
