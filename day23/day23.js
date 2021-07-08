const getCups = (cups, index, amount) => {
  const tempCups = [];
  for(let i = 1; i <= amount; i++) {
    if(index + 1 < cups.length) {
      tempCups.push(cups.splice(index + 1, 1));
    } else {
      tempCups.push(cups.splice(0, 1));
    }
  }

  return tempCups.flat();
}

export const cupGame = async (inputString, moves) => {
  let cups = inputString.split('').map(num => +num);
  let currentCupIndex = 0;
  for(let i = 0; i < moves; i++) {
    console.log(`round ${i}`);
    console.log(cups);
    console.log(`current ${currentCupIndex}`);
    let currentCup = cups[currentCupIndex];
    console.log(`cur ${currentCup}`);
    let step1 =  getCups(cups, currentCupIndex, 3);
    console.log(`picked ${step1}`);
    let noDestCup = true;
    let destCup = currentCup;
    let destCupIndex;
    while(noDestCup) {
      destCup = destCup - 1 === -1 ? 9 : destCup - 1;
      destCupIndex = cups.indexOf(destCup);
      noDestCup = destCupIndex === -1;
    } 
    console.log(`dest: ${cups[destCupIndex]}`);
    console.log(destCupIndex);
    cups.splice(destCupIndex + 1, 0, ...step1);
    currentCupIndex = cups.indexOf(currentCup);
    currentCupIndex = currentCupIndex === (cups.length - 1) ? 0 : currentCupIndex + 1;
  }

  let findOne = cups.indexOf(1);
  cups.splice(findOne, 1);
  let firstCups = cups.splice(findOne, cups.length - findOne);
  return firstCups.concat(cups).join('');
}

export const cupGame2 = async (inputString) => {
  let cups = inputString.split('').map(num => +num);
  for(let i = cups.length + 1; i < 1000000; i++) {
    cups.push(i);
  }
  let currentCupIndex = 0;
  for(let i = 0; i < 10000000; i++) {
    console.log(i);
    let currentCup = cups[currentCupIndex];
    let step1 =  getCups(cups, currentCupIndex, 3);
    let noDestCup = true;
    let destCup = currentCup;
    let destCupIndex;
    while(noDestCup) {
      destCup = destCup - 1 === -1 ? 9 : destCup - 1;
      destCupIndex = cups.indexOf(destCup);
      noDestCup = destCupIndex === -1;
    } 
    cups.splice(destCupIndex + 1, 0, ...step1);
    currentCupIndex = cups.indexOf(currentCup);
    currentCupIndex = currentCupIndex === (cups.length - 1) ? 0 : currentCupIndex + 1;
  }

  let findOne = cups.indexOf(1);
  console.log(findOne);
  console.log(cups[findOne+1]);
  console.log(cups[findOne+2]);
  console.log(cups[0]);
  console.log(cups[1]);
  return cups[findOne+1] * cups[findOne+2]; 
}