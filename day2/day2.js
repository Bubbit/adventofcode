const readline = require('readline');
const fs = require('fs');
const { readInputFile } = require('./../util.js');

const count = (str, character) => {
  const re = new RegExp(character, 'g');
  return ((str || '').match(re) || []).length
}

export const checkPassword = (input) => {
  const parts = input.split(' ');
  const minMax = parts[0].split('-');
  const character = parts[1].split(':')[0];
  const password = parts[2];
  const occurences = count(password, character);
  return minMax[0] <=occurences && occurences <= minMax[1];
}

export const checkPassword2 = (input) => {
  const parts = input.split(' ');
  const positions = parts[0].split('-');
  const character = parts[1].split(':')[0];
  const password = parts[2];
  return !(password[positions[0]-1] === character) ^ !(password[positions[1]-1] === character);
}

export const readPasswordFile = async (input) => {
  const passwords = await readInputFile(input);
  const validPasswords = passwords.filter((input) => checkPassword(input));
  return validPasswords.length;
}

export const readPasswordFile2 = async (input) => {
  const passwords = await readInputFile(input);
  const validPasswords = passwords.filter((input) => checkPassword2(input));
  return validPasswords.length;
}