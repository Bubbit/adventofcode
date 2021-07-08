const { readInputFile } = require('./../util.js');


export const manhattanDistanceWayPoint = async (inputFile) => {
  let eShip = 0;
  let nShip = 0;
  let eWaypoint = 10;
  let nWaypoint = 1;
  let f = 'E';
  
  const orders = await readInputFile(inputFile);
  orders.forEach(order => {
    const distance = +order.substring(1);
    const orderCall = order[0];
    switch(orderCall) {
      case 'N':
        nWaypoint += distance;
        break;
      case 'E':
        eWaypoint += distance;
        break;
      case 'S':
        nWaypoint -= distance;
        break;
      case 'W':
        eWaypoint -= distance;
        break;
      case 'F':
        eShip += (eWaypoint * distance);
        nShip += (nWaypoint * distance);
        break;
      case 'R':
        if (distance === 90) {
          let e = eWaypoint;
          eWaypoint = nWaypoint;
          nWaypoint = -e;
        } else if (distance === 180) {
          eWaypoint = -eWaypoint;
          nWaypoint = -nWaypoint;
        } else if (distance === 270) {
          let e = eWaypoint;
          eWaypoint = -nWaypoint;
          nWaypoint = e;
        }
        break;
      case 'L':
        if (distance === 90) {
          let e = eWaypoint;
          eWaypoint = -nWaypoint;
          nWaypoint = e;
        } else if (distance === 180) {
          eWaypoint = -eWaypoint;
          nWaypoint = -nWaypoint;
        } else if (distance === 270) {
          let e = eWaypoint;
          eWaypoint = nWaypoint;
          nWaypoint = -e;
        }
        break;
    }
  });

  return Math.abs(eShip) + Math.abs(nShip);
}

export const manhattanDistance = async (inputFile) => {
  let e = 0;
  let n = 0;
  let f = 'E';
  
  const orders = await readInputFile(inputFile);
  orders.forEach(order => {
    const distance = +order.substring(1);
    const orderCall = order[0];
    switch(orderCall) {
      case 'N':
        n += distance;
        break;
      case 'E':
        e += distance;
        break;
      case 'S':
        n -= distance;
        break;
      case 'W':
        e -= distance;
        break;
      case 'F':
        if (f === 'N') {
          n += distance;
        } else if (f === 'E') {
          e += distance;
        } else if (f === 'S') {
          n -= distance;
        } else if (f === 'W') {
          e -= distance;
        }
        break;
      case 'R':
        if (distance === 90) {
          if (f === 'N') {
            f = 'E';
          } else if (f === 'E') {
            f = 'S';
          } else if (f === 'S') {
            f = 'W';
          } else if (f === 'W') {
            f = 'N';
          }
        } else if (distance === 180) {
          if (f === 'N') {
            f = 'S';
          } else if (f === 'E') {
            f = 'W';
          } else if (f === 'S') {
            f = 'N';
          } else if (f === 'W') {
            f = 'E';
          }
        } else if (distance === 270) {
          if (f === 'N') {
            f = 'W';
          } else if (f === 'E') {
            f = 'N';
          } else if (f === 'S') {
            f = 'E';
          } else if (f === 'W') {
            f = 'S';
          }
        }
        break;
      case 'L':
        if (distance === 90) {
          if (f === 'N') {
            f = 'W';
          } else if (f === 'E') {
            f = 'N';
          } else if (f === 'S') {
            f = 'E';
          } else if (f === 'W') {
            f = 'S';
          }
        } else if (distance === 180) {
          if (f === 'N') {
            f = 'S';
          } else if (f === 'E') {
            f = 'W';
          } else if (f === 'S') {
            f = 'N';
          } else if (f === 'W') {
            f = 'E';
          }
        } else if (distance === 270) {
          if (f === 'N') {
            f = 'E';
          } else if (f === 'E') {
            f = 'S';
          } else if (f === 'S') {
            f = 'W';
          } else if (f === 'W') {
            f = 'N';
          }
        }
        break;
    }
  });

  return Math.abs(e) + Math.abs(n);
}