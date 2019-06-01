export const elevator1 = (input) => {
  let floor = 0;
  input.split('').forEach((dir) => {
    floor += dir === '(' ? 1 : -1;
  })
  return floor;
}