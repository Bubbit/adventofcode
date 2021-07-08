# SPDX-License-Identifier: MIT
# Copyright (c) 2020 Akumatic
#
#https://adventofcode.com/2015/day/1

def readFile() -> list:
  with open(f"{__file__.rstrip('code.py')}input.txt", "r") as file:
    return file.read().replace('\n', '')

def part1(instructions) -> int:
  floor = 0

  for instruction in instructions:
    if instruction == "(" :
      floor = floor + 1
    elif instruction == ")" :
      floor = floor - 1
    else:
      print("wrong instruction" + instruction)

  return floor

def part2(instructions) -> int:
  floor = 0

  for index in range(len(instructions)):
    if instructions[index] == "(" :
      floor = floor + 1
    elif instructions[index] == ")" :
      floor = floor - 1
    else:
      print("wrong instruction" + instructions[index])

    if floor == -1:
      return index + 1


def test():
  # Part 1
  assert part1("(())") == 0
  assert part1("()()") == 0
  assert part1("(((") == 3
  assert part1("(()(()(") == 3
  assert part1("))(((((") == 3
  assert part1("())") == -1
  assert part1("))(") == -1
  assert part1(")))") == -3
  assert part1(")())())") == -3

  # Part 2
  assert part2(")") == 1
  assert part2("()())") == 5

if __name__ == "__main__":
  test()
  vals = readFile()
  print(f"Part 1: {part1(vals)}")
  print(f"Part 2: {part2(vals)}")
