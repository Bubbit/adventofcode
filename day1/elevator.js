export const elevator1 = (input) => {
  let floor = 0;
  input.split('').forEach((dir) => {
    floor += dir === '(' ? 1 : -1;
  })
  return floor;
}

export const elevator2 = (input) => {
  let floor = 0;
  let position;
  input.split('').some((dir, index) => {
    floor += dir === '(' ? 1 : -1;
    if(floor === -1) {
      position = index + 1;
      return true;
    }
    return false;
  });
  return position;
}