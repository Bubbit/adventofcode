const { readInputFile } = require('./../util.js');

export const countAllergens = async (inputFile) => {
  const input = await readInputFile(inputFile);

  const possibleMap = [];
  let safeIngredients = [];
  input.forEach(line => {
    const allergens = line.match(/\(contains ([\w\s,]*)\)/);
    const ingredients = line.match(/([\w\s]*)\(contains/);
    const splitIngredients = ingredients[1].split(' ');
    splitIngredients.pop();
    safeIngredients = safeIngredients.concat(splitIngredients);
    const splitAllergens = allergens[1].split(', ');
    splitAllergens.forEach(allergen => {
      if(possibleMap[allergen]) {
        possibleMap[allergen] = possibleMap[allergen].filter(val => splitIngredients.includes(val));
      } else {
        possibleMap[allergen] = splitIngredients;
      }
    });
  })

  return safeIngredients.filter((ing) => {
    let unSafe = false;
    for(let allergen in possibleMap) {
      unSafe = possibleMap[allergen].includes(ing);
      if(unSafe) {
        return !unSafe;
      }
    }
    return !unSafe;
  }).length;
}

export const dangerList = async (inputFile) => {
  const input = await readInputFile(inputFile);

  const possibleMap = [];
  input.forEach(line => {
    const allergens = line.match(/\(contains ([\w\s,]*)\)/);
    const ingredients = line.match(/([\w\s]*)\(contains/);
    const splitIngredients = ingredients[1].split(' ');
    splitIngredients.pop();
    const splitAllergens = allergens[1].split(', ');
    splitAllergens.forEach(allergen => {
      if(possibleMap[allergen]) {
        possibleMap[allergen] = possibleMap[allergen].filter(val => splitIngredients.includes(val));
      } else {
        possibleMap[allergen] = splitIngredients;
      }
    });
  })

  let notAllDone = true;
  while(notAllDone) {
    let allOne = true;
    for(let allergen in possibleMap) {
      if(possibleMap[allergen].length === 1) {
        for(let allergen2 in possibleMap) {
          if(allergen !== allergen2) {
            possibleMap[allergen2] = possibleMap[allergen2].filter(ing => ing !== possibleMap[allergen][0]);
          }
        }
      }
      if(allOne) {
        allOne = possibleMap[allergen].length === 1;
      }
    }
    notAllDone = !allOne;
  }
  let answer = '';
  const sortedAllergenNames = Object.keys(possibleMap).sort();
  for(let allergen in sortedAllergenNames) {
    answer += `${possibleMap[sortedAllergenNames[allergen]][0]},`
  }
  return answer;
}