import { readInputFile } from "../util";

export const calculateExpr = (str) => {
  str = str += ' ';
  let result = 0;
  let numberStr = '';
  let readType = 'number';
  let expr = '';
  let buffer = [];
  for (let index = 0; index < str.length; index++) {
    const char = str.charAt(index);
    if (char.match(/\d/)) {
      readType = 'number';
      numberStr += char;
    }
    if (char == ' ' && numberStr.length > 0) {
      buffer.push(parseInt(numberStr));
      readType = 'space';
      numberStr = '';
    }
    if (char == '*' || char == '+') {
      readType = 'expr';
      expr = char;
    }
    if (char == '(') {
      let charMatch = 0;
      for (let j = index + 1; j <= str.length; j++) {
        const char = str.charAt(j);
        if (char == '(') {
          charMatch += 1;
        }
        if (char == ')') {
          if (charMatch == 0) {
            buffer.push(calculateExpr(str.slice(index + 1, j)));
            index = j + 1;
            break;
          }
          charMatch -= 1;
        }
      }
      readType = 'space';
    }
 
    if (readType == 'space' && expr.length > 0 && buffer.length == 2) {
      switch (expr) {
        case '+':
          result = buffer[0] + buffer[1];
          expr = '';
          buffer = [result];
          break;
        case '*':
          result = buffer[0] * buffer[1];
          buffer = [result];
          expr = ' f';
          break;
      }
    }
  }
  return buffer[0];
}

export const part1 = async (input) => {
  const lines = await readInputFile(input);
  let result = 0;
  result = lines.reduce((p, line) => {
    return p + calculateExpr(line);
  }, 0);
  return result
}

export const calculateExpr2 = (str) => {
  str = str += ' ';
  let result = 0;
  let numberStr = '';
  let readType = 'number';
  let expr = '';
  let buffer = [];
  for (let index = 0; index < str.length; index++) {
    const char = str.charAt(index);
    if (char.match(/\d/)) {
      readType = 'number';
      numberStr += char;
    }
    if (char == ' ' && numberStr.length > 0) {
      buffer.push(parseInt(numberStr));
      readType = 'space';
      numberStr = '';
    }
    if (char == '*' || char == '+') {
      readType = 'expr';
      expr = char;
    }
    if (char == '(') {
      let charMatch = 0;
      for (let j = index + 1; j <= str.length; j++) {
        const char = str.charAt(j);
        if (char == '(') {
          charMatch += 1;
        }
        if (char == ')') {
          if (charMatch == 0) {
            buffer.push(calculateExpr2(str.slice(index + 1, j)));
            index = j + 1;
            break;
          }
          charMatch -= 1;
        }
      }
      readType = 'space';
    }
 
    if (readType == 'space' && expr.length > 0 && buffer.length >= 2) {
      switch (expr) {
        case '+':
          const value = buffer[buffer.length - 1] + buffer[buffer.length - 2];
          buffer.pop();
          buffer.pop();
          expr = '';
          buffer.push(value);
          break;
      }
    }
  }
  result = buffer.reduce((p, a) => p * a, 1);
  return result;
}

export const part2 = async (input) => {
  const lines = await readInputFile(input);
  let result = 0;
  result = lines.reduce((p, line) => {
    return p + calculateExpr2(line);
  }, 0);
  return result
}
