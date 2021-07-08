const { readMultiLineInputFile } = require('./../util.js');

const checkAllEdges = (check, image) => {
  return (check  === image.north ||
    check  === image.east ||
    check  === image.south ||
    check  === image.west ||
    check === image.north.split('').reverse().join('') ||
    check === image.east.split('').reverse().join('') ||
    check === image.south.split('').reverse().join('') ||
    check === image.west.split('').reverse().join(''));
}

export const part1 = async (inputFile)=> {
  const input = await readMultiLineInputFile(inputFile);

  const images = input.map((value) => 
  { 
    let values = value.split(' ');
    let titleValues = values.splice(0, 2);

    let north = values[0];
    let south = values[9].split('').reverse().join('');
    let east = values[0][9] + values[1][9] + values[2][9] + values[3][9] + values[4][9] +
    values[5][9] + values[6][9] + values[7][9] + values[8][9] + values[9][9];
    let west = values[9][0] + values[8][0] + values[7][0] + values[6][0] + values[5][0] +
    values[4][0] + values[3][0] + values[2][0] + values[1][0] + values[0][0];

    return {
      north,
      east,
      south,
      west,
      title: titleValues[1].substring(0, titleValues[1].length - 1)
    };
  })

  let edgeCount = images.map((image) => {
    let count = 0;
    images.forEach(image2 => {
      if(image.title !== image2.title) {
        count += checkAllEdges(image.north, image2) ? 1 : 0;
        count += checkAllEdges(image.east, image2) ? 1 : 0;
        count += checkAllEdges(image.south, image2) ? 1 : 0;
        count += checkAllEdges(image.west, image2) ? 1 : 0;
      }
    });
    image.edges = count;
    return image;
  });

  let sum = 1;
  edgeCount.forEach(image => {
    if(image.edges === 2) {
      sum *= +image.title;
    }
  })

  return sum;
}

const flip = (image) => {
  let tWest = image.west;
  image.north = image.north.split('').reverse().join('');
  image.south = image.south.split('').reverse().join('');
  image.west = image.east;
  image.east = tWest;
  image.image = image.image.map(row => 
    row = row.split('').reverse().join('')
  );
  return image;
}

const rotate = (image => {
  return image;
})

export const part2 = async (inputFile)=> {
  const input = await readMultiLineInputFile(inputFile);

  const images = input.map((value) => { 
    let values = value.split(' ');
    let titleValues = values.splice(0, 2);

    let north = values[0];
    let south = values[9].split('').reverse().join('');
    let east = values[0][9] + values[1][9] + values[2][9] + values[3][9] + values[4][9] +
    values[5][9] + values[6][9] + values[7][9] + values[8][9] + values[9][9];
    let west = values[9][0] + values[8][0] + values[7][0] + values[6][0] + values[5][0] +
    values[4][0] + values[3][0] + values[2][0] + values[1][0] + values[0][0];

    return {
      north,
      east,
      south,
      west,
      title: titleValues[1].substring(0, titleValues[1].length - 1),
      image: values
    };
  })

  images.forEach((image) => {
    let count = 0;
    images.forEach(image2 => {
      if(image.title !== image2.title) {
        count += checkAllEdges(image.north, image2) ? 1 : 0;
        count += checkAllEdges(image.east, image2) ? 1 : 0;
        count += checkAllEdges(image.south, image2) ? 1 : 0;
        count += checkAllEdges(image.west, image2) ? 1 : 0;
      }
    });
    image.edges = count;
    return image;
  });

  let mappedImages = 0;
  let newRow = true;
  let firstRow = true;
  let row = 0;
  let maxCol = 0;
  let col = 0;
  while(mappedImages === images.length) {
    // new Row
    if(newRow) {
      if(firstRow) {
        let piece = images.find(image => image.edges === 2);
      } else {

      }
    } else {
      if(firstRow) {
        maxCol++;
      } else {
        col++;
        if(col === maxCol) {
          newRow = true;
          row++;
        }
      }
    }
  }
  let corner = images.find(image => image.edges === 2);

  console.log(corner);
  console.log(flip(corner));
  let nextPiece = images.find(image => corner.title !== image.title && checkAllEdges(corner.east, image))
  console.log(nextPiece);
  let nextPiece2 = images.find(image => nextPiece.title !== image.title && checkAllEdges(nextPiece.east, image))
  console.log(nextPiece2);
  return 0;
}