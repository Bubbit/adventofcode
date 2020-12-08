const { readInputFile } = require('./../util.js');

export const runScript = (input) => {
  let global = 0;
  let field = 0;
  let double = false;
  let fullRun = false;

  while(!double && !fullRun) {
    let row = input[field];
    if(row.times) {
      double = true;
    } else {
      row.times++;
      if(row.action === 'nop') {
        field++;
      } else if (row.action === 'acc') {
        global = row.value[0] === '+' ? global + Number(row.value.substring(1)) : global - Number(row.value.substring(1));
        field++;
      } else if (row.action === 'jmp') {
        field = row.value[0] === '+' ? field + Number(row.value.substring(1)) : field - Number(row.value.substring(1));
      }
    }
    fullRun = field === input.length;
  }

  return { global, fullRun };
}

export const runGameConsole = async (input) => {
  const inputArray = await readInputFile(input);
  const enchancedInput = inputArray.map(entry => {
    const split = entry.split(' ');
    return { 
      action: split[0],
      times: 0,
      value: split[1]
    }
  })
  return runScript(enchancedInput).global;
}

export const fixGameConsole = async (input) => {
  const inputArray = await readInputFile(input);
  let notFound = true;
  let global = 0;
  let result;
  let index = 0;
  const enchancedInput = inputArray.map(entry => {
    const split = entry.split(' ');
    return { 
      action: split[0],
      times: 0,
      value: split[1],
      changed: false,
      changedLast: false
    }
  });

  while(notFound) {
    index = enchancedInput.findIndex(row => (row.action === 'jmp' || row.action === 'nop') && !row.changed);
    let copyCat = JSON.parse(JSON.stringify(enchancedInput));
    copyCat[index].action = copyCat[index].action === 'jmp' ? 'nop' : 'jmp';
    enchancedInput[index].changed = true;
    result = runScript(copyCat);
    if(result.fullRun) {
      global = result.global;
      notFound = false;
    }
  }

  return global;
}
