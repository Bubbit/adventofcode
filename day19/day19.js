const { readInputFile } = require('./../util.js');

const check = (rules, rule, input) => {
	if (rule === 'a' || rule === 'b') {
		if (input[0] === rule) {
			return [input.slice(1)];
		} else {
			return [];
		}
	} else if (Number.isInteger(+rule)) {
		return check(rules, rules.get(rule), input);
	} else if (rule.indexOf('|') > -1) {
		const subrules = rule.split(' | ');
		return subrules.map(subrule => check(rules, subrule, input)).flat();
	} else {
		const subrules = rule.split(' ');
		let result = [input];
		for (let subrule of subrules) {
			result = result.map(i => check(rules, subrule, i)).flat();
		}
		return result;
	}
}


export const matchRules2 = async (inputFile) => {
  const input = await readInputFile(inputFile);
  let rules = [];
  let inputOption = [];
  let getRules = true;
  for(let line of input) {
    if(line === '') {
      getRules = false
      continue;
    }
    if(getRules) {
      rules.push(line);
    } else {
      inputOption.push(line);
    }
  };
  rules = new Map(rules.map(r => r.split(': ')));

  rules.set('8', '42 | 42 8');
	rules.set('11', '42 31 | 42 11 31');
	return input.filter(i => check(rules, '0', i).includes('')).length;  
}

export const matchRules = async (inputFile) => {
  const input = await readInputFile(inputFile);
  let rules = [];
  let inputOption = [];
  let getRules = true;
  for(let line of input) {
    if(line === '') {
      getRules = false
      continue;
    }
    if(getRules) {
      rules.push(line);
    } else {
      inputOption.push(line);
    }
  };
  rules = new Map(rules.map(r => r.split(': ')));
	return input.filter(i => check(rules, '0', i).includes('')).length;  
}