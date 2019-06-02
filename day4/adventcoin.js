const CryptoJS = require("crypto-js");

export const md5 = (input, startString) => {
  let hash = '';
  let number = 0;
  do {
    number++;
    hash = CryptoJS.MD5(input + number).toString();
  } while (hash.indexOf(startString) !== 0);
  
  return number;
}