
from input_reader import InputReader

def main():
    # data = InputReader.get_command_line_input()
    data = InputReader.get_puzzle_input(False)
    score = 0
    for rucksack in data:
        items = int(len(rucksack) / 2)
        first_half = rucksack[:items]
        second_half = rucksack[items:]
        for char in first_half:
            if char in second_half:
                break
        if char.isupper():
            score += ord(char) - 38
        else:
            score += ord(char) - 96

    print(score)

    group = 0
    data_for_group = []
    scoreTwo = 0
    for rucksack in data:
        if group == 3:
            for char in data_for_group[0]:
                if char in data_for_group[1] and char in data_for_group[2]:
                    break
            if char.isupper():
                scoreTwo += ord(char) - 38
            else:
                scoreTwo += ord(char) - 96
            group = 0
            data_for_group = []

        data_for_group.append(rucksack)
        group += 1

    for char in data_for_group[0]:
        if char in data_for_group[1] and char in data_for_group[2]:
            break
    if char.isupper():
        scoreTwo += ord(char) - 38
    else:
        scoreTwo += ord(char) - 96

    print(scoreTwo)

main()