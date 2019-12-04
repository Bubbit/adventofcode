const getWireCoordinates = (wireDirections) => {
  const coordinates = [];
  let currentX = 0;
  let currentY = 0;
  let totalSteps = 0;

  const separateDirections = wireDirections.split(',');
  separateDirections.forEach((command) => {
    const direction = command[0];
    const steps = +command.substring(1);
    for(let i = 0; i < steps; i++) {
      switch(direction) {
        case "R":
          coordinates.push([++currentX, currentY, ++totalSteps]);
          break;
        case "U":
          coordinates.push([currentX, ++currentY, ++totalSteps]);
          break;
        case "L":
          coordinates.push([--currentX, currentY, ++totalSteps]);
          break;
        case "D":
          coordinates.push([currentX, --currentY, ++totalSteps]);
          break;
        default:
          console.log('Unknown direction');
      }
    }
  });

  return coordinates;
}

export const calculateShortestDistance = (wire1, wire2) => {
  const distances = [];
  const wire1Coords = getWireCoordinates(wire1);
  const wire2Coords = getWireCoordinates(wire2);

  wire1Coords.forEach((coordsOne) => {
    const match = wire2Coords.find((coords) => {
      return coords[0] === coordsOne[0] && coords[1] === coordsOne[1];
    });

    if(match) {
      distances.push(Math.abs(match[0]) + Math.abs(match[1]));
    }
  });

  return distances.sort((a, b) => a - b)[0];
}

export const calculateLeastSteps = (wire1, wire2) => {
  const stepsTaken = [];
  const wire1Coords = getWireCoordinates(wire1);
  const wire2Coords = getWireCoordinates(wire2);

  wire1Coords.forEach((coordsOne) => {
    const match = wire2Coords.find((coords) => {
      return coords[0] === coordsOne[0] && coords[1] === coordsOne[1];
    });

    if(match) {
      stepsTaken.push(match[2] + coordsOne[2]);
    }
  });

  return stepsTaken.sort((a, b) => a - b)[0];
}
