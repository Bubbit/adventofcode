const { readInputFile } = require('./../util.js');

export const checkEarliestBus = async (inputFile) => {
  const busList = await readInputFile(inputFile);

  const waitingTime = +busList[0];
  const busses = busList[1].split(',').filter(bus => bus !== 'x').map(bus => { return { id: +bus, time: 0} });

  busses.map(bus => {
    bus.time = bus.id - (waitingTime % bus.id)
  });

  const sortedBusses = busses.sort((busA, busB) => busA.time - busB.time);
  return sortedBusses[0].time * sortedBusses[0].id;
}

export const busContest = async (inputFile) => {
  const busList = await readInputFile(inputFile);

  const busses = busList[1].split(',').map((v, i) => (v === "x" ? false : { modulo: +v, remainder: (v - (i % v)) % v }))
  .filter(Boolean);

  busses.sort(({ modulo: a }, { modulo: b }) => b - a);

  let val = 0;
  let step = 1;
  
  for (let pos = 0; pos < busses.length; pos++) {
    while (val % busses[pos].modulo !== busses[pos].remainder) val += step;
    step *= busses[pos].modulo;
  }

  return val;
}