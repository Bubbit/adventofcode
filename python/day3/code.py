# --- Day 3: Perfectly Spherical Houses in a Vacuum ---
# Santa is delivering presents to an infinite two-dimensional grid of houses.
# 
# He begins by delivering a present to the house at his starting location, and then an elf at the North Pole calls him via radio and tells him where to move next. Moves are always exactly one house to the north (^), south (v), east (>), or west (<). After each move, he delivers another present to the house at his new location.
# 
# However, the elf back at the north pole has had a little too much eggnog, and so his directions are a little off, and Santa ends up visiting some houses more than once. How many houses receive at least one present?
# 
# For example:
# 
# > delivers presents to 2 houses: one at the starting location, and one to the east.
# ^>v< delivers presents to 4 houses in a square, including twice to the house at his starting/ending location.
# ^v^v^v^v^v delivers a bunch of presents to some very lucky children at only 2 houses.
#
# Your puzzle answer was 2572.
# 
# --- Part Two ---
# The next year, to speed up the process, Santa creates a robot version of himself, Robo-Santa, to deliver presents with him.
# 
# Santa and Robo-Santa start at the same location (delivering two presents to the same starting house), then take turns moving based on instructions from the elf, who is eggnoggedly reading from the same script as the previous year.
# 
# This year, how many houses receive at least one present?
# 
# For example:
# 
# ^v delivers presents to 3 houses, because Santa goes north, and then Robo-Santa goes south.
# ^>v< now delivers presents to 3 houses, and Santa and Robo-Santa end up back where they started.
# ^v^v^v^v^v now delivers presents to 11 houses, with Santa going one direction and Robo-Santa going the other.
# Your puzzle answer was 2631.

def readFile() -> list:
  with open(f"{__file__.rstrip('code.py')}input.txt", "r") as file:
    return file.read().replace('\n', '')

def part1(directions):
  uniqueHouses = 1
  x = 0
  y = 0

  visited = {'0.0'}

  for direction in directions:
    if direction == '^':
      y += 1
    elif direction == '>':
      x += 1
    elif direction == 'v':
      y -= 1
    elif direction == '<':
      x -= 1
  
    coords = str(x) + "." + str(y)
    if coords not in visited:
      uniqueHouses += 1
      visited.add(coords) 

  return uniqueHouses

def part2(directions):
  uniqueHouses = 1
  santaX = 0
  santaY = 0
  roboX = 0
  roboY = 0

  visited = {'0.0'}

  turn = 0

  for direction in directions:
    if direction == '^':
      if turn == 0:
        santaY += 1
      else:
        roboY += 1
    elif direction == '>':
      if turn == 0:
        santaX += 1
      else:
        roboX += 1
    elif direction == 'v':
      if turn == 0:
        santaY -= 1
      else:
        roboY -= 1
    elif direction == '<':
      if turn == 0:
        santaX -= 1
      else:
        roboX -= 1
  
    if turn == 0:
      coords = str(santaX) + "." + str(santaY)
    else:
      coords = str(roboX) + "." + str(roboY)

    if coords not in visited:
      uniqueHouses += 1
      visited.add(coords) 

    if turn == 0:
      turn = 1
    else:
      turn = 0

  return uniqueHouses

def test():
  # Part 1
  assert part1(">") == 2
  assert part1("^>v<") == 4
  assert part1("^v^v^v^v^v") == 2

  # Part 2
  assert part2("^v") == 3
  assert part2("^>v<") == 3
  assert part2("^v^v^v^v^v") == 11

if __name__ == "__main__":
  test()
  vals = readFile()
  print(f"Part 1: {part1(vals)}")
  print(f"Part 2: {part2(vals)}")