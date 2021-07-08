# --- Day 4: The Ideal Stocking Stuffer ---
# Santa needs help mining some AdventCoins (very similar to bitcoins) to use as gifts for all the economically forward-thinking little girls and boys.
# 
# To do this, he needs to find MD5 hashes which, in hexadecimal, start with at least five zeroes. The input to the MD5 hash is some secret key (your puzzle input, given below) followed by a number in decimal. To mine AdventCoins, you must find Santa the lowest positive number (no leading zeroes: 1, 2, 3, ...) that produces such a hash.
# 
# For example:
# 
# If your secret key is abcdef, the answer is 609043, because the MD5 hash of abcdef609043 starts with five zeroes (000001dbbfa...), and it is the lowest such number to do so.
# If your secret key is pqrstuv, the lowest number it combines with to make an MD5 hash starting with five zeroes is 1048970; that is, the MD5 hash of pqrstuv1048970 looks like 000006136ef....
# Your puzzle answer was 346386.
# 
# --- Part Two ---
# Now find one that starts with six zeroes.
# 
# Your puzzle answer was 9958218.
# 

import hashlib

def readFile() -> list:
  with open(f"{__file__.rstrip('code.py')}input.txt", "r") as file:
    return [line[:-1] for line in file.readlines()]

def part1(key):
  number = 0
  notFound = True

  while(notFound):
    value = key + str(number)
    result = hashlib.md5(value.encode())
    hex = result.hexdigest()

    if hex[0:5] == "00000":
      notFound = False
    else:
      number += 1

  return number

def part2(key):
  number = 9900000
  notFound = True

  while(notFound):
    value = key + str(number)
    result = hashlib.md5(value.encode())
    hex = result.hexdigest()

    if hex[0:6] == "000000":
      notFound = False
    else:
      number += 1

  return number

def test():
  # Part 1
  assert part1("abcdef") == 609043
  assert part1("pqrstuv") == 1048970

if __name__ == "__main__":
  test()
  print("Part 1: " + str(part1("iwrupvqb")))
  print("Part 2: " + str(part2("iwrupvqb")))