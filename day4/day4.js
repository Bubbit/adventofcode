const { readMultiLineInputFile } = require('./../util.js');

const countValid = (input) => {
  const validPassports = input.filter((passport) => {
    const splitPass = passport.split(' ');
    splitPass.pop();
    const byr = splitPass.some(field => { const split = field.split(':'); return split[0] === 'byr'});
    const iyr = splitPass.some(field => { const split = field.split(':'); return split[0] === 'iyr'});
    const eyr = splitPass.some(field => { const split = field.split(':'); return split[0] === 'eyr'});
    const hgt = splitPass.some(field => { const split = field.split(':'); return split[0] === 'hgt'});
    const hcl = splitPass.some(field => { const split = field.split(':'); return split[0] === 'hcl'});
    const ecl = splitPass.some(field => { const split = field.split(':'); return split[0] === 'ecl'});
    const pid = splitPass.some(field => { const split = field.split(':'); return split[0] === 'pid'});
    return byr && iyr && eyr && hgt && hcl && ecl && pid;
  });

  return validPassports.length;
}

const countValidAndCheck = (input) => {
  const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  const validPassports = input.filter((passport) => {
    const splitPass = passport.split(' ');
    splitPass.pop();
    const byr = splitPass.some(field => { 
      const split = field.split(':');
      return split[0] === 'byr' && (1920 <= Number(split[1]) && Number(split[1]) <= 2002);
    });
    const iyr = splitPass.some(field => { const split = field.split(':'); 
      return split[0] === 'iyr' && (2010 <= Number(split[1]) && Number(split[1]) <= 2020)})
    const eyr = splitPass.some(field => { const split = field.split(':'); 
      return split[0] === 'eyr' && (2020 <= Number(split[1]) && Number(split[1]) <= 2030)})
    const hgt = splitPass.some(field => { const split = field.split(':'); 
      if(split[0] === 'hgt') {
        const measure = split[1][split[1].length - 1];
        if(measure === 'm') {
          const value = Number(split[1].substring(0, split[1].length - 2));
          return 150 <= value && value <= 193;
        } else {
          const value = Number(split[1].substring(0, split[1].length - 2));
          return 59 <= value && value <= 76;
        }
      } else {
        return false;
      }
    });
    const hcl = splitPass.some(field => { const split = field.split(':'); return split[0] === 'hcl' && split[1].match(/#[0-9a-f]{6}$/)});
    const ecl = splitPass.some(field => { const split = field.split(':'); return split[0] === 'ecl' && eyeColors.some(color => color === split[1])});
    const pid = splitPass.some(field => { const split = field.split(':'); return split[0] === 'pid' && split[1].length === 9});
    return byr && iyr && eyr && hgt && hcl && ecl && pid;
  });

  return validPassports.length;
}

export const countPassports = async (input, extra) => {
  const rawData = await readMultiLineInputFile(input);
  if(extra) {
    return countValidAndCheck(rawData);
  } else {
    return countValid(rawData);
  }
}