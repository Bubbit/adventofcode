const { readInputFile } = require('./../util.js');

export const flipTiles = async (inputFile) => {
  const input = await readInputFile(inputFile);

  const map = [];

  input.forEach(line => {
    let x = 0;
    let y = 0;
    
    let lineSplit = line.split('')
    for(let lineLoc = 0; lineLoc < lineSplit.length;) {
      if(lineSplit[lineLoc] === 'n' || lineSplit[lineLoc] === 's') {
        const step = lineSplit.splice(0, 2).join('');
        switch(step) {
          case 'ne':
              y -= 1;
            break;
          case 'nw':
              y -= 1;
              x -= 1;
            break;
          case 'se':
              y += 1;
              x += 1;
            break;
          case 'sw':
              y += 1;
            break;
        }
      } else {
        const step = lineSplit.splice(0, 1).join('');
        if(step === 'w') {
          x -= 1;
        } else {
          x += 1;
        }
      }
    }

    let findExistingOne = map.findIndex(value => value.x === x && value.y === y);
    if(findExistingOne !== -1) {
      map.splice(findExistingOne, 1);
    } else {
      map.push({ x, y });
    }
  });

  return map.length;
}

export const livingArt = async (inputFile) => {
  const input = await readInputFile(inputFile);

  let map = [];

  //init map
  input.forEach(line => {
    let x = 0;
    let y = 0;
    
    let lineSplit = line.split('')
    for(let lineLoc = 0; lineLoc < lineSplit.length;) {
      if(lineSplit[lineLoc] === 'n' || lineSplit[lineLoc] === 's') {
        const step = lineSplit.splice(0, 2).join('');
        switch(step) {
          case 'ne':
              y -= 1;
            break;
          case 'nw':
              y -= 1;
              x -= 1;
            break;
          case 'se':
              y += 1;
              x += 1;
            break;
          case 'sw':
              y += 1;
            break;
        }
      } else {
        const step = lineSplit.splice(0, 1).join('');
        if(step === 'w') {
          x -= 1;
        } else {
          x += 1;
        }
      }
    }

    let findExistingOne = map.findIndex(value => value.x === x && value.y === y);
    if(findExistingOne !== -1) {
      map.splice(findExistingOne, 1);
    } else {
      map.push({ x, y });
    }
  });

  // day thing
  for(let i = 0; i < 100; i++) {
    let newMap = [];
    let possibleTiles = new Set();
    map.forEach(tile => {
      possibleTiles.add(JSON.stringify({ x: tile.x - 1, y: tile.y -1 }));
      possibleTiles.add(JSON.stringify({ x: tile.x, y: tile.y - 1 }));
      possibleTiles.add(JSON.stringify({ x: tile.x, y: tile.y + 1}));
      possibleTiles.add(JSON.stringify({ x: tile.x + 1, y: tile.y + 1 }));
      possibleTiles.add(JSON.stringify({ x: tile.x - 1, y: tile.y }));
      possibleTiles.add(JSON.stringify({ x: tile.x + 1, y: tile.y }));
      possibleTiles.add(JSON.stringify(tile));
    })
    
    const arrayOfPossibleTiles = [...possibleTiles];
    arrayOfPossibleTiles.forEach(tile => {
      let count = 0;
      let tileObj = JSON.parse(tile);
      count += map.some(t => t.x === tileObj.x - 1 && t.y === tileObj.y -1) ? 1 : 0;
      count += map.some(t => t.x === tileObj.x && t.y === tileObj.y - 1) ? 1 : 0;
      count += map.some(t => t.x === tileObj.x && t.y === tileObj.y + 1) ? 1 : 0;
      count += map.some(t => t.x === tileObj.x + 1 && t.y === tileObj.y + 1) ? 1 : 0;
      count += map.some(t => t.x === tileObj.x - 1 && t.y === tileObj.y) ? 1 : 0;
      count += map.some(t => t.x === tileObj.x + 1 && t.y === tileObj.y) ? 1 : 0;
      if(map.some(t => t.x === tileObj.x && t.y === tileObj.y) && (count === 1 || count === 2)) {
        newMap.push(tileObj);
      } else if (count === 2) {
        newMap.push(tileObj);
      }
    });

    map = newMap;
  }

  return map.length;
}