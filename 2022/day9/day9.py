
from input_reader import InputReader

def rope(amount_of_knots, data):
    grid = {}
    knots = [list([0, 0]) for _ in range(amount_of_knots)]
    
    for line in data:
        command = line.split(" ")
        for i in range(0, int(command[1])):
            match command[0]:
                case "R":
                    knots[0][0] += 1
                case "L":
                    knots[0][0] -= 1
                case "U":
                    knots[0][1] -= 1
                case "D":
                    knots[0][1] += 1

            for i in range(1, len(knots)):
                if knots[i - 1][0] == knots[i][0]:
                    if knots[i - 1][1] - knots[i][1] > 1:
                        knots[i][1] += 1
                    elif knots[i][1] - knots[i - 1][1] > 1:
                        knots[i][1] -= 1
                elif knots[i - 1][1] == knots[i][1]:
                    if knots[i - 1][0] - knots[i][0] > 1:
                        knots[i][0] += 1
                    elif knots[i][0] - knots[i - 1][0] > 1:
                        knots[i][0] -= 1

                if knots[i - 1][0] - knots[i][0] > 1 and knots[i - 1][1] > knots[i][1]:
                    knots[i][0] += 1
                    knots[i][1] += 1
                elif knots[i][0] - knots[i - 1][0] > 1 and knots[i - 1][1] > knots[i][1]:
                    knots[i][0] -= 1
                    knots[i][1] += 1
                elif knots[i - 1][1] - knots[i][1] > 1 and knots[i - 1][0] > knots[i][0]:
                    knots[i][0] += 1
                    knots[i][1] += 1
                elif knots[i][1] - knots[i - 1][1] > 1 and knots[i - 1][0] > knots[i][0]:
                    knots[i][0] += 1
                    knots[i][1] -= 1
                elif knots[i - 1][0] - knots[i][0] > 1 and knots[i - 1][1] < knots[i][1]:
                    knots[i][0] += 1
                    knots[i][1] -= 1
                elif knots[i][0] - knots[i - 1][0] > 1 and knots[i - 1][1] < knots[i][1]:
                    knots[i][0] -= 1
                    knots[i][1] -= 1
                elif knots[i - 1][1] - knots[i][1] > 1 and knots[i - 1][0] < knots[i][0]:
                    knots[i][0] -= 1
                    knots[i][1] += 1
                elif knots[i][1] - knots[i - 1][1] > 1 and knots[i - 1][0] < knots[i][0]:
                    knots[i][0] -= 1
                    knots[i][1] -= 1
           
            if f'{knots[i][0]}-{knots[i][1]}' in grid:
                grid[f'{knots[i][0]}-{knots[i][1]}'] += 1
            else:
                grid[f'{knots[i][0]}-{knots[i][1]}'] = 1

    return grid

def main():
    # data = InputReader.get_command_line_input()
    data = InputReader.get_puzzle_input(False, False)
           
    print(f"Part 1: {len(rope(2, data))}")
    print(f"Part 2: {len(rope(10, data))}")    

main()