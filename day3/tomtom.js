export const directions = (input) => {
  let grid = Array(10000).fill(0).map(x => Array(10000).fill(0));
  let positionX = 2500, positionY = 2500;
  let total = 1;
  grid[positionX][positionY] = 1;
  input.split('').forEach((direction) => {
    switch (direction) {
      case '>':
        positionX++;
        break;
      case '^':
        positionY++;
        break;
      case '<':
        positionX--;
        break;
      case 'v':
        positionY--;
    }
    total += grid[positionX][positionY] === 1 ? 0 : 1;
    grid[positionX][positionY] = 1;
  });

  return total;
}

export const directionsRoboSanta = (input) => {
  let grid = Array(10000).fill(0).map(x => Array(10000).fill(0));
  let positionX = 2500, positionY = 2500;
  let positionXRobo = 2500, positionYRobo = 2500;
  let total = 1;
  let roboTurn = false;
  grid[positionX][positionY] = 1;
  input.split('').forEach((direction) => {
    switch (direction) {
      case '>':
        roboTurn ? positionXRobo++ : positionX++;
        break;
      case '^':
        roboTurn ? positionYRobo++ : positionY++;
        break;
      case '<':
        roboTurn ? positionXRobo-- : positionX--;
        break;
      case 'v':
        roboTurn ? positionYRobo-- : positionY--;
    }
    total += roboTurn ? (grid[positionXRobo][positionYRobo] === 1 ? 0 : 1) : (grid[positionX][positionY] === 1 ? 0 : 1);
    grid[positionX][positionY] = 1;
    grid[positionXRobo][positionYRobo] = 1;
    roboTurn = !roboTurn;
  });

  return total;
}