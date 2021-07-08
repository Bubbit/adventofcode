const { readInputFile } = require('./../util.js');

export const initMasksValue = async (inputFile) => {
  const input = await readInputFile(inputFile);
  let mask = '';
  let memory = [];
  input.forEach(line => {
    if(line.startsWith('mask')) {
      mask = line.split(' = ')[1];
    } else {
      let split = line.split(' = ');
      let value = +split[1];
      let memSlot = split[0].substring(4, split[0].length - 1);
      value = value.toString(2);
      while(value.length !== mask.length) {
        value = '0'.concat(value);
      }
      value = value.split('');
      for (let i = 0; i < mask.length; i++) {
        if(mask[i] !== 'X') {
          value[i] = mask[i]
        }
      }
      memory[memSlot] = value.join('');
    }
  });

  return memory.reduce((cummulator, value) => 
    cummulator + parseInt(value, 2)
  , 0);
}

export const floatingMasksValue = async (inputFile) => {
  const input = await readInputFile(inputFile);
  let mem = {};
let mask;
let alts = [];
for (let i of input) {
  let cmd = i.split(" = ")[0];
  let val = i.split(" = ")[1];
  
  if (cmd == "mask") {
    mask = val;
    alts = [0];
    for (let j=0;j<36;j++) {
      if (mask[j] == "X") {
        let altsb = [];
        for (let k of alts) {
          altsb.push(2**(35-j) + k);
        }
        alts = alts.concat(altsb);
      }
    }
    continue;
  }
  cmd = parseInt(cmd.substr(4)).toString(2).split("");
  val = parseInt(val);
  while (cmd.length < 36) cmd.unshift(0);
  
  for (let j=0;j<36;j++) {
    if (mask[j] == "0") continue;
    if (mask[j] == "1") cmd[j] = 1;
    if (mask[j] == "X") cmd[j] = 0;
  }
  cmd = parseInt(cmd.join().replace(",",""),2);
  
  for (let k of alts) {
    mem[cmd+k] = val;
  }
}

let sum = 0;
for (let i in mem) {
  sum += mem[i];
}
return sum;
  let mask = '';
  let memory = [];
  input.forEach(line => {
    if(line.startsWith('mask')) {
      mask = line.split(' = ')[1];
    } else {
      let split = line.split(' = ');
      let realValue = +split[1];
      let memSlot = split[0].substring(4, split[0].length - 1);
      let value = +memSlot;
      value = value.toString(2);
      while(value.length !== mask.length) {
        value = '0'.concat(value);
      }
      value = value.split('');
      let tempValue = [];
      for (let i = 0; i < mask.length; i++) {
        if(mask[i] === 'X') {
          tempValue[i] = 'X';
        } else if (mask[i] === '0') {
          tempValue[i] = value[i];
        } else {
          tempValue[i] = '1';
        }
      }
      const values = [tempValue];
      tempValue.forEach((value, index) => {
        if(value === 'X') {
          values.forEach(array => {
            let tempArray = JSON.parse(JSON.stringify(array));
            array[index] = '0';
            tempArray[index] = '1';
            values.push(tempArray);
          })
        }
      });
      values.forEach((value) => 
       memory[parseInt(value.join(''), 2)] = realValue
      )

      console.log(realValue);
    }
  });

  console.log(memory.length);
  return memory.reduce((cummulator, value) => {
    console.log(cummulator);
    return cummulator + value
  }
  , 0);
}

