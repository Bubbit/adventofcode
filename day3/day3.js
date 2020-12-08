const { readInputFile } = require('./../util.js');

const takeSteps = (stepX, stepY, map) => {
  let trees = 0;
  let x = 0;
  let y = 0;
  const targetY = map[0].length;
  const limitX = map[0][0].length;
  while(y !== targetY - 1) {
    x = (x + stepX) % limitX;
    y += stepY;
    if(map[0][y][x] === '#') {
      trees++;
    };
  }
  return trees;
}

const createMap = (input) => {
  const map = [];
  map.push(input.map(row => row.split('')))

  return map;
}

export const countTrees = async (input) => {
  const inputArray = await readInputFile(input);
  const map = createMap(inputArray);
  const trees = takeSteps(3, 1, map);
  return trees;
}

export const countTreesMultiple = async (input) => {
  const inputArray = await readInputFile(input);
  const map = createMap(inputArray);
  const trees1 = takeSteps(1, 1, map);
  const trees2 = takeSteps(3, 1, map);
  const trees3 = takeSteps(5, 1, map);
  const trees4 = takeSteps(7, 1, map);
  const trees5 = takeSteps(1, 2, map);
  const trees = trees1 * trees2 * trees3 * trees4 * trees5;
  return trees;
}