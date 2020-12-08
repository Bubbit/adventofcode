const { readInputFile } = require('./../util.js');

const nobagsregex = /([a-z\s]+)\scontain\s(.*)/

let options = [];
let total = 0;

const createTree = (input) => {
  const bigTree = {};
  input.forEach(rule => {
    const splitRule = rule.match(nobagsregex);
    if(splitRule) {
      const bagName = splitRule[1].replace(/\s/g, '_').replace(/s$/, '');
      bigTree[bagName] = [];
      const bags = splitRule[2].split(', ');
      bags.forEach(bag => {
        if(bag !== 'no other bags.') {
          const split = bag.substring(2, bag.length).replace(/\s/g, '_').replace('.', '').replace(/s$/, '');
          bigTree[bagName].push({
            bag: split,
            amount: Number(bag[0])
          });
        }

      })
    }
  })

  return bigTree;
}

const findBagOptions = (tree, bagColor) => {
  const bagOptions = Object.keys(tree).filter(bag => 
    tree[bag].find(bagOption => {
      return bagOption.bag === bagColor
    })
  )

  bagOptions.forEach(option => {
    options.push(option);
    findBagOptions(tree, option);
  })
}

const countBags = (tree, bagColor) => {
  let amount = 1;
  tree[bagColor].forEach(bag => {
    amount += bag.amount * countBags(tree, bag.bag);
  });

  return amount;
}

export const bagsOptions = async (input, bagColor) => {
  options = [];
  const inputArray = await readInputFile(input);
  const tree = createTree(inputArray);
  findBagOptions(tree, bagColor);

  const setOfOptions = new Set(options);

  return setOfOptions.size;
}

export const requiredBags = async (input, bagColor) => {
  const inputArray = await readInputFile(input);
  const tree = createTree(inputArray);
  total = countBags(tree, bagColor);

  return total - 1;
}