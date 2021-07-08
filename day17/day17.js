const { readInputFile } = require('./../util.js');

const countMap = (x, y, z, map) => {
  let count = 0;
  for(let xCheck = x - 1 ; xCheck <= x + 1; xCheck++) {
    for(let yCheck = y - 1 ; yCheck <= y + 1; yCheck++) {
      for(let zCheck = z - 1 ; zCheck <= z + 1; zCheck++) {
        if(!(x === xCheck && y === yCheck && z === zCheck) && map[`${xCheck}_${yCheck}_${zCheck}`]) {
          count++;
        }
      }
    }
  }
  return count;
}

export const gameOfCubes = async (inputFile, cycles) => {
  let map = [];
  const input = await readInputFile(inputFile);
  input.forEach((row, y) => {
    row.split('').forEach((col, x) => {
      if(col === '#') {
        map[`${x}_${y}_0`] = col;
      }
    });
  });

  // Cycle
  let xStart = 0;
  let yStart = 0;
  let zStart = 0;

  let xEnd = input[0].length;
  let yEnd = input.length;
  let zEnd = 1;
  for(let i = 0; i < cycles; i++) {
    xStart--;
    yStart--;
    zStart--;
    xEnd++;
    yEnd++;
    zEnd++;
    let newMap = [];
    for(let x = xStart; x < xEnd; x++) {
      for(let y = yStart; y < yEnd; y++) {
        for(let z = zStart; z < zEnd; z++) {
          let count = countMap(x, y, z, map);
          if(map[`${x}_${y}_${z}`]) {
            if(count === 2 || count === 3) {
              newMap[`${x}_${y}_${z}`] = '#';
            }
          } else {
            if(count === 3) {
              newMap[`${x}_${y}_${z}`] = '#';
            }
          }
        }
      }
    }
    map = newMap;
  }

  return Object.keys(map).length;
}

const countMap2 = (x, y, z, w, map) => {
  let count = 0;
  for(let xCheck = x - 1 ; xCheck <= x + 1; xCheck++) {
    for(let yCheck = y - 1 ; yCheck <= y + 1; yCheck++) {
      for(let zCheck = z - 1 ; zCheck <= z + 1; zCheck++) {
        for(let wCheck = w - 1 ; wCheck <= w + 1; wCheck++) {
          if(!(x === xCheck && y === yCheck && z === zCheck && w === wCheck) && map[`${xCheck}_${yCheck}_${zCheck}_${wCheck}`]) {
            count++;
          }
        }
      }
    }
  }
  return count;
}

export const gameOfCubes2 = async (inputFile, cycles) => {
  let map = [];
  const input = await readInputFile(inputFile);
  input.forEach((row, y) => {
    row.split('').forEach((col, x) => {
      if(col === '#') {
        map[`${x}_${y}_0_0`] = col;
      }
    });
  });

  // Cycle
  let xStart = 0;
  let yStart = 0;
  let zStart = 0;
  let wStart = 0;

  let xEnd = input[0].length;
  let yEnd = input.length;
  let zEnd = 1;
  let wEnd = 1;
  for(let i = 0; i < cycles; i++) {
    xStart--;
    yStart--;
    zStart--;
    xEnd++;
    yEnd++;
    zEnd++;
    wStart--;
    wEnd++;
    let newMap = [];
    for(let x = xStart; x < xEnd; x++) {
      for(let y = yStart; y < yEnd; y++) {
        for(let z = zStart; z < zEnd; z++) {
          for(let w = wStart; w < wEnd; w++) {
            let count = countMap2(x, y, z, w, map);
            if(map[`${x}_${y}_${z}_${w}`]) {
              if(count === 2 || count === 3) {
                newMap[`${x}_${y}_${z}_${w}`] = '#';
              }
            } else {
              if(count === 3) {
                newMap[`${x}_${y}_${z}_${w}`] = '#';
              }
            }
          }
        }
      }
    }
    map = newMap;
  }

  return Object.keys(map).length;
}