const { readInputFile } = require('./../util.js');

String.prototype.count=function(c) { 
  var result = 0, i = 0;
  for(i;i<this.length;i++)if(this[i]==c)result++;
  return result;
};

const split = (expression) => {
  const result = [];
  let braces = 0;
  let current = '';
  for(let i = 0; i < expression.length; i++) {
    const curCh = expression[i];
    if(curCh === '(') {
      braces++;
    } else if (curCh === ')') {
      braces--;
    }
    if(braces === 0 && (curCh === '+' || curCh === '*')) {
      current += curCh;
      result.push(current);
      current = '';
    } else {
      current += curCh;
    }
  }
  if (current !== '') {
    result.push(current);
  }

  return result;
}

const doMath = (expression) => {
  let numberOne = '';
  let numberTwo = '';
  let math = '';
  console.log(expression);
  for(let i = 0; i < expression.length; i++) {
    const curCh = expression[i];
    if(curCh === '+' || curCh === '*') {
      if(math === '') {
        math = curCh;
      } else {
        if(math === '+') {
          numberOne = +numberOne + +numberTwo;
          math = curCh;
        } else {
          numberOne = +numberOne * +numberTwo;
          math = curCh;
        }
      }
    } else {
      if(math === '') {
        numberOne += curCh;
      } else {
        numberTwo += curCh;
      }
    }
  }

  return numberOne + math;
}

const mathRound = (expressions) => {
  let newExpressions = [];
  console.log(expressions);
  expressions.forEach(single => {
    if(single.count('(') < 2) {
      single = single.replace(/[()\s]/g, '');
      newExpressions.push(doMath(single));
    } else {
      let index = single.indexOf('(');
      let newSingle = split(single.substring(index + 1, single.length - 1));
      newExpressions = newExpressions.concat(mathRound(newSingle));
    }
  })

  return newExpressions;
}

export const shitMath = (singleSum) => {
  let sum = 0;
  let result = split(singleSum);
  while(result.some(single => single.indexOf('(') > -1)) {
    console.log(result);
    result = mathRound(result);
    result = split(result);
  }

  console.log(result);
}