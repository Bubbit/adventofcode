
from input_reader import InputReader

def check_cycle(cycle, x, strength):
    if cycle == 20 or cycle == 60 or cycle == 100 or cycle == 140 or cycle == 180 or cycle == 220:
        strength += cycle * x

    return strength

def calc_sprite(cycle, x, row):
    position = (cycle % 40) - 1

    if position - 1 == x or position == x or position + 1 == x:
        row.append("#")
    else:
        row.append(".")

    return row

def main():
    # data = InputReader.get_command_line_input()
    data = InputReader.get_puzzle_input(False, False)

    x = 1
    cycle = 0

    strength = 0
    sprite = []
    row = []
    for command in data:
        if command == "noop":
            cycle += 1
            row = calc_sprite(cycle, x, row)
            if len(row) == 40:
                sprite.append(row)
                row = []
            strength = check_cycle(cycle, x, strength)    
        else:
            cycle += 1
            row = calc_sprite(cycle, x, row)
            if len(row) == 40:
                sprite.append(row)
                row = []
            strength = check_cycle(cycle, x, strength)
            cycle += 1
            row = calc_sprite(cycle, x, row)
            if len(row) == 40:
                sprite.append(row)
                row = []
            strength = check_cycle(cycle, x, strength)
            x += int(command.split(" ")[1])
        
    print(f"Part 1: {strength}")
    print("Part 2:")
    for row in sprite:
        print("".join(row))

main()