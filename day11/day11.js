const { readInputFile } = require('./../util.js');

const roundOfSeats = (map) => {
  let changes = 0;
  let newMap = JSON.parse(JSON.stringify(map));

  map.forEach((row, rowI) => {
    row.forEach((column, columnJ) => {
      if(column === 'L') {
        if(map[rowI][columnJ - 1] !== '#' &&
           map[rowI][columnJ + 1] !== '#' &&
           map[rowI - 1][columnJ] !== '#' &&
           map[rowI + 1][columnJ] !== '#' &&
           map[rowI - 1][columnJ - 1] !== '#' &&
           map[rowI + 1][columnJ - 1] !== '#' &&
           map[rowI - 1][columnJ + 1] !== '#' &&
           map[rowI + 1][columnJ + 1] !== '#') {
             changes++;
             newMap[rowI][columnJ] = '#';
           }
      } else if(column === '#') {
        let seats = 0;
        seats += map[rowI][columnJ - 1] !== '#' ? 0 : 1;
        seats += map[rowI][columnJ + 1] !== '#' ? 0 : 1;
        seats += map[rowI - 1][columnJ] !== '#' ? 0 : 1;
        seats += map[rowI + 1][columnJ] !== '#' ? 0 : 1;
        seats += map[rowI - 1][columnJ - 1] !== '#' ? 0 : 1;
        seats += map[rowI + 1][columnJ - 1] !== '#' ? 0 : 1;
        seats += map[rowI - 1][columnJ + 1] !== '#' ? 0 : 1;
        seats += map[rowI + 1][columnJ + 1] !== '#' ? 0 : 1;
        if(seats > 3) {
          changes++;
          newMap[rowI][columnJ] = 'L';
        }
      }
    })
  })
  return { newMap, changes }
}

const findSeat = (map, x, y, xInc, yInc) => {
  if(map[x][y] !== '.') {
    return map[x][y];
  } else if(x + xInc < 0 || y + yInc < 0 || x + xInc === map.length || y + yInc === map[0].length) {
    return '.';
  } else {
    return findSeat(map, x + xInc, y + yInc, xInc, yInc);
  }
}

const countViewableSeats = (map, x, y) => {
  let seats = 0;

  seats += findSeat(map, x, y - 1, 0, -1) === '#' ? 1 : 0;
  seats += findSeat(map, x, y + 1, 0, 1) === '#' ? 1 : 0;
  seats += findSeat(map, x - 1, y, -1, 0) === '#' ? 1 : 0;
  seats += findSeat(map, x + 1, y, 1, 0) === '#' ? 1 : 0;
  seats += findSeat(map, x - 1, y - 1, -1, -1) === '#' ? 1 : 0;
  seats += findSeat(map, x + 1, y - 1, 1, -1) === '#' ? 1 : 0;
  seats += findSeat(map, x - 1, y + 1, -1, 1) === '#' ? 1 : 0;
  seats += findSeat(map, x + 1, y + 1, 1, 1) === '#' ? 1 : 0;
  
  return seats;
}

const roundOfSeats2 = (map) => {
  let changes = 0;
  let newMap = JSON.parse(JSON.stringify(map));

  map.forEach((row, rowI) => {
    row.forEach((column, columnJ) => {
      if(column === 'L') {
        if(!countViewableSeats(map, rowI, columnJ)) {
          changes++;
          newMap[rowI][columnJ] = '#';
        }
      } else if(column === '#') {
        if(countViewableSeats(map, rowI, columnJ) > 4) {
          changes++;
          newMap[rowI][columnJ] = 'L';
        }
      }
    })
  })
  return { newMap, changes }
}

const countSeats = (map) => {
  let occupiedSeats = 0;
  map.forEach((row) => {
    row.forEach((column) => {
      if(column === '#') {
        occupiedSeats++;
      }
    })
  });
  return occupiedSeats;
}

const createMap = async (inputFile) => {
  const inputArray = await readInputFile(inputFile);
  const map = inputArray.map(row => {
    const newRow = row.split('');
    newRow.push('.');
    newRow.unshift('.');
    return newRow;
  });
  map.unshift(Array.from(Array(map[0].length)).fill('.'));
  map.push(Array.from(Array(map[0].length)).fill('.'));
  return map;
}

export const gameOfSeats = async (inputFile) => {
  let map = await createMap(inputFile);
  let notFound = true;
  while(notFound) {
    const { newMap, changes } = roundOfSeats(map);
    if(!changes) {
      notFound = false;
      return countSeats(newMap);
    } else {
      map = newMap;
    }
  }
}

export const gameOfSeats2 = async (inputFile) => {
  let map = await createMap(inputFile);
  let notFound = true;
  while(notFound) {
    const { newMap, changes } = roundOfSeats2(map);
    if(!changes) {
      notFound = false;
      return countSeats(newMap);
    } else {
      map = newMap;
      console.log(changes);
    }
  }
}