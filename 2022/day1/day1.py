
from input_reader import InputReader

def main():
    # data = InputReader.get_command_line_input()
    # PART ONE
    data = InputReader.get_puzzle_input(False)
    elves = []
    calories = 0
    max_calories = 0
    for line in data:
        if line == "":
            elves.append(calories)
            if calories > max_calories:
                max_calories = calories
            calories = 0
        else:
            calories += int(line)

    print(max_calories)

    elves.sort(reverse=True)

    print(elves[0] + elves[1] + elves[2])

main()